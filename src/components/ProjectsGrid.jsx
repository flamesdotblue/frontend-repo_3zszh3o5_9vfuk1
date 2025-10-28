import React from 'react';

const projects = [
  {
    title: 'FieldFlow Construction Suite',
    blurb: 'Role-based web and mobile workflows with offline-ready tasks.',
  },
  {
    title: 'Blynk Internet Portal',
    blurb: 'Next.js app router build with step-based signups and admin tools.',
  },
  {
    title: 'Skinsta Storefront',
    blurb: 'Headless storefront with clean catalog and conversion-minded UI.',
  },
  {
    title: 'Shapiro Diamonds',
    blurb: 'Shopify theme modernization and structured data overhaul.',
  },
  {
    title: 'EagleReact Streaming',
    blurb: 'Low-latency viewer with crisp UI and focused metrics.',
  },
  {
    title: 'PeakFolio Mobile',
    blurb: 'React Native app with glassmorphism details and native navigation.',
  },
];

export default function ProjectsGrid() {
  return (
    <div id="projects" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((p) => (
        <article
          key={p.title}
          className="group rounded-2xl overflow-hidden border border-[#E6E9EF] dark:border-white/10 bg-white dark:bg-[#0B1220] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className="aspect-[16/9] bg-[#F5F7FB] dark:bg-white/5 border-b border-[#E6E9EF]/70 dark:border-white/10" />
          <div className="p-6">
            <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm text-[#5B6170] dark:text-[#E6E9EF]/70">{p.blurb}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#0F66F6]">
              <span>View case study</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
