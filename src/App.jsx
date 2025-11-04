import React from 'react';
import Hero from './components/Hero';
import Lineup from './components/Lineup';
import VenueSchedule from './components/VenueSchedule';
import Tickets from './components/Tickets';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-50 to-white text-emerald-900">
      <main className="mx-auto max-w-7xl space-y-16 px-4 py-8 sm:px-6 sm:py-10 lg:space-y-20 lg:px-8">
        <Hero />
        <Lineup />
        <VenueSchedule />
        <Tickets />

        {/* Footer (simple, calm, and elegant) */}
        <footer className="rounded-3xl border border-emerald-200/60 bg-white/70 p-8 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-medium">Romantic Tunes</h3>
              <p className="text-sm text-emerald-800/70">Because we always have a song — Kita, together.</p>
            </div>
            <div className="flex items-center gap-4">
              <a aria-label="Instagram" href="#" className="rounded-lg p-2 text-emerald-700 transition hover:bg-emerald-50 hover:text-emerald-900">
                <Instagram size={20} />
              </a>
              <a aria-label="Twitter" href="#" className="rounded-lg p-2 text-emerald-700 transition hover:bg-emerald-50 hover:text-emerald-900">
                <Twitter size={20} />
              </a>
              <a aria-label="YouTube" href="#" className="rounded-lg p-2 text-emerald-700 transition hover:bg-emerald-50 hover:text-emerald-900">
                <Youtube size={20} />
              </a>
              <a aria-label="Email" href="mailto:hello@romantictunes.com" className="rounded-lg p-2 text-emerald-700 transition hover:bg-emerald-50 hover:text-emerald-900">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
