import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '1.2rem 0',
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
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
                    <Link href="/cart" className="nav-link">Panier</Link>
                    <Link href="/admin" className="nav-link" style={{ color: 'var(--text-muted)' }}>Admin</Link>
                </div>
            </div>
        </nav>
    );
}
