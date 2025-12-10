import { products } from '@/lib/products';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import ImageGallery from '@/components/ImageGallery';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1>Produit introuvable</h1>
                <Link href="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Retour à la boutique
                </Link>
            </div>
        );
    }

    // Use images array if available, otherwise fallback to single image
    const productImages = (product as any).images || [product.image];

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <Link href="/" style={{ color: 'var(--text-muted)', marginBottom: '2rem', display: 'inline-block' }}>
                ← Back to Store
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '1rem' }}>
                {/* Image Gallery Section */}
                <ImageGallery images={productImages} productName={product.name} />

                {/* Details Section */}
                <div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.name}</h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '2rem' }}>
                        {product.price}€
                    </p>

                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8', color: '#d4d4d8' }}>
                        {product.description}
                    </p>

                    <AddToCartButton product={product} />

                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '1.5rem' }}>🚚</div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Livraison</h4>
                                <p style={{ fontSize: '0.8rem', margin: 0 }}>7 à 10 jours</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '1.5rem' }}>🔒</div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Paiement Sécurisé</h4>
                                <p style={{ fontSize: '0.8rem', margin: 0 }}>Protection SSL 256-bit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
