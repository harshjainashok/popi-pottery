import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full mt-0 bg-[#f0ede7] text-on-surface font-sans pb-32 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 lg:px-16 py-20 max-w-[1440px] mx-auto">
          <div className="space-y-5">
            <h4 className="font-serif text-2xl italic text-on-surface">
              Popi.Pottery
            </h4>
            <p className="text-on-surface-variant/60 text-[13px] leading-relaxed max-w-xs">
              Curating the conversation between human hands and ancient earth
              since 2012.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-on-surface-variant/40">
              Discovery
            </span>
            {[
              { label: "Collections", href: "/collections" },
              { label: "Our Process", href: "/process" },
              { label: "Experiences", href: "/experiences" },
              { label: "Journal", href: "/journal" },
            ].map((link) => (
              <Link
                key={link.href}
                className="text-on-surface-variant/70 text-[14px] hover:translate-x-1 transition-all duration-300 ease-out hover:text-primary w-fit"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/40 block mb-3">
              Connect
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/popi.pottery/"
                target="_blank"
                rel="noopener noreferrer"
                className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors text-on-surface-variant/50"
              >
                photo_camera
              </a>
              <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors text-on-surface-variant/50">
                mail
              </span>
            </div>
            <p className="text-[10px] text-on-surface-variant/30 uppercase tracking-[0.2em] pt-6">
              © 2024 Popi.Pottery. Earth &amp; Kiln.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/92 backdrop-blur-xl border-t border-on-surface/5 px-2 pt-3 pb-safe flex justify-around items-center rounded-t-2xl shadow-[0px_-4px_20px_rgba(56,56,49,0.04)] pb-6">
        {[
          { href: "/collections", icon: "grid_view", label: "Shop" },
          { href: "/process", icon: "water", label: "Process" },
          { href: "/cart", icon: "shopping_bag", label: "Cart" },
          { href: "/journal", icon: "menu_book", label: "Journal" },
          { href: "/experiences", icon: "event", label: "Experiences" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 py-1 px-3 font-sans text-[9px] uppercase tracking-[0.08em] transition-all duration-200 active:scale-95 text-on-surface/30 hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
