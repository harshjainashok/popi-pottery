"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { useState } from "react";

const tabs = ["Description", "Specifications", "Shipping"];

export default function ProductPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("Description");
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-dvh flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-light mb-4">Piece Not Found</h1>
          <p className="text-on-surface-variant mb-8 text-sm">This vessel may have already found its home.</p>
          <Link href="/collections" className="py-4 px-8 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-medium tracking-wide shadow-lg text-sm">
            Browse Collection
          </Link>
        </div>
      </div>
    );
  }

  // Generate gallery images (use main image + variations)
  const galleryImages = [product.image, product.image, product.image, product.image];

  // Related products
  const related = products.filter(p => p.slug !== product.slug).slice(0, 4);

  return (
    <main className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left Column: Gallery */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-highest">
            <img
              className="w-full h-full object-cover"
              alt={product.name}
              src={galleryImages[selectedImage]}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`aspect-square rounded-xl overflow-hidden bg-surface-container-highest cursor-pointer transition-opacity ${
                  selectedImage === i
                    ? "border-2 border-primary opacity-100"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img className="w-full h-full object-cover" alt={`${product.name} view ${i + 1}`} src={img} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="md:col-span-5 flex flex-col pt-0 md:pt-4">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant">
              Collections / {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-on-background leading-tight">
              {product.name}
            </h1>
            <div className="flex justify-between items-baseline mt-4">
              <p className="font-serif italic text-2xl text-secondary">Artist: {product.artist}</p>
              <p className="text-3xl font-light">${product.price}</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {product.status === "low-stock" && (
                <>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-sm font-medium text-primary">Limited Edition</span>
                </>
              )}
              {product.status === "sold-out" && (
                <>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="text-sm font-medium text-outline-variant">Sold Out</span>
                </>
              )}
              {product.status === "available" && (
                <>
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                  <span className="text-sm font-medium text-green-700">In Stock</span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-12">
            {/* Actions */}
            <div className="flex flex-col gap-4">
              {/* Quantity */}
              {product.status !== "sold-out" && (
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant font-sans">Qty</span>
                  <div className="flex items-center border border-outline-variant/20 rounded-full overflow-hidden">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">remove</span>
                    </button>
                    <span className="px-5 py-3 font-sans text-sm font-medium text-on-surface min-w-[2.5rem] text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">add</span>
                    </button>
                  </div>
                </div>
              )}

              {product.status !== "sold-out" ? (
                <Link
                  href="/cart"
                  className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-medium tracking-wide shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Add to Bag</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full py-5 rounded-full bg-surface-container-high text-on-surface-variant/50 font-medium tracking-wide cursor-not-allowed text-sm"
                >
                  Sold Out — Notify Me
                </button>
              )}
              <button className="w-full py-5 rounded-full bg-surface-container-high text-on-surface font-medium border border-outline-variant/15 hover:bg-surface-container-highest transition-colors text-sm">
                Wishlist
              </button>
            </div>

            {/* Artisan Story */}
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-highest ring-4 ring-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Portrait of Popi, Founder"
                    src="/images/founder.jpg"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-none">Artisan&apos;s Story</h3>
                  <p className="text-sm text-on-surface-variant">Popi, Founder</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant italic">
                &ldquo;This piece was born from the raw cliffs of Bornholm. I wanted to capture the silence of the earth before it is spoken for—unrefined, yet intentional.&rdquo;
              </p>
            </div>

            {/* Tabs */}
            <div className="w-full">
              <div className="flex border-b border-outline-variant/20 gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-medium tracking-wide cursor-pointer transition-colors ${
                      activeTab === tab
                        ? "text-on-surface border-b-2 border-primary"
                        : "text-on-surface-variant/60 hover:text-on-surface"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="py-8 space-y-4">
                {activeTab === "Description" && (
                  <>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {product.description}
                    </p>
                    <ul className="space-y-2 text-sm text-on-surface-variant">
                      {product.details.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-xs">auto_awesome</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {activeTab === "Specifications" && (
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between py-3 border-b border-outline-variant/10">
                      <span className="text-on-surface-variant">Dimensions</span>
                      <span className="text-on-surface font-medium">{product.dimensions}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-outline-variant/10">
                      <span className="text-on-surface-variant">Material</span>
                      <span className="text-on-surface font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-outline-variant/10">
                      <span className="text-on-surface-variant">Category</span>
                      <span className="text-on-surface font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-on-surface-variant">Artist</span>
                      <span className="text-on-surface font-medium">{product.artist}</span>
                    </div>
                  </div>
                )}
                {activeTab === "Shipping" && (
                  <div className="space-y-3 text-sm text-on-surface-variant">
                    <p>Standard shipping: 5–7 business days ($15, free over $200)</p>
                    <p>Express shipping: 2–3 business days ($25)</p>
                    <p className="pt-2">Each piece is individually wrapped in recycled tissue paper and shipped in a custom-fitted box with foam inserts to ensure safe arrival.</p>
                    <p>Returns accepted within 14 days of delivery in original condition.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pairs Well With */}
      <section className="mt-24 md:mt-32 mb-16 md:mb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant">The Collection</span>
            <h2 className="text-3xl md:text-4xl font-light mt-2 tracking-tight">Pairs Well With</h2>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-12 custom-scroll snap-x">
          {related.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="min-w-[280px] md:min-w-[320px] snap-start group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-highest mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={p.name}
                  src={p.image}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-serif text-xl">{p.name}</h4>
                  <p className="text-sm text-on-surface-variant mt-1">{p.category}</p>
                </div>
                <span className="text-lg font-light">${p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
