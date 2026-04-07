import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ═══ HERO: Full-viewport editorial statement ═══ */}
      <section className="relative h-dvh min-h-[700px] overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover scale-105"
            alt="Close-up of a hand-thrown ceramic vase with a grainy oatmeal glaze"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNLCiaDlkwCnhQOhG_plbxp8uCHp-NTr3WVMovUk_zoQs4t2ebwqWCpoKmnTKouMkbBJkqs0y0pUlueNuIZ4fOAAc3hYI10IBH4fcdNE2xUblyjMZLglRxltJsYxLNeH9t0_NIYY39feWnKuMO9kzJT0xqFH3LHOXU5JyckTO_Gc5BANb02QIv57vo5DNfQ646QkApX05PjHZUA5a5KADWDWEfuOGFVSMCv4bvpbix8x7OLUfWDPQpQHfSh__wMGeJ8JTPDYl5jDbc"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-6 block font-sans font-medium">
              The Autumn Exhibition
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[0.95] mb-10 tracking-tight">
              Earth-born vessels
              <br />
              <span className="italic font-light">for the modern home.</span>
            </h1>
            <Link
              href="/collections"
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              <span className="font-sans text-[12px] uppercase tracking-[0.15em] font-medium">
                Explore Collection
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-8 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ═══ NEW ARRIVALS ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-primary font-sans uppercase tracking-[0.15em] text-[11px] mb-3 block font-semibold">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-on-surface tracking-tight">
              New Arrivals
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm text-[15px] leading-relaxed font-light">
            Freshly fired pieces from our resident potters, featuring
            experimental glazes and organic silhouettes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Card 1 */}
          <Link href="/collections" className="masonry-item block group">
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden aspect-[4/5] mb-5 relative">
              <img
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                alt="Minimalist cream-colored ceramic pitcher"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4k2A5KldPaXcnCJSK7_YcC1XS4OYZO9e1v9YupGbIpxIawFwFPTKjVpjlm-UaRU9iiCMbGLh5rfgWezsTmnViJATBl1TwhsLsnX-r8LhuBtLsWfLeK5B5LT3Tj0Vw4Sx-F20KoAXhN07Qd9GrxSbkjypXWXqpaWDpPyBsBvAGXiwXWkcLwWLJQdxnXqSZsoPoyJZFe-js6gMP78QDLLefmJKE2RL6sEbnmg1P_w88EuKw_ZueUgwuyR8Ykd53_yrbwBHvtGyfjKmt"
              />
              <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-sans font-semibold text-on-surface/80">
                Sold Out
              </div>
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-serif text-xl italic text-on-surface">
                Oatmeal Pitcher
              </h3>
              <span className="text-[14px] font-sans text-primary font-medium">
                $120
              </span>
            </div>
            <p className="text-[11px] text-on-surface-variant/60 mt-1 uppercase tracking-[0.12em] font-sans">
              By Soren K.
            </p>
          </Link>

          {/* Card 2 */}
          <Link href="/collections" className="masonry-item block group">
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden aspect-square mb-5">
              <img
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                alt="Set of three shallow ceramic nesting bowls"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIwhNxeYzS6dZtkYUjWJj3cEfov6gO6SWljIaQMuJ9-t7oBI2n0H22WSUHPehL4TTqasAbQjEjSqWEIAsf89MEmO7Yol43WK9ctwxOK3xnCttlwzB2M__zXSfggrfctMdfvxqNlsDsYlxQQ8Wt8ydUbPtdmVDOt97hcHJ5WGdsWB6MA-wajBLp7l81Ls93ReCKBSCTrP7dqYGO8cgPAv_eZnjk1tOBqD36_CnGMGWrjrLlhACpcJ1h4C0apg5BEfmDbHjaSVsHgkqj"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-serif text-xl italic text-on-surface">
                Nesting Trio
              </h3>
              <span className="text-[14px] font-sans text-primary font-medium">
                $185
              </span>
            </div>
            <p className="text-[11px] text-on-surface-variant/60 mt-1 uppercase tracking-[0.12em] font-sans">
              By Anna Maria
            </p>
          </Link>

          {/* Card 3 */}
          <Link href="/collections" className="masonry-item block group">
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden aspect-[4/5] mb-5">
              <img
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                alt="Tall sculptural vase with a textured stone finish"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAit7sqyb6hgZZZZPWlBaCXids9m6CbiuZCIXIeITzgIVxfPrHqDn5C9z1hnnU29gaaOF-DBJfwBncsD07QK6bELk4vBXrubL0GnYtB11ZdGvaCwaDG9MIQFRqZ16gSIdqcEQY4t-ePCGeyT5yL7L6KG_DclTiu6FG7OBXcc_UjIT5F01ECfDh8uxLvffbfYcgrviMpcNUbsawEoKPHN6Zeaes_VRwkR_5rU2vEZWQl2jc_hpAbzCgOdysI_3fXp0KyInJgXpVguTgy"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-serif text-xl italic text-on-surface">
                Monolith Vase
              </h3>
              <span className="text-[14px] font-sans text-primary font-medium">
                $240
              </span>
            </div>
            <p className="text-[11px] text-on-surface-variant/60 mt-1 uppercase tracking-[0.12em] font-sans">
              By Eriksson Studio
            </p>
          </Link>
        </div>
      </section>

      {/* ═══ ARTISAN STORY: Asymmetric editorial layout ═══ */}
      <section className="relative bg-surface-container py-28 md:py-36 rounded-t-[3rem]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            {/* Image side — offset for asymmetry */}
            <div className="lg:col-span-6 lg:col-start-1 relative">
              <div className="relative">
                <div className="bg-surface-container-lowest p-3 rounded-2xl editorial-shadow">
                  <img
                    className="w-full h-[520px] lg:h-[600px] object-cover rounded-xl"
                    alt="The founder of Popi Pottery working on a wheel"
                    src="/images/founder.jpg"
                  />
                </div>
                {/* Floating quote card — overlapping */}
                <div className="absolute -bottom-8 -right-4 lg:right-[-40px] bg-primary-container p-5 rounded-2xl editorial-shadow w-72 z-20">
                  <p className="text-[13px] italic font-serif text-on-primary-container leading-relaxed">
                    &ldquo;The kiln is where we lose control and let the fire decide
                    the final character of every piece.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary font-sans">
                      PP
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] font-sans font-semibold text-on-primary-container/70">
                      Popi, Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="lg:col-span-5 lg:col-start-8 space-y-8 pt-12 lg:pt-0">
              <span className="text-primary font-sans uppercase tracking-[0.15em] text-[11px] font-bold">
                The Hands Behind the Clay
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.05] tracking-tight text-on-surface">
                Artisans of the
                <br />
                <span className="italic">Earth &amp; Kiln</span>
              </h2>
              <p className="text-on-surface-variant text-[16px] leading-[1.8] font-light max-w-md">
                Founded on the principles of tactile minimalism, Popi Pottery
                collaborates with independent ceramicists to bring sculptural
                intentionality to every table. Each piece tells a story of patience
                and fire.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-surface object-cover grayscale"
                    alt="Artisan portrait"
                    src="/images/founder.jpg"
                  />
                </div>
                <Link
                  href="/process"
                  className="text-primary text-[12px] uppercase tracking-[0.12em] font-sans font-semibold border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
                >
                  Our Founder&apos;s Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DINING SERIES ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 editorial-shadow border border-outline-variant/10">
          <div className="max-w-md">
            <h3 className="text-3xl md:text-4xl font-serif mb-4 italic text-on-surface tracking-tight">
              The Dining Series
            </h3>
            <p className="text-on-surface-variant text-[14px] mb-8 leading-[1.8] font-light">
              Browse our latest collection. Curated sets of dinnerware, coffee
              carafes, and serving platters designed for the intentional table.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Tableware", "Vessels", "Sculpture"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-surface-container-high rounded-full text-[10px] font-sans uppercase tracking-[0.12em] text-on-surface-variant font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-surface-container rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-6 border border-outline-variant/5">
              <img
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                alt="Stack of ceramic dinner plates"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3z-x9wl7AvbtPY-_b7xmxnVLRiqbAUQYghMAWKc4uriZcHVsUxnH1gHfTw4IzfPAuuONRsPxG28pkvuykL2EGk-7g7TL0FRog8gR7rFrGDgi0TiWzBuGP7jB2WZ7knYbpN3Hs1FFjO70j5Knu9sQwn_fMXeA990qYW6F4LZ8UKcjWFGDFFwR4j69TTwAi3A0uor6lDhKYBIlVwbCLinNRFBZwDIHmB-_xUeFa4D1o3G2OiQIjHhjaw_2mmu1fKkfZAMRcUe4zBVER"
              />
            </div>
            <div className="bg-surface-container rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-6 mt-8 border border-outline-variant/5">
              <img
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                alt="Handcrafted ceramic mug"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBeBgz51rwnHv-LC_E2lwvHZzUbEsNaNAxXgyh6Pv46Y9hoMPRCo_FkKeqyMGJRi7oc9esejUm0l6QnSS54_GIGVHEhCgleN8R7fz5A9BXmyuJEsMDFEa8ESwPBhbiSlwzXW5AhfqzgBfOxRk4z6cEZBuL5HXzSkdLhtpjmWthEFi-qcbOM-Lmkr7Gt0PpVvOGhfTVFH0yqjFFDNImmxpSlwBTeM3LF_F8qDHU3xa1vYPI_aY9Yb-HsS31QcdC1wfp7Qsh1he3EaGb"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="py-24 bg-surface-container rounded-t-[3rem]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-serif mb-6 text-on-surface tracking-tight italic">
            Stay in Touch with the Kiln
          </h3>
          <p className="text-on-surface-variant mb-10 text-[14px] leading-relaxed font-light">
            Join our private list to receive early access to new drops and
            invitations to our studio open days.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" suppressHydrationWarning>
            <input
              className="flex-grow bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary text-[14px] placeholder:text-outline-variant outline-none shadow-sm font-sans"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-on-surface text-white px-8 py-4 rounded-full font-sans text-[12px] uppercase tracking-[0.12em] hover:bg-primary transition-colors duration-300 shadow-md font-semibold shrink-0">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
