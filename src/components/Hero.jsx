import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full blur-3xl bg-[#0F66F6]/30"></div>
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full blur-3xl bg-[#0F66F6]/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#F5F7FB] dark:bg-white/5 border border-[#E6E9EF]/70 dark:border-white/10 mb-4">
            Engineering-led studio
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Build fast. Scale clean. Ship with confidence.
          </h1>
          <p className="mt-5 text-lg text-[#5B6170] dark:text-[#E6E9EF]/80">
            Upmotion Tech designs and builds web and mobile products, integrates Applied AI where it matters, and keeps delivery honest and predictable.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0F66F6] text-white shadow-sm hover:shadow-md transition-all">
              See our work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#E6E9EF] dark:border-white/15 hover:bg-[#F5F7FB] dark:hover:bg-white/5 transition-colors">
              Book a 20-minute call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
