import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle,
  BookOpen,
  Plus,
  Compass,
  ArrowRight,
  Flame,
  Clock,
  MapPin,
  Heart,
  MessageSquare,
  Sparkles,
  Check,
  ChevronRight,
  Coffee,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {
  const {
    currentUser,
    setCurrentView,
    classes,
    tasks,
    toggleTaskComplete,
    events,
    toggleEventInterested,
    trendingDiscussions,
    setCreatePostModalOpen,
    setActiveCommentPostId,
    posts
  } = useApp();

  const [scheduleExpanded, setScheduleExpanded] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const nextClass = classes[0];
  const featuredEvent = events.find(e => e.id === 'ev_2') || events[0];

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16 animate-in fade-in duration-200">
      
      {/* HUMAN GREETING HEADER */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-cozy-text tracking-tight flex items-center gap-2">
            <span>{getGreeting()}, {currentUser.name}</span>
            <span className="text-xl">👋</span>
          </h1>
          <p className="text-sm text-cozy-muted mt-1 font-normal">
            Here's what's going on around campus today.
          </p>
        </div>

        {/* Cozy Quick Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cozy-subtle/70 text-xs text-cozy-muted self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{currentUser.college.split(' ')[0]} campus</span>
        </div>
      </div>

      {/* 1. NEXT CLASS / TIMETABLE SNAPSHOT */}
      <section className="bg-cozy-surface rounded-2xl p-5 shadow-cozy-sm border border-cozy-border/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                Next Class
              </span>
              <h3 className="font-bold text-base text-cozy-text mt-0.5">
                {nextClass?.name}
              </h3>
              <p className="text-xs text-cozy-muted mt-0.5">
                {nextClass?.time} · {nextClass?.room} ({nextClass?.professor})
              </p>
            </div>
          </div>

          <button
            onClick={() => setScheduleExpanded(!scheduleExpanded)}
            className="text-xs font-semibold text-cozy-muted hover:text-cozy-text px-3 py-1.5 rounded-lg hover:bg-cozy-subtle transition-colors"
          >
            {scheduleExpanded ? 'Hide schedule' : 'See all 3 classes'}
          </button>
        </div>

        {/* Expandable full schedule for today */}
        {scheduleExpanded && (
          <div className="mt-4 pt-4 border-t border-cozy-divider/60 space-y-2 animate-in fade-in">
            {classes.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-2.5 rounded-xl bg-cozy-subtle/40 text-xs">
                <div>
                  <span className="font-bold text-cozy-text">{c.name}</span>
                  <span className="text-cozy-muted ml-2">{c.room}</span>
                </div>
                <span className="text-cozy-dim">{c.time}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 2. CHATS FROM THE LOUNGE */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-nook-500" />
            <h2 className="text-sm font-bold text-cozy-text">
              Happening in the Lounge
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('lounge')}
            className="text-xs text-nook-600 font-semibold hover:underline flex items-center gap-1"
          >
            <span>Open Lounge</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2.5">
          {posts.slice(0, 2).map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveCommentPostId(post.id)}
              className="bg-cozy-surface hover:bg-white rounded-2xl p-4 shadow-cozy-sm border border-cozy-border/50 hover:border-cozy-border transition-all cursor-pointer flex items-start gap-3.5 group"
            >
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5 border border-cozy-border"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="font-bold text-cozy-text group-hover:text-nook-600 transition-colors">
                      {post.author.name}
                    </span>
                    <span className="text-cozy-dim">· {post.timestamp}</span>
                  </div>
                  <span className="text-[10px] text-cozy-muted bg-cozy-subtle px-2 py-0.5 rounded-md">
                    #{post.category?.toLowerCase() || 'general'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-cozy-muted mt-1 line-clamp-2 leading-relaxed">
                  {post.content}
                </p>
                <div className="mt-2.5 flex items-center gap-4 text-xs text-cozy-dim">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-cozy-dim" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-cozy-dim" />
                    <span>{post.commentsCount} replies</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED UPCOMING CAMPUS EVENT */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-600" />
            <h2 className="text-sm font-bold text-cozy-text">
              Tonight on Campus
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('events')}
            className="text-xs text-nook-600 font-semibold hover:underline"
          >
            All events ({events.length})
          </button>
        </div>

        <div className="bg-cozy-surface rounded-2xl overflow-hidden shadow-cozy-sm border border-cozy-border/50 flex flex-col sm:flex-row group">
          <div className="relative sm:w-2/5 h-44 sm:h-auto overflow-hidden">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-cozy-text backdrop-blur-sm">
              {featuredEvent.badge}
            </span>
          </div>

          <div className="p-5 sm:w-3/5 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base text-cozy-text group-hover:text-nook-600 transition-colors">
                {featuredEvent.title}
              </h3>
              <p className="text-xs text-cozy-muted mt-1 leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="mt-3 space-y-1 text-xs text-cozy-dim">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cozy-dim" />
                  <span>{featuredEvent.date} · {featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cozy-dim" />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-cozy-divider/60 flex items-center justify-between">
              <span className="text-xs text-cozy-muted">
                <strong>{featuredEvent.interestedCount}</strong> students going
              </span>

              <button
                onClick={() => toggleEventInterested(featuredEvent.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  featuredEvent.isInterested
                    ? 'bg-nook-500 text-white shadow-cozy-sm'
                    : 'bg-cozy-subtle hover:bg-cozy-hover text-cozy-text'
                }`}
              >
                {featuredEvent.isInterested ? 'Interested ✓' : 'Interested'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THINGS YOU MIGHT CARE ABOUT (Tasks + Quick Links) */}
      <section className="bg-cozy-surface rounded-2xl p-5 shadow-cozy-sm border border-cozy-border/50 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-cozy-text">
            Things to remember
          </h2>
          <span className="text-xs text-cozy-dim">
            {tasks.length} pending
          </span>
        </div>

        {tasks.length === 0 ? (
          <p className="text-xs text-cozy-muted py-2">Nothing pending — kick back and relax! ☕️</p>
        ) : (
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-cozy-subtle/40 hover:bg-cozy-subtle text-xs transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => toggleTaskComplete(task.id)}
                    className="w-4 h-4 rounded-md border border-cozy-border hover:border-nook-500 hover:bg-nook-50 flex items-center justify-center transition-colors group"
                    title="Mark done"
                  >
                    <Check className="w-3 h-3 text-nook-500 opacity-0 group-hover:opacity-100" />
                  </button>
                  <span className="font-medium text-cozy-text">{task.title}</span>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                  task.urgent ? 'bg-rose-50 text-rose-700' : 'text-cozy-dim'
                }`}>
                  {task.due}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
