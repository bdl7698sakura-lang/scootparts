"use client";
import { useCart } from "@/lib/cart";
import { useToast } from "@/components/Toast";

export default function AddToCartButton({ product }: { product: any }) {
    const { addToCart } = useCart();
    const { showToast } = useToast();

    return (
        <button
            onClick={() => {
                addToCart(product);
                showToast(`${product.name} a été ajouté.`);
            }}
            className="btn btn-secondary"
            style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
        >
            Ajouter au panier 🛒
        </button>
    );
}
