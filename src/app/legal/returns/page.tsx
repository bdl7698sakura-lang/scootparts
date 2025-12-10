export default function ReturnsPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Politique de Retour</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Retours</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Conformément à nos conditions de vente spécifiques (Dropshipping), les retours ne sont généralement pas acceptés sauf en cas de défaut de fabrication avéré ou de produit endommagé à la réception.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Procédure</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Pour toute réclamation, veuillez contacter notre service client dans un délai de 48 heures après réception du colis, avec photos à l'appui.
                </p>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                    Adresse de retour (uniquement après validation du service client) :<br />
                    ScootParts Returns<br />
                    ScootParts Returns<br />
                    3 chemin de la vieille passerelle
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Remboursements</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Une fois votre retour reçu et inspecté, nous vous adresserons un e-mail pour vous indiquer que nous avons reçu l'article retourné. Nous vous préciserons également si votre remboursement est approuvé ou refusé.
                </p>
            </section>
        </div>
    );
}
