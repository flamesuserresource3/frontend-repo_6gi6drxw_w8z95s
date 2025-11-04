import React from 'react';
import { Ticket } from 'lucide-react';

const tiers = [
  {
    name: 'Kita Duo',
    desc: 'Two seats together + welcome drink',
    price: 'IDR 600K',
    accent: 'from-emerald-100 to-emerald-50',
  },
  {
    name: 'Lovers Premium',
    desc: 'Front rows + signed postcard',
    price: 'IDR 1.200K',
    accent: 'from-rose-100 to-emerald-50',
  },
  {
    name: 'Solo Heart',
    desc: 'Standard seating',
    price: 'IDR 350K',
    accent: 'from-emerald-50 to-emerald-50',
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Tickets</h2>
        <p className="text-sm text-emerald-800/70">Choose the feeling that fits</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border border-emerald-200/60 bg-white/70 p-6 shadow-sm transition hover:shadow-md`}
          >
            <div className={`mb-4 rounded-xl bg-gradient-to-r ${t.accent} p-3 text-emerald-800 ring-1 ring-emerald-200/60`}>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/70 text-emerald-700 ring-1 ring-emerald-200">
                  <Ticket size={18} />
                </span>
                <span className="text-lg font-medium">{t.name}</span>
              </div>
            </div>
            <p className="mb-4 text-emerald-800/80">{t.desc}</p>
            <div className="mb-6 text-2xl font-semibold text-emerald-900">{t.price}</div>
            <a
              href="#purchase"
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-white shadow-lg shadow-emerald-600/20 transition hover:translate-y-[-1px] hover:bg-emerald-700 hover:shadow-emerald-700/25 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Select
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
