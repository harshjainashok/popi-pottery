import Link from "next/link";

export default function OrderConfirmed() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Confirmation Details */}
        <div className="md:col-span-6 lg:col-span-7 order-2 md:order-1 flex flex-col space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">
              Order Confirmed
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-on-surface leading-tight tracking-tight">
              Thank you for supporting handmade craft
            </h2>
            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
              Your piece is being carefully packaged in our studio. We’ll notify you as soon as it begins its journey to your home.
            </p>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-2xl space-y-2 border border-outline-variant/5 shadow-sm">
              <span className="text-[10px] font-label uppercase tracking-[0.05em] text-on-surface-variant font-bold">
                Order Number
              </span>
              <p className="text-xl font-serif text-on-surface font-medium">#PP-82491</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl space-y-2 border border-outline-variant/5 shadow-sm">
              <span className="text-[10px] font-label uppercase tracking-[0.05em] text-on-surface-variant font-bold">
                Delivery Estimate
              </span>
              <p className="text-xl font-serif text-on-surface font-medium">Oct 24 — 28</p>
            </div>
          </div>

          {/* Shipping Summary */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">local_shipping</span>
              <div className="space-y-1">
                <h4 className="font-medium text-on-surface font-semibold">Shipping to</h4>
                <address className="not-italic text-sm text-on-surface-variant leading-relaxed">
                  Julianne Smith<br />
                  742 Artisans Way, Studio 4<br />
                  Copenhagen, 2100<br />
                  Denmark
                </address>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-on-primary rounded-full font-bold transition-all hover:bg-primary-dim active:scale-95 shadow-xl shadow-primary/20 text-sm uppercase tracking-wider"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-4 text-primary font-bold hover:bg-primary/5 rounded-full transition-all text-sm uppercase tracking-wider"
            >
              View Order Receipt
            </Link>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="md:col-span-6 lg:col-span-5 order-1 md:order-2">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-3xl overflow-hidden shadow-lg border border-outline-variant/10">
              <img
                alt="Artisan ceramic piece"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnF_troN3BqBgXN8NzTnw2RhvQjMaEdPa10bDSQpQKXPeVgUj6gFh1wSg2xQxIJrlCMLPzKnluZSX7OmUfst0MXv3Rh6RvnNZeTYjpN9DkbyFOPpPaCq3knNjIpxutjf2cnDFJW5YHQMpaweonjeTSaEgfrl_3usiBe3mP09kke3wXAPzJIAckDPHoGcqkxGqfw1OLHRigdMtDMG5JbGrPh9n3f52GlPKDlYQJERAFLXnITlgPOnfEHZmJSEe15Q-ThbuWUCEITuc0"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

      </div>
      
      {/* Spacer to push floating footer down if needed */}
      <div className="h-16"></div>
    </main>
  );
}
