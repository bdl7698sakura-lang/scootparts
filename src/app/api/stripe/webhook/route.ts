import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import axios from 'axios';
import nodemailer from 'nodemailer';

const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '';
const telegramChatId = process.env.TELEGRAM_CHAT_ID || '';
const smtpHost = process.env.SMTP_HOST || '';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER || '';
const smtpPass = process.env.SMTP_PASS || '';
const notifyFrom = process.env.NOTIFY_EMAIL_FROM || 'no-reply@example.com';
const notifyTo = process.env.NOTIFY_EMAIL_TO || '';

const stripe = new Stripe(stripeSecret, { apiVersion: '2022-11-15' } as any);

async function sendTelegram(text: string) {
  if (!telegramToken || !telegramChatId) return;
  try {
    await axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      chat_id: telegramChatId,
      text,
      parse_mode: 'HTML',
    });
  } catch (e) {
    console.error('Telegram send failed', e);
  }
}

async function sendEmail(subject: string, text: string) {
  if (!smtpHost || !smtpUser || !smtpPass || !notifyTo) return;
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: notifyFrom,
      to: notifyTo,
      subject,
      text,
      html: `<pre>${text}</pre>`,
    });
  } catch (e) {
    console.error('Email send failed', e);
  }
}

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature') || '';
  let buf: Uint8Array;
  try {
    const arrayBuffer = await req.arrayBuffer();
    buf = new Uint8Array(arrayBuffer);
  } catch (e) {
    return new NextResponse('Unable to read request body', { status: 400 });
  }

  let event: Stripe.Event;
  try {
    // stripe.webhooks.constructEvent expects a Buffer-like
    const raw = Buffer.from(buf.buffer);
    event = stripe.webhooks.constructEvent(raw, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err?.message || err);
    return new NextResponse(`Webhook Error: ${err?.message || err}`, { status: 400 });
  }

  // Handle the event types we care about
  try {
    if (event.type === 'checkout.session.completed' || event.type === 'payment_intent.succeeded') {
      // Extract useful info
      const session = (event.type === 'checkout.session.completed') ? (event.data.object as Stripe.Checkout.Session) : null;
      const paymentIntent = (event.type === 'payment_intent.succeeded') ? (event.data.object as Stripe.PaymentIntent) : null;

      const amount = session?.amount_total || paymentIntent?.amount_received || 0;
      const currency = session?.currency || paymentIntent?.currency || 'EUR';
      const customerEmail = (session?.customer_details as any)?.email || ((paymentIntent as any)?.charges?.data?.[0]?.billing_details?.email) || 'unknown';
      const text = `Nouvelle commande payée\nMontant: ${(Number(amount) / 100).toFixed(2)} ${currency.toUpperCase()}\nClient: ${customerEmail}\nType événement: ${event.type}\nID: ${event.id}`;

      // Send notifications (async, don't block webhook response too long)
      await Promise.all([sendTelegram(text), sendEmail('Nouvelle commande payée', text)]);
    }
  } catch (e) {
    console.error('Error handling webhook event', e);
  }

  return NextResponse.json({ received: true });
}
