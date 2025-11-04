import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function VenueSchedule() {
  return (
    <section id="info" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Venue & Schedule</h2>
        <p className="text-sm text-emerald-800/70">Plan a calm, lovely evening</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-5 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <Calendar size={18} />
          </div>
          <h3 className="mb-1 text-lg font-medium text-emerald-900">Date</h3>
          <p className="text-emerald-800/80">Saturday, 14 February</p>
        </div>

        <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-5 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <Clock size={18} />
          </div>
          <h3 className="mb-1 text-lg font-medium text-emerald-900">Time</h3>
          <p className="text-emerald-800/80">Doors 6:00 PM · Show 7:00 PM</p>
        </div>

        <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-5 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <MapPin size={18} />
          </div>
          <h3 className="mb-1 text-lg font-medium text-emerald-900">Location</h3>
          <p className="text-emerald-800/80">Kita Hall, Jakarta · Jl. Harmoni 12</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-rose-50 p-6 text-emerald-900">
        <p className="text-sm">
          We encourage a chic, minimal dress code. Arrive a little early for a smooth, loving start to your night.
        </p>
      </div>
    </section>
  );
}
