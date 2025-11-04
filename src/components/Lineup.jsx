import React from 'react';

const artists = [
  { name: 'Alya & Reza', role: 'Indie Pop Duo' },
  { name: 'Noah L.', role: 'Singer-Songwriter' },
  { name: 'Mira Sora', role: 'Neo-Soul' },
  { name: 'Dua Hati', role: 'Acoustic' },
];

export default function Lineup() {
  return (
    <section id="lineup" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Line-up</h2>
        <p className="text-sm text-emerald-800/70">A romantic curation of voices</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {artists.map((a) => (
          <div key={a.name} className="group rounded-2xl border border-emerald-200/60 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition hover:shadow-md">
            {/* Placeholder image with soft gradient */}
            <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100 via-emerald-50 to-rose-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(244,114,182,0.25),transparent_55%)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-medium text-emerald-900">{a.name}</span>
              <span className="text-sm text-emerald-800/70">{a.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
