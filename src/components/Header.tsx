"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/process", label: "Process" },
  { href: "/experiences", label: "Experiences" },
  { href: "/journal", label: "Journal" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-stone-50/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(56,56,49,0.05)]"
            : "bg-stone-50/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(56,56,49,0.05)]"
        }`}
      >
        <nav className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-full">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-light tracking-tighter text-stone-900">
            popi. pottery
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 font-serif text-lg tracking-tight">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  i === 0
                    ? "text-stone-900 border-b border-stone-400 pb-1"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Search + Icons */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full border border-outline-variant/15">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-32 placeholder:text-on-surface-variant/60 outline-none font-sans"
                placeholder="Search gallery..."
                type="text"
              />
            </div>
            <div className="flex gap-4">
              <Link href="/cart" className="hover:opacity-70 transition-opacity duration-300 relative">
                <span className="material-symbols-outlined text-stone-800">shopping_bag</span>
                <span className="absolute -top-1 -right-1.5 bg-primary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-sans">
                  2
                </span>
              </Link>
              {/* Mobile hamburger */}
              <button
                className="md:hidden hover:opacity-70 transition-opacity cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-stone-800">
                  {isMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface transition-all duration-500 md:hidden flex flex-col ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-24 flex-1 flex flex-col justify-center px-10">
          <nav className="flex flex-col gap-2">
            {[{ href: "/", label: "Home" }, ...navLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group py-4 border-b border-outline-variant/15 flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-serif text-3xl font-light text-stone-900 group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <span className="material-symbols-outlined text-stone-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="px-10 pb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-sans">
            Curated stoneware for the intentional home
          </p>
        </div>
      </div>
    </>
  );
}
