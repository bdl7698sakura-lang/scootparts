"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
};

type CartContextType = {
    items: CartItem[];
    addToCart: (product: any) => void;
    removeFromCart: (id: number) => void;
    total: number;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('cart');
        if (saved) {
            setItems(JSON.parse(saved));
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (product: any) => {
        setItems(current => {
            const existing = current.find(item => item.id === product.id);
            if (existing) {
                return current.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...current, { id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image }];
        });
        setIsCartOpen(true); // Auto-open cart when adding item
    };

    const removeFromCart = (id: number) => {
        setItems(current => current.filter(item => item.id !== id));
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, total, isCartOpen, openCart, closeCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
