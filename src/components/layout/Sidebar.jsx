import React from 'react';
import {
  Home,
  Coffee,
  Compass,
  Calendar,
  User,
  Settings,
  Plus,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Sidebar() {
  const {
    currentView,
    setCurrentView,
    currentUser,
    setCreatePostModalOpen,
    showToast
  } = useApp();

  const primaryNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lounge', label: 'Lounge', icon: Coffee, badge: 'Live' },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'events', label: 'Events', icon: Calendar, badge: '6' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-60 lg:w-64 bg-cozy-bg border-r border-cozy-divider h-screen sticky top-0 px-4 py-7 select-none z-30 justify-between">
      {/* Top Brand & Nav */}
      <div className="flex flex-col space-y-6">
        {/* Cozy NOOK Logo */}
        <div 
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-3 px-2 cursor-pointer group"
        >
          {/* Logo Mark: Cozy Corner / Nook */}
          <div className="w-9 h-9 rounded-xl bg-nook-500 text-white flex items-center justify-center shadow-cozy-sm group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19V5a2 2 0 0 1 2-2h14v14a2 2 0 0 1-2 2H4z" />
              <path d="M4 12h16" />
            </svg>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-cozy-text group-hover:text-nook-600 transition-colors">
              NOOK
            </span>
            <p className="text-[11px] font-medium text-cozy-muted -mt-0.5">
              campus corner
            </p>
          </div>
        </div>

        {/* Lounge Composer Quick Action */}
        <div className="px-1">
          <button
            onClick={() => setCreatePostModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-nook-500 hover:bg-nook-600 active:scale-[0.98] text-white font-semibold rounded-xl text-sm shadow-cozy-sm transition-all duration-200 group"
          >
            <Plus className="w-4 h-4 text-white/90 group-hover:rotate-90 transition-transform duration-300" />
            <span>Say something</span>
          </button>
        </div>

        {/* Primary Navigation */}
        <nav className="space-y-1 px-1">
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 group ${
                  isActive
                    ? 'bg-cozy-surface text-nook-600 font-semibold shadow-cozy-sm'
                    : 'text-cozy-muted hover:text-cozy-text hover:bg-cozy-hover/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-nook-500' : 'text-cozy-dim group-hover:text-cozy-muted'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-nook-100 text-nook-700'
                        : 'bg-cozy-subtle text-cozy-muted'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom User Area */}
      <div className="flex flex-col space-y-3 px-1 pt-4">
        {/* Profile & Settings Links */}
        <div className="space-y-0.5 border-t border-cozy-divider/70 pt-3">
          <button
            onClick={() => setCurrentView('profile')}
            className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
              currentView === 'profile'
                ? 'bg-cozy-surface text-nook-600 font-bold shadow-cozy-sm'
                : 'text-cozy-muted hover:text-cozy-text hover:bg-cozy-hover/40'
            }`}
          >
            <User className="w-4 h-4 text-cozy-dim" />
            <span>Profile</span>
          </button>

          <button
            onClick={() => showToast('Preferences saved')}
            className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-cozy-muted hover:text-cozy-text hover:bg-cozy-hover/40 transition-colors"
          >
            <Settings className="w-4 h-4 text-cozy-dim" />
            <span>Settings</span>
          </button>
        </div>

        {/* User Card */}
        <div
          onClick={() => setCurrentView('profile')}
          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cozy-surface/80 cursor-pointer transition-all duration-200 group"
        >
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-9 h-9 rounded-full object-cover border border-cozy-border shadow-cozy-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-xs text-cozy-text truncate">
                {currentUser.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-[11px] text-cozy-dim truncate">
              {currentUser.department}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
