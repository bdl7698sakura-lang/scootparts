export default function TermsPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Conditions Générales de Vente (CGV)</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Objet</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Les présentes conditions régissent les ventes par la société ScootParts de trottinettes électriques et accessoires.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Prix</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC), sauf indication contraire et hors frais de traitement et d'expédition.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Commandes</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Vous pouvez passer commande sur notre site Internet. Les informations contractuelles sont présentées en langue française et feront l'objet d'une confirmation au plus tard au moment de la validation de votre commande.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Validation de votre commande</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Toute commande figurant sur le site Internet ScootParts suppose l'adhésion à ces Conditions Générales. Toute confirmation de commande entraîne votre adhésion pleine et entière aux présentes conditions générales de vente, sans exception ni réserve.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Paiement</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Le fait de valider votre commande implique pour vous l'obligation de payer le prix indiqué. Le règlement de vos achats s'effectue par carte bancaire grâce au système sécurisé.
                </p>
            </section>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4rem' }}>
                Dernière mise à jour : {new Date().toLocaleDateString()}
            </p>
        </div>
    );
}
