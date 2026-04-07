import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24">
      {/* Hero Section: Editorial Exhibition Style */}
      <section className="flex flex-col md:flex-row gap-12 items-end mb-32">
        <div className="md:w-1/2">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-6 block font-semibold">
            The Hands-on Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-[1.1] mb-8 font-light">
            Crafting <span className="italic">Tactile</span> Memories.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-md leading-relaxed font-light">
            Join us in our sun-drenched studio for intimate sessions where the clay dictates the rhythm. From introductory slab-building to intensive wheel mastery.
          </p>
        </div>
        <div className="md:w-1/2 aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden shadow-sm relative group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            alt="Sunlit pottery studio with wooden tables"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2JS1GxSUeWJ7YAhDNh8TB1bONaNIw4NZDN5xAQ9gEAlN5DNmEbciUWEdPRgJds3RHTFdtFUh-bZ5BQcyVL7d9Zx2jjZ_sxFhInujZEMAbub5spX_29Ru3u60KaNrviCwin2__jTEaG_tCDb8wDed-SZwIdAEDpmE8bC61rj4pfIcov8TEv2HDtZY_EcY4hpWFH0g3lSs_XsHUyPU5Yg2Edn804cY3Fyq_MdWuTqgBEjI6TQbG5t0JtacWXSlrQMkp4yT7Tw9vSojE"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
        </div>
      </section>

      {/* Asymmetric Grid: Class Offerings */}
      <section className="mb-32">
        <div className="flex justify-between items-baseline mb-16 border-b border-outline-variant/10 pb-6">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Upcoming Experiences</h2>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-sans text-[10px] uppercase tracking-widest font-bold">
              Available Now
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Card: The Wheel Throwing Intensive */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-sm border border-outline-variant/20 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 h-full min-h-[300px] bg-surface-container-highest rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Artisan hands shaping a tall stoneware vase"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdqBqTdUoAoT1_3ZAclpDOaiy8ArVlprGIjHJyovd1mXqHMQ9Q2DbA1XNlE9-wwRHmC46P2_XYnx_MEOYpd-h7X-B3CIVYYSgwcpgDg5cIGeq5ee9Im5OmYl8GU5BkVi22ueLCucTmm6vZUQShJ9ikfIGdaAzgU4OiuigpA-qVSO7rOHIn78zNAts8wKq3dtFwI1ylEU9sxhKIjN-NMJ8-dgZvOuFbIIOIPorOR0JFeLajG4HfNrWtRdpxUfxFNykDAPKU4mVan0pB"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-sm text-primary">event</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-primary">Level: Intermediate</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 tracking-tight">The Wheel Throwing Intensive</h3>
                <p className="text-on-surface-variant font-light mb-6 leading-relaxed">
                  A 4-week deep dive into centering, pulling, and trimming. Limited to 4 participants for maximum attention.
                </p>
              </div>
              <div>
                <div className="text-2xl font-serif mb-6">$340 <span className="text-sm font-sans text-on-surface-variant">/ Full Course</span></div>
                <button className="w-full py-4 bg-primary text-on-primary rounded-full font-sans text-[12px] uppercase tracking-widest font-semibold hover:bg-primary-dim transition-all active:scale-95 shadow-md">
                  Reserve Your Spot
                </button>
              </div>
            </div>
          </div>

          {/* Small Card: Slab-building for Beginners */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-outline-variant/20 flex flex-col">
            <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover"
                alt="Slab-building"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAufLbqD1x-BB5w_I2_ZN1grWPjRAV0z3e2ckmEL02CQWWMo5__ajs-r-M_QqUoMIsWqi_kRo953eid1A02KfO5l_XUOQ8MGqmr39Ixkb_8lz1h-PW2M4_yTxCLLFkdzpUVwriovqGCK8U61X6_SKs-15AXE_ng1tg2vcVY_75CyfZvC9DfaH-8BIh7_H7cTxrRf4ahp64UvkvwFc5DBHHpOxZqRVVPMO3vcsJJ0W-wbgkh-PLTg8n4tIiop2gunP5em1KnEf04P90D"
              />
            </div>
            <h3 className="text-2xl font-serif mb-2 tracking-tight">Slab-building</h3>
            <p className="text-sm text-on-surface-variant font-light mb-8 flex-grow">
              Learn the foundations of hand-building. Create a set of organic breakfast bowls in a single afternoon.
            </p>
            <div className="flex justify-between items-center mt-auto">
              <div className="font-serif text-lg">$85</div>
              <button className="bg-primary/10 px-4 py-2 rounded-full text-primary font-sans text-[10px] uppercase tracking-[0.1em] font-semibold hover:bg-primary/20 transition-all">Book Now</button>
            </div>
          </div>

          {/* Small Card: Studio Visit & Tea */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-outline-variant/20 flex flex-col">
            <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover"
                alt="Matcha tea cups"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBodaDB-wgyelMqJr9YhrXiwNXNcICyalwwtH7CeQI5DrQSnrtnAoICS1fbAHc6f4AsOT2MgFIHESvQa4gOSMwNEhmLkrLcyMIdbfX_6Y0n3uLcpPVxinGuFBVYO9QFHbtU4UlV9jrtoEfnCZqxnYov1SwRWx1cOcAqzJ_OLCvD8bNZEySKgUi_sKdkq3po13tVh3gMW2VDfrbcpnrJL6WD3Sp0e6IESDEu4ndkCDXKCcPS5A4qajGg4yYnRN2clJT7G-d8m9o4Qeil"
              />
            </div>
            <h3 className="text-2xl font-serif mb-2 tracking-tight">Studio & Tea</h3>
            <p className="text-sm text-on-surface-variant font-light mb-8 flex-grow">
              A quiet hour to explore the gallery, watch the kilns in action, and share a bowl of seasonal tea.
            </p>
            <div className="flex justify-between items-center mt-auto">
              <div className="font-serif text-lg">Free</div>
              <button className="bg-primary/10 px-4 py-2 rounded-full text-primary font-sans text-[10px] uppercase tracking-[0.1em] font-semibold hover:bg-primary/20 transition-all">Schedule</button>
            </div>
          </div>

          {/* Large Card: Glazing Masterclass */}
          <div className="md:col-span-8 bg-surface-container-low rounded-2xl p-8 md:p-12 shadow-sm border border-outline-variant/20 flex flex-col md:flex-row-reverse gap-8">
            <div className="md:w-1/2 h-full min-h-[300px] bg-surface-container-highest rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Close up of brushes dripping with thick glazes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfz5EVByv0bEJLTYejsXixYvlNLPuG7w2wFOSxcadjyyzaFHXZzlZGwwu9NAq_0Yx4yuri-q13-6COiPksAf3EOUrlUopXvvpOsJVqNbgsrvkEZby4kfRRauiqZUJ0ouZxkNW53dtGzH8qnKpJiiZsBzlJfIAmXnb4GIbqo0LY1u_hsuCu4s2QNSgW1SkLx1jzdwubbqWz9Pk3bH1dcCUdf5KgKPM_SCjFCST5u5VWwWbJq9EnPBDsssRhxi6aFJGKZxu_s-0wlc3_"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-sm text-secondary">palette</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-secondary">Experimental Workshop</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 tracking-tight">The Glazing Masterclass</h3>
                <p className="text-on-surface-variant font-light mb-6 leading-relaxed">
                  Explore our proprietary mineral glazes. Learn dipping, pouring, and spraying techniques to create unique finishes.
                </p>
              </div>
              <div>
                <div className="text-2xl font-serif mb-6">$120 <span className="text-sm font-sans text-on-surface-variant">/ Session</span></div>
                <button className="w-full py-4 bg-on-surface text-white rounded-full font-sans text-[12px] uppercase tracking-widest font-semibold hover:bg-primary transition-all shadow-md">
                  Request Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Component: Custom Tonal Layering */}
      <section className="mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">Studio Availability</h2>
            <p className="text-on-surface-variant font-sans font-light">Select a date to view available time slots for private sessions.</p>
          </div>
          <div className="bg-surface-container-highest/30 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.03)] border border-outline-variant/10">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Simple Calendar View */}
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-serif text-xl italic text-on-surface">October 2024</h4>
                  <div className="flex gap-4">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-4 text-center">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <div key={d} className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{d}</div>
                  ))}
                  <div className="py-3 text-on-surface/20">28</div>
                  <div className="py-3 text-on-surface/20">29</div>
                  <div className="py-3 text-on-surface/20">30</div>
                  <div className="py-3">1</div>
                  <div className="py-3 bg-primary text-on-primary rounded-xl font-bold cursor-pointer shadow-sm">2</div>
                  <div className="py-3">3</div>
                  <div className="py-3">4</div>
                  <div className="py-3">5</div>
                  <div className="py-3">6</div>
                  <div className="py-3 bg-primary/10 rounded-xl font-medium cursor-pointer hover:bg-primary/20 transition-colors">7</div>
                  <div className="py-3">8</div>
                  <div className="py-3">9</div>
                  <div className="py-3">10</div>
                  <div className="py-3">11</div>
                  <div className="py-3 bg-primary/10 rounded-xl font-medium cursor-pointer hover:bg-primary/20 transition-colors">12</div>
                  <div className="py-3">13</div>
                  <div className="py-3">14</div>
                  <div className="py-3">15</div>
                  <div className="py-3">16</div>
                  <div className="py-3">17</div>
                  <div className="py-3">18</div>
                </div>
              </div>

              {/* Details Panel */}
              <div className="md:w-64 flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant/20 pt-8 md:pt-0 md:pl-12">
                <div className="mb-6">
                  <span className="font-sans font-semibold text-[10px] text-primary block mb-1 uppercase tracking-widest">Selected Date</span>
                  <div className="text-xl font-serif">Oct 02, 2024</div>
                </div>
                <div className="space-y-4">
                  <button className="w-full p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 text-sm flex justify-between items-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group">
                    <span className="font-medium font-sans">10:00 AM</span>
                    <span className="text-[10px] font-sans font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">Available</span>
                  </button>
                  <button className="w-full p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 text-sm flex justify-between items-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group">
                    <span className="font-medium font-sans">02:30 PM</span>
                    <span className="text-[10px] font-sans font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">Available</span>
                  </button>
                  <div className="p-4 opacity-40 bg-surface-container rounded-xl text-sm flex justify-between items-center cursor-not-allowed border border-outline-variant/10">
                    <span className="font-medium font-sans">05:00 PM</span>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">Booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership/Process Block */}
      <section className="bg-surface-container py-24 rounded-[3rem] overflow-hidden relative border border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-serif mb-8 tracking-tight">The Artist in Residence</h2>
          <p className="text-on-surface-variant font-light leading-relaxed mb-12 text-lg">
            For those who seek a consistent practice, we offer monthly studio access. Members receive their own shelf, access to communal glazes, and firing credits.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-on-surface text-surface rounded-full font-sans text-[12px] font-semibold uppercase tracking-widest hover:bg-on-surface-variant transition-all shadow-lg">
                Apply for Membership
            </button>
            <button className="px-8 py-4 bg-transparent border border-outline-variant/30 text-on-surface rounded-full font-sans text-[12px] font-semibold uppercase tracking-widest hover:border-primary transition-all">
                Download Prospectus
            </button>
          </div>
        </div>
        
        {/* Decorative "Void" Elements */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-container rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary-container rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      </section>
    </main>
  );
}
