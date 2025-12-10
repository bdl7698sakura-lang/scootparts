import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

// Simplified interface effectively matching the one in products.ts
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category?: string;
    description?: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden', backgroundColor: 'white' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '1rem',
                        transition: 'transform 0.3s ease'
                    }}
                />
                {/* Quick hover effect could go here */}
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold', lineHeight: '1.3' }}>
                    <Link href={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {product.name}
                    </Link>
                </h3>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                        {product.price.toFixed(2)} €
                    </span>
                    <Link href={`/product/${product.id}`} className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                        Voir
                    </Link>
                </div>
            </div>
        </div>
    );
}
