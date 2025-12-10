export default function NoticesPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Mentions Légales</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Éditeur du site</h2>
                <p>
                    Le site <strong>ScootParts</strong> est édité par :<br />
                    <strong>Steven Pollet</strong><br />
                    Entrepreneur Individuel (En cours d'immatriculation)<br />
                    Adresse : 3 chemin de la vieille passerelle<br />
                    Email : contact@scootparts.com<br />
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Hébergement</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Le site est hébergé par Vercel Inc.<br />
                    440 N Barranca Ave #4133<br />
                    Covina, CA 91723<br />
                    États-Unis
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Propriété intellectuelle</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                </p>
            </section>
        </div>
    );
}
