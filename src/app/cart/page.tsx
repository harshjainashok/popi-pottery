"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";

// Static cart items for demo
const initialCart = [
  { product: products[1], qty: 1 }, // Nesting Trio
  { product: products[4], qty: 2 }, // Ceremonial Cup
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQty = (index: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, qty: Math.max(0, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <main className="pt-28 pb-32 min-h-dvh flex items-center justify-center">
        <div className="text-center px-6">
          <span className="material-symbols-outlined text-[64px] text-on-surface-variant/20 mb-6 block">
            shopping_bag
          </span>
          <h1 className="font-serif text-3xl italic text-on-surface mb-4">
            Your bag is empty
          </h1>
          <p className="text-on-surface-variant text-[14px] mb-10 font-light">
            Explore our collection and find your next piece.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-on-surface text-white px-8 py-4 rounded-full font-sans text-[12px] uppercase tracking-[0.12em] font-semibold hover:bg-primary transition-colors"
          >
            Browse Collection
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="font-serif text-4xl md:text-5xl italic text-on-surface tracking-tight mb-4">
          Your Bag
        </h1>
        <p className="text-on-surface-variant text-[14px] mb-12 font-light">
          {cartItems.length} {cartItems.length === 1 ? "piece" : "pieces"} selected
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-0">
            {cartItems.map((item, index) => (
              <div
                key={item.product.slug}
                className="flex gap-6 py-8 border-b border-outline-variant/15"
              >
                <Link
                  href={`/products/${item.product.slug}`}
                  className="shrink-0"
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 bg-surface-container-highest rounded-2xl overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <Link href={`/products/${item.product.slug}`}>
                      <h3 className="font-serif text-xl italic text-on-surface hover:text-primary transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-[11px] font-sans text-on-surface-variant/50 uppercase tracking-[0.12em] mt-1">
                      By {item.product.artist}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-outline-variant/20 rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQty(index, -1)}
                        className="px-3 py-2 text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">remove</span>
                      </button>
                      <span className="px-4 py-2 font-sans text-[13px] font-medium text-on-surface">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(index, 1)}
                        className="px-3 py-2 text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-serif text-lg text-on-surface">
                        ${item.product.price * item.qty}
                      </span>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-on-surface-variant/30 hover:text-error transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface-container rounded-3xl p-8 sticky top-28">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-on-surface/60 mb-8">
                Order Summary
              </h3>

              <div className="space-y-4 text-[14px]">
                <div className="flex justify-between text-on-surface-variant font-light">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-light">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-[11px] text-primary/70 font-sans">
                    Free shipping on orders over $200
                  </p>
                )}
                <div className="border-t border-outline-variant/15 pt-4 flex justify-between">
                  <span className="font-sans font-semibold text-on-surface">Total</span>
                  <span className="font-serif text-2xl text-on-surface">${total}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-3 mt-8 py-4 bg-on-surface text-white rounded-full font-sans text-[12px] uppercase tracking-[0.12em] font-semibold hover:bg-primary transition-colors duration-300 shadow-lg"
              >
                Proceed to Checkout
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>

              <Link
                href="/collections"
                className="block w-full text-center mt-4 py-3 text-on-surface-variant text-[12px] font-sans uppercase tracking-[0.1em] hover:text-primary transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
