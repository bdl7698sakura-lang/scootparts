"use client";
import React, { useState } from 'react';
import { useCart } from '@/lib/cart';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function CheckoutPage() {
    const { items, total } = useCart();
    const router = useRouter();
    const { user } = useUser();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ensure user is signed in
        if (!user || !user.id) {
            alert('Vous devez être connecté pour passer commande.');
            router.push('/sign-in');
            return;
        }

        // Realistic Order Creation (stored locally for now)
        const order = {
            id: Date.now(),
            userId: user.id,
            customer: { ...formData, email: user.primaryEmailAddress?.emailAddress || formData.email, name: user.fullName || formData.name },
            items: items,
            total: total,
            date: new Date().toISOString(),
            status: 'completed'
        };

        // Save to local storage for Admin Dashboard simulation
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        localStorage.setItem('orders', JSON.stringify([order, ...existingOrders]));

        // Clear cart
        localStorage.removeItem('cart');

        alert("Commande validée avec succès !");
        router.push('/admin'); // Redirect to admin to show the result
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
            {/* Left Column: Form */}
            <div>
                <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Paiement Sécurisé <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>🔒</span></h1>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>📍</span> Livraison
                        </h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                                <input
                                    required
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="jean.dupont@exemple.com"
                                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', borderRadius: '6px' }}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Prénom</label>
                                    <input required name="name" onChange={handleChange} type="text" placeholder="Jean" style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', borderRadius: '6px' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Nom</label>
                                    <input required name="lastname" type="text" placeholder="Dupont" style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', borderRadius: '6px' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Adresse</label>
                                <input required name="address" onChange={handleChange} type="text" placeholder="123 rue de la République" style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', borderRadius: '6px' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ville</label>
                                    <input required name="city" onChange={handleChange} type="text" placeholder="Paris" style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', borderRadius: '6px' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Code Postal</label>
                                    <input required name="zip" onChange={handleChange} type="text" placeholder="75001" style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', borderRadius: '6px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                        <span>🔒</span> Payer {total.toFixed(2)}€
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Toutes les transactions sont sécurisées et chiffrées.
                    </p>
                </form>
            </div>

            {/* Right Column: Order Summary */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', height: 'fit-content', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Récapitulatif</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    {items.map(item => (
                        <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '6px', overflow: 'hidden' }}>
                                {item.image && <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>{item.name}</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Qté: {item.quantity}</p>
                            </div>
                            <p style={{ fontWeight: 'bold' }}>{item.price}€</p>
                        </div>
                    ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                        <span>Sous-total</span>
                        <span>{total.toFixed(2)}€</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                        <span>Livraison</span>
                        <span style={{ color: '#10b981' }}>Gratuite</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
                        <span>Total</span>
                        <span>{total.toFixed(2)}€</span>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                    {/* Fake generic card icons */}
                    <div style={{ width: '40px', height: '25px', background: '#333', borderRadius: '4px' }}></div>
                    <div style={{ width: '40px', height: '25px', background: '#333', borderRadius: '4px' }}></div>
                    <div style={{ width: '40px', height: '25px', background: '#333', borderRadius: '4px' }}></div>
                </div>
            </div>
        </div>
    );
}
