import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-[#0B1220]/80 border-b border-[#E6E9EF]/70 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#0F66F6]"></div>
          <span className="font-semibold">Upmotion Tech</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-[#0F66F6]">Services</a>
          <a href="#projects" className="hover:text-[#0F66F6]">Projects</a>
          <a href="#blog" className="hover:text-[#0F66F6]">Blog</a>
          <a href="#about" className="hover:text-[#0F66F6]">About</a>
          <a href="#pricing" className="hover:text-[#0F66F6]">Pricing</a>
          <a href="#careers" className="hover:text-[#0F66F6]">Careers</a>
          <a href="#contact" className="hover:text-[#0F66F6]">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0F66F6] text-white shadow-sm hover:shadow-md transition-shadow">
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
