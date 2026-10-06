import React, { useState } from 'react';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function LoginScreen() {
  const { loginUser, setCurrentView } = useApp();
  const [email, setEmail] = useState('vihz@campus.edu');
  const [password, setPassword] = useState('••••••••••••');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email,
      name: email.split('@')[0] || 'Vihz'
    });
  };

  const handleGoogleLogin = () => {
    loginUser({
      email: 'vihz@campus.edu',
      name: 'Vihz'
    });
  };

  return (
    <div className="min-h-screen bg-cozy-bg flex flex-col justify-center items-center p-4 sm:p-6 text-cozy-text">
      <div className="w-full max-w-sm bg-cozy-surface rounded-2xl p-7 sm:p-8 shadow-cozy-sm border border-cozy-border/60 text-center relative overflow-hidden">
        
        {/* Cozy Logo Mark */}
        <div 
          onClick={() => setCurrentView('landing')}
          className="inline-flex items-center gap-2.5 cursor-pointer mb-5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-nook-500 flex items-center justify-center text-white shadow-cozy-sm group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19V5a2 2 0 0 1 2-2h14v14a2 2 0 0 1-2 2H4z" />
              <path d="M4 12h16" />
            </svg>
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-cozy-text">
            NOOK
          </span>
        </div>

        {/* Headings */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-cozy-text tracking-tight">
          Welcome back.
        </h2>
        <p className="text-xs text-cozy-muted mt-1 font-normal">
          Your campus is waiting.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 text-left space-y-3.5">
          <div>
            <label className="block text-[11px] font-bold text-cozy-muted uppercase tracking-wider mb-1">
              College Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-cozy-dim absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@campus.edu"
                className="w-full bg-cozy-subtle/50 focus:bg-white text-xs sm:text-sm text-cozy-text placeholder-cozy-dim pl-10 pr-3.5 py-2.5 rounded-xl border border-cozy-border/60 focus:border-nook-400 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-[11px] font-bold text-cozy-muted uppercase tracking-wider">
                Password
              </label>
              <button
                type="button"
                className="text-[11px] text-nook-600 hover:text-nook-700 font-semibold"
                onClick={() => alert('Password reset link sent to college email')}
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-cozy-dim absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-cozy-subtle/50 focus:bg-white text-xs sm:text-sm text-cozy-text placeholder-cozy-dim pl-10 pr-3.5 py-2.5 rounded-xl border border-cozy-border/60 focus:border-nook-400 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-nook-500 hover:bg-nook-600 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-cozy-sm transition-all flex items-center justify-center gap-2 mt-1"
          >
            <span>Sign in</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-cozy-divider"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2.5 text-cozy-dim font-normal">or</span>
          </div>
        </div>

        {/* Google SSO */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-2 px-3.5 rounded-xl bg-cozy-subtle/50 hover:bg-cozy-subtle active:scale-[0.98] border border-cozy-border/60 text-cozy-text font-semibold text-xs transition-all flex items-center justify-center gap-2.5"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Signup Link */}
        <p className="mt-5 text-xs text-cozy-muted font-normal">
          First time here?{' '}
          <button
            onClick={() => setCurrentView('onboarding')}
            className="text-nook-600 hover:text-nook-700 font-semibold hover:underline"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}
