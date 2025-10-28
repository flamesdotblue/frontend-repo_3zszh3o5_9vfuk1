import React from 'react';

const services = [
  {
    title: 'Product Design',
    desc: 'Short discovery, UX flows, UI systems, design audits.',
  },
  {
    title: 'Web and Mobile Engineering',
    desc: 'Next.js, React Native, TypeScript, Node, secure APIs, testing, CI.',
  },
  {
    title: 'Applied AI',
    desc: 'Assistants, voice agents, retrieval, workflow automations with guardrails.',
  },
  {
    title: 'Growth and SEO',
    desc: 'Technical SEO, performance budgets, schema, content ops.',
  },
];

export default function ServicesGrid() {
  return (
    <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="group rounded-2xl border border-[#E6E9EF] dark:border-white/10 bg-white dark:bg-[#0B1220] p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-lg bg-[#F5F7FB] dark:bg-white/5 border border-[#E6E9EF]/70 dark:border-white/10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
          <p className="text-sm text-[#5B6170] dark:text-[#E6E9EF]/70">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
