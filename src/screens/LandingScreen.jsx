import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Users,
  Calendar,
  Coffee,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function LandingScreen() {
  const { setCurrentView } = useApp();

  return (
    <div className="min-h-screen bg-cozy-bg text-cozy-text flex flex-col">
      {/* Top Navigation */}
      <nav className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-nook-500 flex items-center justify-center text-white shadow-cozy-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19V5a2 2 0 0 1 2-2h14v14a2 2 0 0 1-2 2H4z" />
              <path d="M4 12h16" />
            </svg>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-cozy-text">
            NOOK
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('login')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-cozy-muted hover:text-cozy-text transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-nook-500 hover:bg-nook-600 text-white text-xs font-semibold shadow-cozy-sm active:scale-95 transition-all"
          >
            <span>Open app</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-12 pb-20 flex flex-col items-center text-center">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cozy-subtle text-cozy-muted text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-nook-500"></span>
          <span>A cozy little corner of campus</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-cozy-text max-w-3xl leading-[1.15]">
          Your campus. <br />
          <span className="text-nook-500">Your people.</span> Your space.
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-base sm:text-lg text-cozy-muted max-w-xl font-normal leading-relaxed">
          Open NOOK after class to see what everyone's up to. Find hackathon teammates, hear about tonight's acoustic jam, ask about exam notes, or just hang out in the Lounge.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <button
            onClick={() => setCurrentView('onboarding')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-nook-500 hover:bg-nook-600 active:scale-95 text-white font-semibold text-sm shadow-cozy-sm transition-all flex items-center justify-center gap-2 group"
          >
            <span>Claim your corner</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => setCurrentView('home')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cozy-surface hover:bg-cozy-hover border border-cozy-border text-cozy-text font-semibold text-sm transition-all"
          >
            Explore live campus
          </button>
        </div>

        {/* Friendly Social Snapshot */}
        <div className="mt-12 flex items-center gap-3 text-xs text-cozy-muted font-normal">
          <div className="flex -space-x-2">
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Student" />
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Student" />
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Student" />
          </div>
          <span>Active with <strong>4,200+ students</strong> across 18 campus branches</span>
        </div>

        {/* Teaser Preview */}
        <div className="mt-14 w-full max-w-2xl bg-cozy-surface rounded-2xl p-5 border border-cozy-border/60 shadow-cozy-sm text-left">
          <div className="flex items-center justify-between pb-3 border-b border-cozy-divider/60 text-xs">
            <div className="flex items-center gap-2 text-cozy-dim">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>nook.campus.edu/lounge</span>
            </div>
            <span className="text-[11px] font-semibold text-nook-600">The Lounge</span>
          </div>

          <div className="pt-3.5 space-y-2.5">
            <div className="p-3 rounded-xl bg-cozy-subtle/50 text-xs">
              <div className="flex items-center justify-between text-cozy-dim mb-1">
                <span className="font-semibold text-cozy-text">Vihz (CS 3rd Year)</span>
                <span>25m ago</span>
              </div>
              <p className="text-cozy-muted font-normal">
                "Looking for 1 frontend dev for HackCampus 2026 this weekend! Food rescue app idea..."
              </p>
              <div className="mt-2 text-[11px] text-nook-600 font-semibold">
                42 replies · 128 reactions
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
          <div className="bg-cozy-surface p-5 rounded-2xl border border-cozy-border/50 shadow-cozy-sm">
            <div className="w-9 h-9 rounded-xl bg-nook-50 text-nook-500 flex items-center justify-center mb-3">
              <Coffee className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-cozy-text">The Campus Lounge</h3>
            <p className="text-xs text-cozy-muted mt-1 leading-relaxed font-normal">
              A relaxed space to ask questions, chat about professors, and share late-night study banter.
            </p>
          </div>

          <div className="bg-cozy-surface p-5 rounded-2xl border border-cozy-border/50 shadow-cozy-sm">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-cozy-text">Campus Events</h3>
            <p className="text-xs text-cozy-muted mt-1 leading-relaxed font-normal">
              Hackathons, acoustic open mics, and intramural basketball games you'll actually want to attend.
            </p>
          </div>

          <div className="bg-cozy-surface p-5 rounded-2xl border border-cozy-border/50 shadow-cozy-sm">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-cozy-text">Student Clubs</h3>
            <p className="text-xs text-cozy-muted mt-1 leading-relaxed font-normal">
              Coding Club, Photography Society, Basketball Crew, and Placement Prep. Find your circle.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-cozy-divider/70 bg-cozy-surface/50 py-6 px-6 text-center text-xs text-cozy-dim">
        <p>NOOK — Your campus corner. Built with care for college students.</p>
      </footer>
    </div>
  );
}
