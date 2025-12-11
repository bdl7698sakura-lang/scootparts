"use client";

import { CartProvider } from "@/lib/cart";
import { ToastProvider } from "@/components/Toast";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ToastProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ToastProvider>
    );
}
