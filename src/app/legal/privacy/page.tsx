export default function PrivacyPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Politique de Confidentialité</h1>

            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                La société ScootParts, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
            </p>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Collecte des données</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Vos données sont collectées par la société ScootParts. Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée).
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Utilisation des données</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vos droits</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                    Conformément à la réglementation applicable en matière de données à caractère personnel, les utilisateurs disposent des droits suivants : le droit d’accès, le droit de rectification, le droit à l’effacement, le droit à la limitation du traitement, le droit de s’opposer au traitement, le droit à la portabilité des données.
                </p>
            </section>
        </div>
    );
}
