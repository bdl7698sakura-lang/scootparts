"use client";
import React, { useEffect, useState } from 'react';

export default function AdminPage() {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('orders');
        if (saved) {
            setOrders(JSON.parse(saved));
        }
    }, []);

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Tableau de Bord Admin</h1>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                Voici les commandes passées par vos clients. Utilisez ces détails pour exécuter la commande sur AliExpress.
            </p>

            {orders.length === 0 ? (
                <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    Aucune commande pour le moment.
                </div>
            ) : (
                <div className="grid" style={{ gap: '2rem' }}>
                    {orders.map((order) => (
                        <div key={order.id} className="card" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem' }}>Commande #{order.id}</h3>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{new Date(order.date).toLocaleString()}</span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>{order.total.toFixed(2)}€</div>
                                    <span
                                        style={{
                                            fontSize: '0.8rem',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '999px',
                                            background: 'rgba(234, 179, 8, 0.2)',
                                            color: '#fbbf24',
                                            border: '1px solid rgba(251, 191, 36, 0.3)'
                                        }}>
                                        {order.status.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Livrer à</h4>
                                    <p style={{ marginTop: '0.5rem' }}>
                                        <strong>{order.customer.name}</strong><br />
                                        {order.customer.address}<br />
                                        {order.customer.city}, {order.customer.zip}<br />
                                        {order.customer.email}
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Articles</h4>
                                    <ul style={{ marginTop: '0.5rem', listStyle: 'none' }}>
                                        {order.items.map((item: any) => (
                                            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                <span>{item.name} x {item.quantity}</span>
                                                <span>{(item.price * item.quantity).toFixed(2)}€</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
