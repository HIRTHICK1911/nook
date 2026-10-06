import React from 'react';
import { Home, Coffee, Compass, Calendar, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function MobileNav() {
  const { currentView, setCurrentView } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lounge', label: 'Lounge', icon: Coffee },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-cozy-bg/95 backdrop-blur-md border-t border-cozy-divider/80 px-2 py-2 z-40 safe-bottom">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-150 ${
                isActive
                  ? 'text-nook-600 font-semibold'
                  : 'text-cozy-muted hover:text-cozy-text'
              }`}
            >
              <div className={`p-1 rounded-xl transition-colors ${isActive ? 'bg-nook-100/70 text-nook-600' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.7]'}`} />
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold text-nook-600' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
