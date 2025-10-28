import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B1220] dark:bg-[#0B1220] dark:text-[#E6E9EF]">
      <Header />
      <main>
        <Hero />
        <section className="py-16 md:py-24 border-t border-[#E6E9EF]/70 dark:border-white/10 bg-[#F5F7FB] dark:bg-[#0B1220]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">What we do</h2>
            <ServicesGrid />
          </div>
        </section>
        <section className="py-16 md:py-24 border-t border-[#E6E9EF]/70 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured projects</h2>
              <a href="#projects" className="text-sm font-medium text-[#0F66F6] hover:underline">See all</a>
            </div>
            <ProjectsGrid />
          </div>
        </section>
      </main>
      <footer className="py-10 border-t border-[#E6E9EF]/70 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#5B6170] dark:text-[#E6E9EF]/70">© {new Date().getFullYear()} Upmotion Tech. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#0F66F6]">Services</a>
            <a href="#projects" className="hover:text-[#0F66F6]">Projects</a>
            <a href="#contact" className="hover:text-[#0F66F6]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
