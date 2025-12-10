"use client";
import Link from 'next/link';
import { useCart } from '@/lib/cart';

export default function Navbar() {
    const { openCart, items } = useCart();
    return (
        <nav className="glass-panel" style={{
            padding: '1.2rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Scoot<span style={{ color: 'var(--primary)' }}>Parts</span>
                </Link>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link href="/" className="nav-link">Boutique</Link>
                    <button
                        onClick={openCart}
                        className="nav-link"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', padding: 0 }}
                    >
                        Panier {items.length > 0 && `(${items.length})`}
                    </button>
                </div>
            </div>
        </nav>
    );
}
