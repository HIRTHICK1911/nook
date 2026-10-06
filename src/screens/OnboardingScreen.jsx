import React, { useState } from 'react';
import { ArrowRight, Check, GraduationCap, Compass, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function OnboardingScreen() {
  const { completeOnboarding, currentUser } = useApp();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: currentUser.name || 'Vihz',
    college: currentUser.college || 'Apex Institute of Technology',
    department: currentUser.department || 'Computer Science & Engineering',
    year: currentUser.year || '3rd Year',
  });

  const availableInterests = [
    'Coding',
    'Music',
    'Gaming',
    'Sports',
    'Photography',
    'Design',
    'Entrepreneurship',
    'Movies',
    'Travel'
  ];

  const [selectedInterests, setSelectedInterests] = useState(
    currentUser.interests || ['Coding', 'Design', 'Music']
  );

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleNextStep1 = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    setStep(2);
  };

  const handleNextStep2 = () => {
    setStep(3);
  };

  const handleFinish = () => {
    completeOnboarding({
      ...formData,
      interests: selectedInterests
    });
  };

  return (
    <div className="min-h-screen bg-cozy-bg flex flex-col justify-center items-center p-4 sm:p-6 text-cozy-text">
      <div className="w-full max-w-md bg-cozy-surface rounded-2xl p-6 sm:p-8 shadow-cozy-sm border border-cozy-border/60 text-center relative overflow-hidden transition-all duration-200">
        
        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          <div className={`h-1 rounded-full transition-all duration-200 ${step === 1 ? 'w-6 bg-nook-500' : 'w-2 bg-cozy-border'}`} />
          <div className={`h-1 rounded-full transition-all duration-200 ${step === 2 ? 'w-6 bg-nook-500' : 'w-2 bg-cozy-border'}`} />
          <div className={`h-1 rounded-full transition-all duration-200 ${step === 3 ? 'w-6 bg-nook-500' : 'w-2 bg-cozy-border'}`} />
        </div>

        {/* STEP 1: Basic Info */}
        {step === 1 && (
          <div className="animate-in fade-in duration-150">
            <h2 className="text-xl sm:text-2xl font-extrabold text-cozy-text tracking-tight">
              Tell us about yourself
            </h2>
            <p className="text-xs text-cozy-muted mt-1 font-normal">
              So your campus feed feels personal.
            </p>

            <form onSubmit={handleNextStep1} className="mt-6 text-left space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-cozy-muted uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vihz"
                  className="w-full bg-cozy-subtle/50 focus:bg-white text-xs sm:text-sm text-cozy-text placeholder-cozy-dim px-3.5 py-2.5 rounded-xl border border-cozy-border/60 focus:border-nook-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-cozy-muted uppercase tracking-wider mb-1">
                  College / University
                </label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  placeholder="e.g. Apex Institute of Technology"
                  className="w-full bg-cozy-subtle/50 focus:bg-white text-xs sm:text-sm text-cozy-text placeholder-cozy-dim px-3.5 py-2.5 rounded-xl border border-cozy-border/60 focus:border-nook-400 focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-cozy-muted uppercase tracking-wider mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="e.g. Computer Science"
                    className="w-full bg-cozy-subtle/50 focus:bg-white text-xs sm:text-sm text-cozy-text placeholder-cozy-dim px-3.5 py-2.5 rounded-xl border border-cozy-border/60 focus:border-nook-400 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-cozy-muted uppercase tracking-wider mb-1">
                    Year
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full bg-cozy-subtle/50 focus:bg-white text-xs sm:text-sm text-cozy-text px-3 py-2.5 rounded-xl border border-cozy-border/60 focus:border-nook-400 focus:outline-none transition-all"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Postgraduate">Grad Student</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-nook-500 hover:bg-nook-600 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-cozy-sm transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Next: Interests</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: Interests */}
        {step === 2 && (
          <div className="animate-in fade-in duration-150">
            <h2 className="text-xl sm:text-2xl font-extrabold text-cozy-text tracking-tight">
              What are you into?
            </h2>
            <p className="text-xs text-cozy-muted mt-1 font-normal">
              Pick a few things to connect with clubs and peers.
            </p>

            {/* Tasteful Interest Chips */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {availableInterests.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-nook-500 text-white shadow-cozy-sm'
                        : 'bg-cozy-subtle hover:bg-cozy-hover text-cozy-muted'
                    }`}
                  >
                    <span>{interest}</span>
                    {isSelected && <span className="ml-1.5">✓</span>}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-2.5 rounded-xl bg-cozy-subtle hover:bg-cozy-hover text-cozy-text font-semibold text-xs transition-all"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep2}
                className="w-2/3 py-2.5 rounded-xl bg-nook-500 hover:bg-nook-600 active:scale-[0.98] text-white font-semibold text-xs shadow-cozy-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Welcome Celebration */}
        {step === 3 && (
          <div className="animate-in zoom-in-95 duration-200 py-3">
            <div className="w-12 h-12 rounded-2xl bg-nook-50 text-nook-500 flex items-center justify-center mx-auto mb-4 shadow-cozy-sm">
              <Sparkles className="w-6 h-6" />
            </div>

            <h2 className="text-2xl font-extrabold text-cozy-text tracking-tight">
              Welcome to your Nook.
            </h2>
            <p className="text-xs sm:text-sm text-cozy-muted mt-2 font-normal leading-relaxed">
              Hey <strong className="text-cozy-text">{formData.name}</strong>! Your space is all set up. Jump into the Lounge and see what's happening around campus.
            </p>

            <div className="mt-5 p-3.5 rounded-xl bg-cozy-subtle/60 text-left text-xs space-y-1">
              <div className="font-semibold text-cozy-text">{formData.name}</div>
              <div className="text-cozy-dim">{formData.department} · {formData.year}</div>
              <div className="mt-2 flex flex-wrap gap-1 pt-1">
                {selectedInterests.slice(0, 4).map(i => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white text-cozy-muted font-medium">
                    #{i.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="mt-6 w-full py-3 rounded-xl bg-nook-500 hover:bg-nook-600 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-cozy-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Enter Campus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
