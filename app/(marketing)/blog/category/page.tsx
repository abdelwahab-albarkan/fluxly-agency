import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-500/10 blur-[120px]" />

      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 animate-pulse">
          ✨ Fluxly Agency
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent max-w-3xl mb-6">
          Blog Categories
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Filter and read articles grouped by service capabilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-medium text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all font-medium text-slate-300"
          >
            View Portfolio
          </Link>
        </div>

        {/* Feature Grid Mock */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24">
          {[
            { t: 'Modern Architecture', d: 'Built with the latest technologies like Next.js 15, Tailwind v4, and Prisma for ultimate scalability.' },
            { t: 'High Performance', d: 'Edge-rendered, optimized assets, and static-first generation for perfect Core Web Vitals.' },
            { t: 'Bespoke Design', d: 'Unique interface systems designed to make your company stand out in the crowded market.' }
          ].map((feat, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all text-left group">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 font-bold group-hover:scale-110 transition-transform">
                0${idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feat.t}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feat.d}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}