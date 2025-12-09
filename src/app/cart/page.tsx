"use client";
import { useCart } from '@/lib/cart';
import Link from 'next/link';

export default function CartPage() {
    const { items, removeFromCart, total } = useCart();

    if (items.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h2>Votre panier est vide</h2>
                <Link href="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Continuer vos achats
                </Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Votre Panier</h1>

            <div className="grid" style={{ gap: '2rem' }}>
                {items.map((item) => (
                    <div key={item.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.5rem',
                        background: 'var(--surface)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Quantité: {item.quantity}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{(item.price * item.quantity).toFixed(2)}€</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="btn btn-secondary"
                                style={{ color: '#ef4444', borderColor: '#ef4444' }}
                            >
                                Retirer
                            </button>
                        </div>
                    </div>
                ))}

                <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                    <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Total: <span style={{ fontWeight: 'bold' }}>{total.toFixed(2)}€</span>
                    </p>
                    <Link href="/checkout" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        Passer la commande
                    </Link>
                </div>
            </div>
        </div>
    );
}
