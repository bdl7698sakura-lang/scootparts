import Link from 'next/link';

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section className="animate-fade-in" style={{
        position: 'relative',
        height: '60vh',
        minHeight: '400px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        marginBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/hero_banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }} />

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))',
          zIndex: 2
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 3, padding: '2rem' }}>
          <h1 style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            background: 'linear-gradient(to right, #fff, #a5a5a5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ScootParts
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            L'expertise de la mobilité électrique à votre service.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              Trottinettes • Pièces Détachées • Accessoires
            </span>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="animate-fade-in delay-100" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Votre Partenaire Mobilité</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
          Chez ScootParts, nous ne vendons pas seulement des produits, nous vendons la liberté de vous déplacer.
          Spécialistes des <strong>trottinettes électriques</strong> et des <strong>pièces de rechange</strong> haute performance,
          nous sélectionnons rigoureusement chaque article pour garantir votre sécurité et votre plaisir de conduite.
        </p>
      </section>

      {/* Products Grid */}
      <h3 className="animate-fade-in delay-200" style={{ fontSize: '2rem', marginBottom: '2rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>
        Nos Catégories
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }} className="animate-fade-in delay-200">
        {[
          { name: 'Chargeurs', image: '/images/category_chargeurs.png', description: 'Chargeurs rapides et adaptateurs pour tous types de batteries' },
          { name: 'Suspensions', image: '/images/category_suspensions.png', description: 'Amortisseurs et ressorts pour un confort optimal' },
          { name: 'Guidons', image: '/images/category_guidons.png', description: 'Guidons ergonomiques et poignées de qualité' },
          { name: 'Pneus', image: '/images/category_pneus.png', description: 'Pneus et chambres à air haute performance' },
          { name: 'Accessoires', image: '/images/category_accessoires.png', description: 'Support téléphone, antivols, rétroviseurs et plus' },
          { name: 'Lumières', image: '/images/category_lumieres.png', description: 'Éclairages LED avant et arrière ultra-puissants' },
        ].map((category) => (
          <Link key={category.name} href={`/category/${category.name.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              // hover styles handled by css class .card:hover usually, ensuring it pops
            }}>
              <div style={{
                height: '220px', // Increased from 140px
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
              }}>
                {(category as any).image ? (
                  <img
                    src={(category as any).image}
                    alt={category.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '1.5rem', // Slightly more breathing room inside
                      transition: 'transform 0.5s ease'
                    }}
                  />
                ) : (
                  (category as any).icon
                )}
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>{category.name}</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>
                  {category.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#3B82F6',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  <span>Découvrir</span>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
