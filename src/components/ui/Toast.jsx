import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 z-50 animate-in fade-in slide-in-from-bottom-2 duration-150 pointer-events-none">
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cozy-text text-white text-xs font-medium shadow-cozy-md">
        <span className="w-1.5 h-1.5 rounded-full bg-nook-400"></span>
        <span>{toast}</span>
      </div>
    </div>
  );
}
