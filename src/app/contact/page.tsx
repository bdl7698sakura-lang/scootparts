export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Contactez-nous</h1>

            <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Formulaire de contact</h2>
                    <form style={{ display: 'grid', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Nom</label>
                            <input type="text" className="input" placeholder="Votre nom" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                            <input type="email" className="input" placeholder="votre@email.com" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                            <textarea className="input" rows={5} placeholder="Comment pouvons-nous vous aider ?" style={{ resize: 'vertical' }}></textarea>
                        </div>
                        <button type="button" className="btn btn-primary">Envoyer le message</button>
                    </form>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Autres moyens de contact</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        <strong>Email :</strong> contact@scootparts.com
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        <strong>Téléphone :</strong> 01 23 45 67 89 (Du Lundi au Vendredi, 9h-18h)
                    </p>
                    <p style={{ color: 'var(--text-muted)' }}>
                        <strong>Adresse :</strong> 123 Avenue de la Mobilité, 75000 Paris
                    </p>
                </div>
            </div>
        </div>
    );
}
