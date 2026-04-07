"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";

export default function Checkout() {
  const [step, setStep] = useState<"shipping" | "payment">("shipping");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
    phone: "",
    saveInfo: true,
    shippingMethod: "standard",
  });

  // Demo order items
  const orderItems = [
    { product: products[1], qty: 1 },
    { product: products[4], qty: 2 },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const shipping = formData.shippingMethod === "express" ? 25 : subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "shipping") {
      setStep("payment");
    } else {
      window.location.href = "/order-confirmed";
    }
  };

  const inputClass =
    "w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-5 py-4 text-[14px] font-sans placeholder:text-outline-variant/50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all shadow-sm";

  return (
    <main className="pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl italic text-on-surface tracking-tight mb-4">
            Checkout
          </h1>
          {/* Progress steps */}
          <div className="flex items-center gap-3 text-[11px] font-sans uppercase tracking-[0.12em]">
            <span className={step === "shipping" ? "text-primary font-bold" : "text-on-surface-variant/40"}>
              1. Shipping
            </span>
            <span className="text-on-surface-variant/20">—</span>
            <span className={step === "payment" ? "text-primary font-bold" : "text-on-surface-variant/40"}>
              2. Payment
            </span>
            <span className="text-on-surface-variant/20">—</span>
            <span className="text-on-surface-variant/40">3. Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === "shipping" && (
                <div className="space-y-8">
                  {/* Contact */}
                  <section>
                    <h2 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-on-surface/60 mb-5">
                      Contact Information
                    </h2>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className={inputClass}
                      required
                    />
                  </section>

                  {/* Shipping Address */}
                  <section>
                    <h2 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-on-surface/60 mb-5">
                      Shipping Address
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          className={inputClass}
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          className={inputClass}
                          required
                        />
                      </div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className={inputClass}
                        required
                      />
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        placeholder="Apartment, suite, etc. (optional)"
                        className={inputClass}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
                          className={inputClass}
                          required
                        />
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="State / Province"
                          className={inputClass}
                          required
                        />
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          placeholder="PIN / ZIP code"
                          className={inputClass}
                          required
                        />
                      </div>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Germany</option>
                        <option>Japan</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className={inputClass}
                        required
                      />
                    </div>
                  </section>

                  {/* Shipping Method */}
                  <section>
                    <h2 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-on-surface/60 mb-5">
                      Shipping Method
                    </h2>
                    <div className="space-y-3">
                      <label
                        className={`flex items-center justify-between p-5 rounded-xl border cursor-pointer transition-all ${
                          formData.shippingMethod === "standard"
                            ? "border-primary/40 bg-primary/5"
                            : "border-outline-variant/20 hover:border-outline-variant/40"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="standard"
                            checked={formData.shippingMethod === "standard"}
                            onChange={handleChange}
                            className="accent-primary"
                          />
                          <div>
                            <p className="font-sans text-[14px] font-medium text-on-surface">
                              Standard Shipping
                            </p>
                            <p className="text-[12px] text-on-surface-variant/50 mt-0.5">
                              5–7 business days
                            </p>
                          </div>
                        </div>
                        <span className="font-sans text-[14px] font-medium text-on-surface">
                          {subtotal > 200 ? "Free" : "$15"}
                        </span>
                      </label>
                      <label
                        className={`flex items-center justify-between p-5 rounded-xl border cursor-pointer transition-all ${
                          formData.shippingMethod === "express"
                            ? "border-primary/40 bg-primary/5"
                            : "border-outline-variant/20 hover:border-outline-variant/40"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="express"
                            checked={formData.shippingMethod === "express"}
                            onChange={handleChange}
                            className="accent-primary"
                          />
                          <div>
                            <p className="font-sans text-[14px] font-medium text-on-surface">
                              Express Shipping
                            </p>
                            <p className="text-[12px] text-on-surface-variant/50 mt-0.5">
                              2–3 business days
                            </p>
                          </div>
                        </div>
                        <span className="font-sans text-[14px] font-medium text-on-surface">
                          $25
                        </span>
                      </label>
                    </div>
                  </section>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-on-surface text-white rounded-full font-sans text-[12px] uppercase tracking-[0.12em] font-semibold hover:bg-primary transition-colors duration-300 shadow-lg cursor-pointer"
                  >
                    Continue to Payment
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              )}

              {step === "payment" && (
                <div className="space-y-8">
                  <section>
                    <h2 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-on-surface/60 mb-5">
                      Payment Details
                    </h2>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Card number"
                        className={inputClass}
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className={inputClass}
                          required
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className={inputClass}
                          required
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Name on card"
                        className={inputClass}
                        required
                      />
                    </div>
                  </section>

                  {/* Shipping summary */}
                  <section className="bg-surface-container rounded-2xl p-6">
                    <h3 className="font-sans text-[10px] uppercase tracking-[0.15em] font-bold text-on-surface-variant/40 mb-3">
                      Shipping to
                    </h3>
                    <p className="text-[14px] text-on-surface">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-[13px] text-on-surface-variant mt-1">
                      {formData.address}
                      {formData.apartment && `, ${formData.apartment}`}
                    </p>
                    <p className="text-[13px] text-on-surface-variant">
                      {formData.city}, {formData.state} {formData.zip}
                    </p>
                    <button
                      type="button"
                      onClick={() => setStep("shipping")}
                      className="text-primary text-[12px] font-sans font-semibold uppercase tracking-[0.1em] mt-3 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </section>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => setStep("shipping")}
                      className="px-8 py-4 border border-outline-variant/20 text-on-surface-variant rounded-full font-sans text-[12px] uppercase tracking-[0.12em] hover:bg-surface-container transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-3 py-4 bg-on-surface text-white rounded-full font-sans text-[12px] uppercase tracking-[0.12em] font-semibold hover:bg-primary transition-colors duration-300 shadow-lg cursor-pointer"
                    >
                      Place Order — ${total}
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface-container rounded-3xl p-8 sticky top-28">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-on-surface/60 mb-6">
                Your Order
              </h3>

              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.product.slug} className="flex gap-4">
                    <div className="w-16 h-16 bg-surface-container-highest rounded-xl overflow-hidden shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-[14px] italic text-on-surface">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-on-surface-variant/50 font-sans">
                        Qty: {item.qty}
                      </p>
                    </div>
                    <span className="font-sans text-[14px] text-on-surface font-medium">
                      ${item.product.price * item.qty}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-outline-variant/15 text-[14px]">
                <div className="flex justify-between text-on-surface-variant font-light">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-light">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>
                <div className="border-t border-outline-variant/15 pt-3 flex justify-between">
                  <span className="font-sans font-semibold text-on-surface">Total</span>
                  <span className="font-serif text-2xl text-on-surface">${total}</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-on-surface-variant/40">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span className="text-[11px] font-sans uppercase tracking-[0.1em]">
                    Secure checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
