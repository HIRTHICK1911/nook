import React, { useState } from 'react';
import {
  Bell,
  Search,
  Plus,
  Layers,
  RotateCcw,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function TopHeader() {
  const {
    currentView,
    setCurrentView,
    setCreatePostModalOpen,
    searchQuery,
    setSearchQuery,
    showToast,
    resetAllData
  } = useApp();

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [screenSwitcherOpen, setScreenSwitcherOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'HackCampus team request', desc: 'Priya Nambiar replied to your post', time: '18m ago', unread: true },
    { id: 2, title: 'Class reminder', desc: 'Operating Systems Lab starting soon', time: '1h ago', unread: true },
    { id: 3, title: 'Sunset Jam tonight', desc: 'Starting 6:30 PM at the amphitheater', time: '2h ago', unread: false }
  ];

  const screens = [
    { id: 'landing', label: '1. Welcome Landing' },
    { id: 'login', label: '2. Login Screen' },
    { id: 'onboarding', label: '3. Onboarding Flow' },
    { id: 'home', label: '4. Home Snapshot' },
    { id: 'lounge', label: '5. Campus Lounge' },
    { id: 'explore', label: '6. Explore & Clubs' },
    { id: 'events', label: '7. Campus Events' },
    { id: 'profile', label: '8. Student Profile' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-cozy-bg/80 backdrop-blur-md border-b border-cozy-divider/60 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Mobile Brand */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-xl bg-nook-500 flex items-center justify-center text-white shadow-cozy-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V5a2 2 0 0 1 2-2h14v14a2 2 0 0 1-2 2H4z" />
                <path d="M4 12h16" />
              </svg>
            </div>
            <span className="font-extrabold text-lg tracking-tight text-cozy-text">
              NOOK
            </span>
          </button>
        </div>

        {/* Calm Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-sm items-center relative">
          <Search className="w-4 h-4 text-cozy-dim absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentView !== 'explore' && e.target.value.trim()) {
                setCurrentView('explore');
              }
            }}
            placeholder="Search discussions, clubs, people..."
            className="w-full bg-cozy-subtle/70 hover:bg-cozy-subtle focus:bg-white text-xs sm:text-sm text-cozy-text placeholder-cozy-dim pl-9 pr-4 py-2 rounded-xl border border-transparent focus:border-cozy-border focus:outline-none transition-all duration-200"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Quick Screen Switcher Pill */}
          <div className="relative">
            <button
              onClick={() => setScreenSwitcherOpen(!screenSwitcherOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cozy-subtle/80 hover:bg-cozy-hover border border-cozy-border/60 text-xs font-semibold text-cozy-text transition-colors"
              title="Jump to any screen"
            >
              <Layers className="w-3.5 h-3.5 text-nook-500" />
              <span className="hidden sm:inline text-cozy-muted font-normal">View:</span>
              <span className="capitalize font-bold text-nook-600 truncate max-w-[85px] sm:max-w-none">
                {currentView}
              </span>
              <ChevronDown className="w-3 h-3 text-cozy-dim" />
            </button>

            {screenSwitcherOpen && (
              <div 
                className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-cozy-md border border-cozy-border p-1.5 z-50 animate-in fade-in slide-in-from-top-1"
                onClick={() => setScreenSwitcherOpen(false)}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider text-cozy-dim px-3 py-1.5">
                  Screen Switcher
                </div>
                {screens.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setCurrentView(sc.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                      currentView === sc.id
                        ? 'bg-nook-50 text-nook-600 font-bold'
                        : 'text-cozy-text hover:bg-cozy-subtle'
                    }`}
                  >
                    <span>{sc.label}</span>
                    {currentView === sc.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-nook-500"></span>
                    )}
                  </button>
                ))}
                <div className="border-t border-cozy-divider mt-1 pt-1">
                  <button
                    onClick={resetAllData}
                    className="w-full text-left px-3 py-1.5 rounded-xl text-[11px] text-cozy-muted hover:text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset demo data</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Quick Post */}
          <button
            onClick={() => setCreatePostModalOpen(true)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-xl bg-nook-500 text-white shadow-cozy-sm active:scale-95 transition-transform"
          >
            <Plus className="w-4 h-4" />
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-xl text-cozy-muted hover:text-cozy-text hover:bg-cozy-subtle transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-nook-500"></span>
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-cozy-md border border-cozy-border p-3 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-cozy-divider">
                  <span className="font-bold text-xs text-cozy-text">Campus Notifications</span>
                  <button
                    onClick={() => {
                      showToast('Marked read');
                      setNotificationsOpen(false);
                    }}
                    className="text-[11px] text-nook-600 font-medium hover:underline"
                  >
                    Dismiss all
                  </button>
                </div>
                <div className="divide-y divide-cozy-divider/60 mt-1">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="py-2 px-2 hover:bg-cozy-subtle/50 rounded-xl transition-colors cursor-pointer"
                      onClick={() => setNotificationsOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-cozy-text">
                          {n.title}
                        </span>
                        <span className="text-[10px] text-cozy-dim">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-cozy-muted mt-0.5 line-clamp-1">
                        {n.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
