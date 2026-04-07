export default function JournalPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-32">
      {/* Hero Header */}
      <section className="mb-16 text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-tight text-on-surface">Journal</h2>
        <p className="font-serif italic text-xl md:text-2xl text-primary max-w-2xl mx-auto leading-relaxed opacity-80">
          Notes from the Studio: reflections on the tactile, the intentional, and the slow beauty of clay.
        </p>
      </section>

      {/* Featured Story */}
      <section className="mb-24 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 aspect-[4/5] md:aspect-video overflow-hidden rounded-xl bg-surface-container-highest">
          <img
            alt="Pottery Studio"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJaBup6rFh3smh6BBY_vHJ5ID8Udo1aspB0r0L7ysPuonAK8THmaDTqRk41IOR1ADZwGDQlQUmHp8ICnKfSQX1tred95fHRDXZ-oUG2NIPm4HZria96SM8_bq5UIxQbJ4nbkVKILqS9F0fuXLo_Q2G7lAxc9AvTpMRY6NhvVNPNfh-jaKl0qDVypRjzHu0fLRi8fGRFgMicpePOaUxKWXiy-1fW-akCCpdabQNoF_rLsRSTWs469lQwMLlBsCmtqj1QlSKUd_Uy3mO"
          />
        </div>
        <div className="md:col-span-5 md:pl-12">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Reflections</span>
          <h3 className="font-serif text-4xl mb-6 leading-tight text-on-surface">The Alchemy of Morning Light</h3>
          <p className="font-sans text-on-surface-variant leading-[1.8] mb-8 text-lg font-light">
            There is a specific moment, just as the sun hits the kiln, where the studio feels less like a workspace and more like a sanctuary. Exploring the connection between natural cycles and creative output.
          </p>
          <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-sans text-[12px] uppercase tracking-widest font-semibold hover:bg-secondary-dim transition-colors shadow-lg shadow-secondary/10 w-full md:w-auto">
            Read the Story
          </button>
        </div>
      </section>

      {/* Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Card 1 */}
        <article className="group cursor-pointer">
          <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-surface-container-highest">
            <img
              alt="Studio Textures"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD598KrQpGam8HpRQ7247Mzjr7otlB6bZm7FkhQWTnURb2dECk8mVZZh5iHg8Xi4qoqc0oM7EQ3cbjLwg5TdzF5P5YQh19W6umvX9W-9FPTQyiyjaW2TFvWW_tLXxlo_1T4FsCD7-O9dKc7Vh7eYr2QEwmz8cprkM9goWeI9wDfp4lZMGyw-TcvYxArzhBYCVxMT3J7yumgH7uNHk7F38ofraepdP1p_QhipjAmxKvhQE_5cXsNdyiSGG80ESiZjSBdUNon63D1E6FE"
            />
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary mb-3 block font-semibold">Process</span>
          <h4 className="font-serif text-3xl mb-3 text-on-surface group-hover:text-primary transition-colors tracking-tight">
            Embracing Imperfection: The Kintsugi Mindset
          </h4>
          <p className="font-sans text-on-surface-variant text-[15px] leading-relaxed mb-6 font-light line-clamp-2">
            Finding beauty in the broken and the repaired. How the philosophy of Wabi-sabi guides our studio practices every single day.
          </p>
          <button className="border border-outline-variant/30 text-on-surface px-6 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest font-semibold hover:bg-surface-container transition-all">
            Read Story
          </button>
        </article>

        {/* Card 2 */}
        <article className="group cursor-pointer">
          <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-surface-container-highest">
            <img
              alt="Studio Interior"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9SIUjCm_FX871LllNuyCUbnf5lFcTXoFrlsrvIyRUYdyBkeU2_jcKuiv1fTfYhy32msbNpmXZ9oPCZzj2yXxszOx9oIwjBpgn9SkpFGQzGwiiopya02PyYTVnmApStDmTJ09Yhdra9E2coG0LNp9c1TXi7JoTpsZv0WSfr-dYrSv4uzDEF0FsuOI3AXS1IFqTvlehK7jwr3TIPJ4eZ3nbr3yZAH3eOov3BOeFd2bPgIFgXhe47UQZV4N4t_UNmTarrUwC-Blb1kji"
            />
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary mb-3 block font-semibold">Space</span>
          <h4 className="font-serif text-3xl mb-3 text-on-surface group-hover:text-primary transition-colors tracking-tight">
            Sanctuary: Designing for Focus
          </h4>
          <p className="font-sans text-on-surface-variant text-[15px] leading-relaxed mb-6 font-light line-clamp-2">
            A tour of our newly organized studio space and the ritual of clearing the workbench before a long afternoon of throwing.
          </p>
          <button className="border border-outline-variant/30 text-on-surface px-6 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest font-semibold hover:bg-surface-container transition-all">
            Read Story
          </button>
        </article>

        {/* Card 3 */}
        <article className="group cursor-pointer">
          <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-surface-container-highest">
            <img
              alt="Finished Pieces"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1KMzNUYfekqny_aKuHLq9k2wbj3r8GBR_Qb8evmteP9K9dAO1Pnd1a_nnukqq0fAhRC_37zx9X2GVSfLTAoIkWY2OEKMaV--FjxbHepmqjQ8M6OD-khUixCFdL4-SaSHhGg-KGYE6ZX2_6MjCVZrEyTIVekWV65gRVNacoMtg61eOb5z9I3dVY752zEdMbVT6lp1jOPZNZXeIIawkluFJu91k5avhMg_bQPwXFnNvG6q5A-VN1oQ3ZxQHSZjqDTA_tUaxut3h8drV"
            />
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary mb-3 block font-semibold">Journal</span>
          <h4 className="font-serif text-3xl mb-3 text-on-surface group-hover:text-primary transition-colors tracking-tight">
            The Slow Coffee Ritual
          </h4>
          <p className="font-sans text-on-surface-variant text-[15px] leading-relaxed mb-6 font-light line-clamp-2">
            How the vessel we hold changes our relationship with the morning. Exploring the ergonomics of the perfect mug.
          </p>
          <button className="border border-outline-variant/30 text-on-surface px-6 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest font-semibold hover:bg-surface-container transition-all">
            Read Story
          </button>
        </article>
      </div>

      {/* Featured Wide Story */}
      <article className="group cursor-pointer mt-20 md:mt-32">
        <div className="aspect-[16/9] lg:aspect-[2.35/1] mb-10 overflow-hidden rounded-[2rem] bg-surface-container-highest relative">
          <img
            alt="Glaze Textures"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVEqP8Qv6Q4W52UWJThevGEmJd6Pu-uvJKfuU4rcFz_NLC8xgrw8Py_Oi2ot5oaYhxFQbk18jAhlM9_jdmiQ4lFgeAUcboHH4T1iIEfxX6gbNJsCl-wyYiv-2hTV2xYOhOTl8VMP5qukLtu89FoJ3VAyjEejBvG5tqGACCjbkfre69mrgP7AHbk6o19_2q0IsW45zIc0HECQD-vqROt2rnHyU_DSQGy5l6mZpFtjFxPwIIMzIwanI4V75eCmuJRkgrMzWBcAYl9m_o"
          />
        </div>
        <div className="max-w-3xl">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block font-semibold">Artisan Stories</span>
          <h4 className="font-serif text-4xl mb-4 text-on-surface group-hover:text-primary transition-colors tracking-tight">
            Finding Color in the Wild
          </h4>
          <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-8 font-light">
            A photo essay on foraging for local minerals and clays to create one-of-a-kind glazes that speak to the landscape of the Northern Coast.
          </p>
          <button className="bg-on-surface text-white px-8 py-4 rounded-full font-sans text-[12px] uppercase tracking-widest font-semibold hover:bg-primary transition-all shadow-md">
            View Photo Essay
          </button>
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="mt-24 md:mt-40 p-8 md:p-24 bg-surface-container rounded-[2.5rem] text-center border border-outline-variant/10">
        <h3 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] mb-6 text-on-surface tracking-tight leading-none italic">
          Stay in the Studio Loop
        </h3>
        <p className="font-sans text-on-surface-variant max-w-xl mx-auto mb-12 text-[15px] font-light leading-relaxed">
          Receive monthly studio updates, early access to new collections, and stories from the tactile gallery.
        </p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary text-[14px] text-on-surface placeholder-on-surface-variant/50 outline-none shadow-sm"
            placeholder="Your email address"
            type="email"
          />
          <button className="w-full bg-on-surface text-white px-8 py-4 rounded-full font-sans text-[12px] uppercase tracking-widest font-semibold hover:bg-primary transition-all shadow-md">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
