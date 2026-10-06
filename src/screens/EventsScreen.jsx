import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Sparkles,
  Check,
  Share2,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function EventsScreen() {
  const { events, toggleEventInterested, showToast } = useApp();

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEventModal, setSelectedEventModal] = useState(null);

  const categories = [
    'All',
    'Clubs',
    'Hackathons',
    'Workshops',
    'Sports',
    'Cultural'
  ];

  const filteredEvents = events.filter(ev => {
    if (activeCategory === 'All') return true;
    return ev.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handleShareEvent = (ev, e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText?.(window.location.href);
    showToast(`Copied "${ev.title}" link to share! 📅`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-7 pb-16 animate-in fade-in duration-200">
      
      {/* Editorial Header */}
      <div className="pt-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-cozy-text tracking-tight">
          What's happening?
        </h1>
        <p className="text-sm text-cozy-muted mt-1 font-normal">
          From sunset quad sessions to 36h hackathons and weekend tournaments.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
              activeCategory === cat
                ? 'bg-cozy-text text-white shadow-cozy-sm'
                : 'bg-cozy-surface hover:bg-cozy-hover text-cozy-muted border border-cozy-border/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            onClick={() => setSelectedEventModal(ev)}
            className="bg-cozy-surface hover:bg-white rounded-2xl overflow-hidden shadow-cozy-sm border border-cozy-border/50 hover:border-cozy-border transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Event Artwork */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cozy-subtle">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-cozy-text shadow-cozy-sm backdrop-blur-sm">
                  {ev.badge || ev.category}
                </span>

                <button
                  type="button"
                  onClick={(e) => handleShareEvent(ev, e)}
                  className="absolute top-3 right-3 p-1.5 bg-white/90 hover:bg-white text-cozy-muted hover:text-cozy-text rounded-full shadow-cozy-sm transition-transform active:scale-95"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Event Content */}
              <div className="p-4 sm:p-5">
                <div className="text-[11px] font-bold text-nook-600 uppercase tracking-wider mb-1">
                  {ev.date} · {ev.time.split('-')[0]}
                </div>

                <h3 className="font-extrabold text-base text-cozy-text group-hover:text-nook-600 transition-colors line-clamp-2 leading-snug">
                  {ev.title}
                </h3>

                <p className="text-xs text-cozy-muted mt-2 line-clamp-2 leading-relaxed font-normal">
                  {ev.description}
                </p>

                <div className="mt-4 pt-3 border-t border-cozy-divider/50 flex items-center gap-1.5 text-xs text-cozy-dim">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{ev.location}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-5 pb-4 pt-0 flex items-center justify-between">
              <span className="text-xs text-cozy-muted font-medium">
                <strong>{ev.interestedCount}</strong> interested
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleEventInterested(ev.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                  ev.isInterested
                    ? 'bg-nook-500 text-white shadow-cozy-sm'
                    : 'bg-cozy-subtle hover:bg-cozy-hover text-cozy-text'
                }`}
              >
                {ev.isInterested ? (
                  <>
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>Interested</span>
                  </>
                ) : (
                  <span>Interested</span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EVENT MODAL */}
      {selectedEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cozy-text/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="w-full max-w-lg bg-white rounded-3xl shadow-cozy-float border border-cozy-border overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 w-full">
              <img
                src={selectedEventModal.image}
                alt={selectedEventModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedEventModal(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-nook-50 text-nook-600">
                {selectedEventModal.category}
              </span>
              <h2 className="text-xl font-extrabold text-cozy-text mt-2">
                {selectedEventModal.title}
              </h2>
              <p className="text-xs text-cozy-muted mt-0.5">
                Organized by {selectedEventModal.organizer}
              </p>

              <div className="mt-4 p-3 bg-cozy-subtle/60 rounded-xl text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-cozy-text font-medium">
                  <Calendar className="w-4 h-4 text-nook-500" />
                  <span>{selectedEventModal.date} · {selectedEventModal.time}</span>
                </div>
                <div className="flex items-center gap-2 text-cozy-text font-medium">
                  <MapPin className="w-4 h-4 text-nook-500" />
                  <span>{selectedEventModal.location}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-cozy-muted leading-relaxed font-normal">
                {selectedEventModal.description}
              </p>

              <div className="mt-6 pt-4 border-t border-cozy-divider flex items-center justify-between">
                <span className="text-xs text-cozy-muted font-medium">
                  {selectedEventModal.interestedCount} students going
                </span>
                <button
                  onClick={() => {
                    toggleEventInterested(selectedEventModal.id);
                    setSelectedEventModal(prev => ({
                      ...prev,
                      isInterested: !prev.isInterested,
                      interestedCount: prev.isInterested ? prev.interestedCount - 1 : prev.interestedCount + 1
                    }));
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedEventModal.isInterested
                      ? 'bg-nook-500 text-white'
                      : 'bg-cozy-subtle hover:bg-cozy-hover text-cozy-text'
                  }`}
                >
                  {selectedEventModal.isInterested ? 'You are Interested ✓' : 'Mark Interested'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
