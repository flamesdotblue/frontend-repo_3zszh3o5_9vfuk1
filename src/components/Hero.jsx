import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 1, 0.21, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl bg-[#0F66F6]/40"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full blur-3xl bg-[#0F66F6]/30"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#0F66F6]/10 blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-24 pb-16 md:pb-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#E6E9EF]/70 dark:border-white/10 bg-[#F5F7FB] dark:bg-white/5 px-2 py-1 text-xs font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-[#0F66F6]" />
            Engineering-led studio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Build fast. Scale clean. Ship with confidence.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-lg text-[#5B6170] dark:text-[#E6E9EF]/80">
            Upmotion Tech designs and builds web and mobile products, integrates Applied AI where it matters, and keeps delivery honest and predictable.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0F66F6] text-white shadow-sm hover:shadow-md transition-all"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#E6E9EF] dark:border-white/15 hover:bg-[#F5F7FB] dark:hover:bg-white/5 transition-colors"
            >
              Book a 20-minute call
            </a>
          </motion.div>

          {/* Metrics strip mimicking Mariq cadence */}
          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm"
          >
            <div>
              <div className="text-2xl font-bold">+40</div>
              <div className="text-[#5B6170] dark:text-[#E6E9EF]/70">Products shipped</div>
            </div>
            <div>
              <div className="text-2xl font-bold">2–6 wks</div>
              <div className="text-[#5B6170] dark:text-[#E6E9EF]/70">Avg. delivery window</div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-[#5B6170] dark:text-[#E6E9EF]/70">Repeat clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
