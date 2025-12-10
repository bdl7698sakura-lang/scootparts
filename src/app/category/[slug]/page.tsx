import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    // Next.js 15: params is a Promise
    const { slug } = await params;

    // Decode the slug to match category names (e.g., "pièces détachées" -> "pieces detachees" logical mapping or just direct match)
    // For simplicity, we will assume slug matches category property for now, but case insensitive.
    // The homepage currently uses "Chargeurs", "Suspensions" etc. 
    // In products.ts I used exact lowercase "chargeurs", "accessoires".

    const categorySlug = slug.toLowerCase();

    const categoryProducts = products.filter(p =>
        p.category?.toLowerCase() === categorySlug ||
        // Fallback: if category is not set on some mock items, exclude them or include them in a "miscellaneous" if needed.
        // Ideally everything has a category.
        false
    );

    // Capitalize for display title
    const categoryTitle = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>← Retour à l'accueil</Link>
                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', background: 'linear-gradient(to right, #fff, #a5a5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {categoryTitle}
                </h1>
            </div>

            {categoryProducts.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {categoryProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Aucun produit trouvé dans cette catégorie pour le moment.</p>
                    <Link href="/" className="btn btn-primary">Retour aux catégories</Link>
                </div>
            )}
        </div>
    );
}
