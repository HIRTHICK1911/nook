import React, { useState } from 'react';
import {
  Search,
  Users,
  Compass,
  Calendar,
  Flame,
  MessageSquare,
  Heart,
  UserPlus,
  UserCheck,
  Check,
  Plus,
  Terminal,
  Camera,
  Gamepad2,
  Music,
  Dribbble,
  Briefcase,
  Palette,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ExploreScreen() {
  const {
    searchQuery,
    setSearchQuery,
    communities,
    toggleJoinCommunity,
    currentUser,
    students,
    toggleFollowStudent,
    trendingDiscussions,
    events,
    toggleEventInterested,
    setCurrentView,
    setActiveCommentPostId,
    posts
  } = useApp();

  const [activeTab, setActiveTab] = useState('All');

  const getClubIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Camera': return Camera;
      case 'Gamepad2': return Gamepad2;
      case 'Music': return Music;
      case 'Dribbble': return Dribbble;
      case 'Briefcase': return Briefcase;
      case 'Palette': return Palette;
      default: return BookOpen;
    }
  };

  const q = searchQuery.toLowerCase().trim();

  const filteredCommunities = communities.filter(c =>
    !q || c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
  );

  const filteredStudents = students.filter(s =>
    !q || s.name.toLowerCase().includes(q) || s.department.toLowerCase().includes(q) || s.bio.toLowerCase().includes(q) || s.interests.some(i => i.toLowerCase().includes(q))
  );

  const filteredTrending = trendingDiscussions.filter(t =>
    !q || t.title.toLowerCase().includes(q) || t.tag.toLowerCase().includes(q)
  );

  const filteredEvents = events.filter(e =>
    !q || e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16 animate-in fade-in duration-200">
      
      {/* Header & Search */}
      <div className="space-y-4 pt-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-cozy-text tracking-tight">
            Explore Campus
          </h1>
          <p className="text-sm text-cozy-muted mt-1 font-normal">
            Clubs, active student projects, peers, and campus conversations.
          </p>
        </div>

        {/* Minimal Cozy Search Bar */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-cozy-dim absolute left-3.5 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search clubs, people, topics... (e.g. Coding, Photography, AI)"
            className="w-full bg-cozy-surface text-sm text-cozy-text placeholder-cozy-dim pl-10 pr-9 py-2.5 rounded-xl border border-cozy-border/60 focus:border-nook-400 focus:outline-none transition-all shadow-cozy-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-xs text-cozy-dim hover:text-cozy-text"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {['All', 'Trending', 'Communities', 'People', 'Events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                activeTab === tab
                  ? 'bg-cozy-text text-white shadow-cozy-sm'
                  : 'bg-cozy-surface hover:bg-cozy-hover text-cozy-muted border border-cozy-border/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* TRENDING TOPICS */}
      {(activeTab === 'All' || activeTab === 'Trending') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-bold text-cozy-text flex items-center gap-2">
              <Flame className="w-4 h-4 text-nook-500" />
              <span>Trending in the Lounge</span>
            </h2>
            <button
              onClick={() => setCurrentView('lounge')}
              className="text-xs text-nook-600 font-semibold hover:underline"
            >
              Open Lounge →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {filteredTrending.map((trend) => (
              <div
                key={trend.id}
                onClick={() => {
                  const match = posts.find(p => p.content.toLowerCase().includes(trend.query));
                  if (match) setActiveCommentPostId(match.id);
                  else setCurrentView('lounge');
                }}
                className="p-4 rounded-2xl bg-cozy-surface hover:bg-white border border-cozy-border/50 hover:border-cozy-border shadow-cozy-sm transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-cozy-dim mb-1.5">
                    <span className="font-semibold text-cozy-text">#{trend.tag.toLowerCase()}</span>
                    <span>{trend.author}</span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-cozy-text group-hover:text-nook-600 transition-colors leading-snug">
                    "{trend.title}"
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-cozy-divider/50 flex items-center justify-between text-xs text-cozy-dim">
                  <span>{trend.replies} replies</span>
                  <span className="text-nook-600 font-medium">❤️ {trend.reactions}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* COMMUNITIES & CLUBS */}
      {(activeTab === 'All' || activeTab === 'Communities') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-bold text-cozy-text flex items-center gap-2">
              <Users className="w-4 h-4 text-nook-500" />
              <span>Campus Communities ({filteredCommunities.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCommunities.map((club) => {
              const IconComp = getClubIcon(club.icon);
              const isJoined = currentUser.joinedCommunities?.includes(club.id);

              return (
                <div
                  key={club.id}
                  className="bg-cozy-surface hover:bg-white rounded-2xl overflow-hidden shadow-cozy-sm border border-cozy-border/50 hover:border-cozy-border transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-24 w-full overflow-hidden bg-cozy-subtle">
                      <img
                        src={club.cover}
                        alt={club.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-cozy-text">
                        {club.category}
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-6 h-6 rounded-lg ${club.accent} flex items-center justify-center shrink-0`}>
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-bold text-sm text-cozy-text group-hover:text-nook-600 transition-colors">
                          {club.name}
                        </h3>
                      </div>
                      <p className="text-xs text-cozy-muted mt-1 leading-relaxed line-clamp-2">
                        {club.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-0 flex items-center justify-between">
                    <span className="text-xs text-cozy-dim">
                      {club.memberCount} members
                    </span>

                    <button
                      onClick={() => toggleJoinCommunity(club.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        isJoined
                          ? 'bg-cozy-subtle hover:bg-cozy-hover text-cozy-text'
                          : 'bg-nook-500 hover:bg-nook-600 text-white shadow-cozy-sm'
                      }`}
                    >
                      {isJoined ? 'Joined ✓' : 'Join'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PEOPLE */}
      {(activeTab === 'All' || activeTab === 'People') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-bold text-cozy-text flex items-center gap-2">
              <Compass className="w-4 h-4 text-nook-500" />
              <span>Campus Peers ({filteredStudents.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {filteredStudents.map((st) => (
              <div
                key={st.id}
                className="p-4 rounded-2xl bg-cozy-surface hover:bg-white border border-cozy-border/50 hover:border-cozy-border shadow-cozy-sm flex flex-col justify-between text-center transition-all"
              >
                <div>
                  <img
                    src={st.avatar}
                    alt={st.name}
                    className="w-14 h-14 rounded-full object-cover mx-auto border border-cozy-border mb-2.5 shadow-cozy-sm"
                  />
                  <h3 className="font-bold text-xs sm:text-sm text-cozy-text truncate">
                    {st.name}
                  </h3>
                  <p className="text-[11px] text-cozy-dim truncate">
                    {st.department}
                  </p>
                  <p className="text-xs text-cozy-muted mt-1.5 line-clamp-2 leading-relaxed">
                    {st.bio}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-cozy-divider/60">
                  <button
                    onClick={() => toggleFollowStudent(st.id)}
                    className={`w-full py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      st.isFollowing
                        ? 'bg-cozy-subtle text-cozy-text hover:bg-cozy-hover'
                        : 'bg-nook-500 text-white hover:bg-nook-600'
                    }`}
                  >
                    {st.isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
