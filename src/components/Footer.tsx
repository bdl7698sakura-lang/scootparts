import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--surface)',
            padding: '4rem 2rem',
            marginTop: 'auto',
            borderTop: '1px solid var(--border)'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>

                {/* Brand Section */}
                <div style={{ gridColumn: 'span 1' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #a5a5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        ScootParts
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        Votre partenaire de confiance pour la mobilité électrique. Pièces détachées, accessoires et expertise.
                    </p>
                </div>

                {/* Links Section 1 */}
                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Boutique</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Accueil</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/cart" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Panier</Link></li>
                    </ul>
                </div>

                {/* Links Section 2 */}
                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Informations</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>À Propos</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Contact</Link></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Légal</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/legal/terms" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>CGV</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/legal/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Confidentialité</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/legal/notices" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mentions Légales</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link href="/legal/returns" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Retours</Link></li>
                    </ul>
                </div>
            </div>

            <div style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.8rem'
            }}>
                © {new Date().getFullYear()} ScootParts. Tous droits réservés.
            </div>
        </footer>
    );
}
