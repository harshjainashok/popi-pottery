import Link from "next/link";

export default function Process() {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-32">
      {/* Hero Section: The Maker */}
      <section className="mt-12 mb-24 lg:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-1 group">
            <div className="relative aspect-[4/5] lg:aspect-[16/10] bg-surface-container-highest rounded-xl overflow-hidden shadow-md border border-outline-variant/10">
              <img
                alt="Artisan founder working at a traditional pottery wheel"
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2L502hbmPcafdqiZA_kgByNyQTtKsRT3Ge57sl-gJy_zxDxfuWQFCt_Knq9ZYg1qJ3dXlMzOWzt-pftx-gBLt-SwCnDKNe-VebAwgwhL0u3toNSgYDYOvhcYHdM2_dbaVZ7UnQiLQ8D8obbPDKcNsy-1Td8JZyMCIg0mNAwJOGa3oTHmzzkkRG_sEC1t4WDXnzXnawMggQWZbp5jUKu3XS94buKFk5MTOpfTCfR3MgkshR39ppXOcupDLZW3YrJzJn9yF1N9w_8O"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          <div className="lg:col-span-5 order-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.05em] text-primary mb-4 block font-bold">
              The Hands Behind the Wheel
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-light leading-tight mb-8 text-on-surface">
              A dance of <br />
              <span className="italic text-primary">mud & patience.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
              Every piece at popi. begins with a silent conversation between the
              artisan and the earth. We don't rush the clay; we listen to its
              grain and wait for the form to emerge.
            </p>
          </div>
        </div>
      </section>

      {/* Process Bento Grid */}
      <div className="space-y-24">
        {/* Step 1: Earth */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="p-8 lg:p-16 bg-surface-container-low rounded-3xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container rounded-full blur-3xl opacity-30"></div>
            <div className="flex items-center gap-4 mb-12 relative z-10">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center font-serif italic text-xl text-primary bg-surface shadow-sm">
                01
              </div>
              <h2 className="font-serif text-4xl text-on-surface">Earth</h2>
            </div>
            <p className="font-body text-on-surface-variant leading-loose mb-8 relative z-10">
              The journey begins at the source. We source raw, high-fire
              stoneware from local clay deposits. Each variety carries its own
              memory of the landscape—be it the iron-rich red of the valleys or
              the pale, sandy grit of the coast.
            </p>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-surface-container-highest rounded-xl p-4 flex flex-col gap-2 border border-outline-variant/20 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                  Origin
                </span>
                <span className="text-sm font-medium text-on-surface">Riverbed Deposits</span>
              </div>
              <div className="bg-surface-container-highest rounded-xl p-4 flex flex-col gap-2 border border-outline-variant/20 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                  Texture
                </span>
                <span className="text-sm font-medium text-on-surface">Raw & Grit</span>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-[600px] bg-surface-container-highest rounded-3xl overflow-hidden shadow-md">
            <img
              alt="Close up of raw grey clay being wedged"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4xXrq6kSJ5xG2VSdBIhFa4an6qEGFYwQ-CtHX3kOuwdw6Sxnil00fJbHq0LCNUc4RUgn6xk8itRPV9oJv5fGVla11RgWZ0q2j64SF4A4k_-GVi0E9O5oznsQs_Wwrix8maq3u53FWH2FFMxyT6AX7LkSbpFjnnZWwi79LlyjDHUOx9ZV01as-7_Ldzu1owRhWTqeZMrTOIaegy27kE4lREChYk-IzhBUHfvP0foE7ThbLqcoraKhG3aMY1x-WiDpmo262KQNyGG0O"
            />
          </div>
        </section>

        {/* Step 2: Glaze */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="md:col-span-7 h-[300px] md:h-[500px] bg-surface-container-highest rounded-3xl overflow-hidden shadow-md border border-outline-variant/5">
            <img
              alt="Rows of handmade ceramic test tiles"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrw38p0kELlvwS20TX_256Rbka6Z45nbokE21EjCtyerkS5imhuEGMUnIzCnqH8OoYzP-_T9P-K9UR_-n3k6Wb1kv2lGKGK1xFVO5PIcB2Qj806fYi6jZ7QWUyA16Vejix1N-g6DBMIYTh-odw8g0TVoYNle-Q0AqOa0xGW7mFg7y5QrZQQY9mmLMGVRYk6LTxmHnvSsU6ayl8g3HY_mQDc5cxxm-SBQ88BgBd86G0pXNe_UHPCPoJqSGjKXmhclENWYL7RUSUuu2B"
            />
          </div>
          <div className="md:col-span-5 py-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center font-serif italic text-xl text-primary bg-surface shadow-sm">
                02
              </div>
              <h2 className="font-serif text-4xl text-on-surface">Glaze</h2>
            </div>
            <p className="font-body text-on-surface-variant leading-loose">
              Our glazes are mixed in-house using botanical ash and crushed
              minerals. They are designed to pool in the textures of the clay,
              creating variations that make every vessel a unique topography. No
              two pieces ever wear the same coat twice.
            </p>
            <div className="mt-8 space-y-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
              <div className="flex justify-between items-center py-2">
                <span className="font-sans text-sm font-semibold text-on-surface">Signature Finish</span>
                <span className="font-serif italic text-primary">Moonlight Silk</span>
              </div>
              <div className="flex justify-between items-center py-2 border-t border-outline-variant/20 pt-4">
                <span className="font-sans text-sm font-semibold text-on-surface">Texture</span>
                <span className="font-serif italic text-primary">Speckled Matte</span>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Kiln */}
        <section className="relative bg-surface-container-low rounded-[3rem] overflow-hidden py-24 px-8 lg:px-24 border border-outline-variant/10 shadow-sm editorial-shadow">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">waves</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-on-surface tracking-tighter">
                The Kiln
              </h2>
            </div>
            <p className="font-serif italic text-2xl lg:text-3xl text-primary leading-relaxed mb-16 px-4 bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm">
              "The kiln is the final judge. We offer our work to the heat and
              wait for the transformation."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-transform">
                <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-primary">
                  Temperature
                </h4>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                  Fired to 1280°C to ensure vitrification and lifelong durability.
                </p>
              </div>
              <div className="space-y-4 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-transform">
                <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-primary">
                  Atmosphere
                </h4>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                  Reduction firing creates unique carbon-trapped speckles.
                </p>
              </div>
              <div className="space-y-4 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-transform">
                <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-primary">
                  Timing
                </h4>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                  A 48-hour cycle of slow heating and even slower cooling.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/20 rounded-full blur-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[100px] -z-0"></div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="mt-32 text-center pb-20">
        <div className="inline-block p-[1px] bg-gradient-to-tr from-outline-variant/30 to-primary/40 rounded-full mb-8 shadow-sm">
          <div className="bg-surface px-8 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
            Experience the Result
          </div>
        </div>
        <h3 className="font-serif text-4xl mb-12 text-on-surface tracking-tight">
          Explore the latest collection
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/collections" className="bg-primary text-on-primary px-10 py-4.5 rounded-full font-sans font-semibold hover:bg-primary-dim transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 active:scale-95 uppercase tracking-wide text-xs">
            View Gallery
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <Link href="/journal" className="bg-surface-container-high text-on-surface px-10 py-4.5 rounded-full font-sans font-semibold hover:bg-surface-container-highest transition-all shadow-sm active:scale-95 uppercase tracking-wide text-xs flex justify-center items-center">
            Our Philosophy
          </Link>
        </div>
      </section>
    </main>
  );
}
