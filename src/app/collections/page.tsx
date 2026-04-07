"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { useState } from "react";

const categories = ["All", "Vessels", "Tableware", "Sculpture"];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-28 pb-32 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
      {/* Header */}
      <section className="mb-16">
        <div className="max-w-2xl">
          <span className="text-primary font-sans uppercase tracking-[0.15em] text-[11px] mb-3 block font-semibold">
            The Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-serif italic text-on-surface tracking-tight mb-6">
            Vessels &amp; Objects
          </h1>
          <p className="text-on-surface-variant text-[15px] leading-relaxed font-light max-w-lg">
            Each piece is born from the dialogue between the potter&apos;s hands and the
            unpredictable nature of fire. Browse our curated selection of
            handcrafted ceramics.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-sans text-[11px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-on-surface text-white shadow-lg"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group block"
          >
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden aspect-[4/5] mb-5 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {product.status === "sold-out" && (
                <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-sans font-semibold text-on-surface/80">
                  Sold Out
                </div>
              )}
              {product.status === "low-stock" && (
                <div className="absolute top-4 right-4 bg-error/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-sans font-semibold text-error">
                  Low Stock
                </div>
              )}
              {/* Quick view overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-on-surface px-6 py-3 rounded-full font-sans text-[11px] uppercase tracking-[0.12em] font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  View Details
                </span>
              </div>
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-serif text-xl italic text-on-surface">
                {product.name}
              </h3>
              <span className="text-[14px] font-sans text-primary font-medium">
                ${product.price}
              </span>
            </div>
            <p className="text-[11px] text-on-surface-variant/60 mt-1 uppercase tracking-[0.12em] font-sans">
              By {product.artist}
            </p>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <div className="bg-surface-container rounded-[2rem] py-16 px-8">
          <h3 className="font-serif text-2xl italic text-on-surface mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="text-on-surface-variant text-[14px] mb-8 font-light">
            We accept custom commissions for bespoke ceramic pieces.
          </p>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 bg-on-surface text-white px-8 py-4 rounded-full font-sans text-[12px] uppercase tracking-[0.12em] font-semibold hover:bg-primary transition-colors"
          >
            Explore Experiences
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
