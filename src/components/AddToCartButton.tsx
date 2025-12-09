"use client";
import { useCart } from "@/lib/cart";

export default function AddToCartButton({ product }: { product: any }) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => {
                addToCart(product);
                alert("Ajouté au panier !");
            }}
            className="btn btn-primary"
            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
        >
            Ajouter au panier
        </button>
    );
}
