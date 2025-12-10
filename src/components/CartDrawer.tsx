"use client";

import { useCart } from "@/lib/cart";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CartDrawer() {
    const { isCartOpen, closeCart, items, removeFromCart, total } = useCart();
    const drawerRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeCart();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeCart]);

    // Handle click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) closeCart();
    };

    if (!isCartOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1000,
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                justifyContent: 'flex-end',
                transition: 'opacity 0.3s ease'
            }}
            onClick={handleBackdropClick}
        >
            <div
                ref={drawerRef}
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: '100%',
                    backgroundColor: '#0a0a0a',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '-4px 0 24px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'slideIn 0.3s ease-out'
                }}
            >
                {/* Header */}
                <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Votre Panier ({items.length})</h2>
                    <button
                        onClick={closeCart}
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.5rem', cursor: 'pointer' }}
                    >
                        ×
                    </button>
                </div>

                {/* Items */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
                    {items.length === 0 ? (
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
                            <p>Votre panier est vide</p>
                            <button onClick={closeCart} style={{ color: 'var(--primary)', marginTop: '1rem', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                                Continuer les achats
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {items.map((item) => (
                                <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: '64px', height: '64px', background: '#fff', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                                        {item.image && <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.name}</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                                {item.quantity} x {item.price.toFixed(2)}€
                                            </span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                style={{ color: '#ef4444', fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer' }}
                                            >
                                                Retirer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', background: '#0f0f0f' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            <span>Total</span>
                            <span>{total.toFixed(2)}€</span>
                        </div>
                        <Link
                            href="/checkout"
                            onClick={closeCart}
                            className="btn btn-primary"
                            style={{ display: 'block', textAlign: 'center', width: '100%' }}
                        >
                            Passer à la caisse
                        </Link>
                        <Link
                            href="/cart"
                            onClick={closeCart}
                            style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}
                        >
                            Voir le panier complet
                        </Link>
                    </div>
                )}
            </div>

            <style jsx global>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}
