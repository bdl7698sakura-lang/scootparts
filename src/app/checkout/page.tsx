"use client";
import React, { useState } from 'react';
import { useCart } from '@/lib/cart';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { items, total } = useCart();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate Order Creation
        const order = {
            id: Date.now(),
            customer: formData,
            items: items,
            total: total,
            date: new Date().toISOString(),
            status: 'pending'
        };

        // Save to local storage for Admin Dashboard simulation
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        localStorage.setItem('orders', JSON.stringify([order, ...existingOrders]));

        // Clear cart (optional, but good practice)
        // localStorage.removeItem('cart'); // In a real app we'd clear context too

        alert("Commande passée avec succès ! (Simulation)");
        router.push('/admin'); // Redirect to admin to show the result
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem' }}>Paiement</h1>

            <div className="card" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Détails de livraison</h2>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nom Complet</label>
                        <input
                            required
                            name="name"
                            onChange={handleChange}
                            type="text"
                            style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius-sm)' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                        <input
                            required
                            name="email"
                            onChange={handleChange}
                            type="email"
                            style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius-sm)' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Adresse</label>
                        <input
                            required
                            name="address"
                            onChange={handleChange}
                            type="text"
                            style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius-sm)' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Ville</label>
                            <input
                                required
                                name="city"
                                onChange={handleChange}
                                type="text"
                                style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius-sm)' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Code Postal</label>
                            <input
                                required
                                name="zip"
                                onChange={handleChange}
                                type="text"
                                style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius-sm)' }}
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                            <span>Total</span>
                            <span>{total.toFixed(2)}€</span>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
                            Commander (Simulation)
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
