import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-50 to-emerald-100">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to match romantic, modern vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-emerald-50/40 to-emerald-100/80" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:py-24">
        <span className="inline-flex items-center rounded-full bg-rose-100/80 px-3 py-1 text-sm font-medium text-rose-700 shadow-sm ring-1 ring-rose-200">
          Kita Edition · Celebrate Togetherness
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-emerald-900 sm:text-5xl md:text-6xl">
          Romantic Tunes — Because We Always Have a Song
        </h1>

        <p className="max-w-2xl text-lg text-emerald-800/80">
          An evening of tender melodies and modern romance. A warm, minimal atmosphere crafted for closeness and love.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-emerald-900/80">
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 shadow-sm ring-1 ring-emerald-200">
            <span className="text-sm">Saturday, 14 February · 7:00 PM</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 shadow-sm ring-1 ring-emerald-200">
            <span className="text-sm">Kita Hall, Jakarta</span>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#tickets"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:translate-y-[-1px] hover:bg-emerald-700 hover:shadow-emerald-700/25 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          >
            Buy Tickets Now
          </a>
        </div>
      </div>
    </section>
  );
}
