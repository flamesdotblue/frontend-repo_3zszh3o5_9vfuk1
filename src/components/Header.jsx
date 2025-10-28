import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-[#0B1220]/80 border-b border-[#E6E9EF]/70 dark:border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="group inline-flex items-center gap-2">
            <motion.span
              initial={{ scale: 0.9, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
              className="relative inline-flex h-6 w-6 items-center justify-center"
            >
              <span className="absolute inset-0 rounded-md bg-[#0F66F6]/90 shadow-[0_8px_24px_rgba(15,102,246,0.45)]" />
              <span className="relative h-3 w-3 rounded-sm bg-white/95" />
            </motion.span>
            <span className="font-semibold tracking-tight group-hover:text-[#0F66F6] transition-colors">Upmotion Tech</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 rounded-md text-[#0B1220]/80 dark:text-[#E6E9EF]/80 hover:text-[#0B1220] dark:hover:text-white transition-colors"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="pointer-events-none absolute inset-x-2 bottom-1 h-[2px] origin-left scale-x-0 bg-[#0F66F6] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 justify-center px-4 py-2 rounded-lg bg-[#0F66F6] text-white shadow-sm hover:shadow-md transition-shadow"
            >
              Book a call
              <ChevronRight className="h-4 w-4" />
            </a>
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E6E9EF] dark:border-white/10"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="mx-auto mt-4 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/90 dark:bg-[#0B1220]/95 backdrop-blur p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md bg-[#0F66F6]" />
                  <span className="font-semibold">Upmotion Tech</span>
                </div>
                <button
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E6E9EF] dark:border-white/10"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 grid gap-1">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -8, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.02 * idx }}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-[#F5F7FB] dark:hover:bg-white/5"
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </motion.a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F66F6] px-4 py-3 font-medium text-white shadow-sm"
              >
                Book a call
                <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
