import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  Heart,
  MessageSquare,
  Edit3,
  Check,
  Coffee,
  BookOpen,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ProfileScreen() {
  const {
    currentUser,
    setCurrentUser,
    posts,
    toggleLike,
    setActiveCommentPostId,
    communities,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState('Posts'); // 'Posts' | 'Replies' | 'About'
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioInput, setBioInput] = useState(currentUser.bio);

  const handleSaveBio = () => {
    setCurrentUser(prev => ({ ...prev, bio: bioInput }));
    setIsEditingBio(false);
    showToast('Profile bio updated! ✨');
  };

  // Filter user posts
  const userPosts = posts.filter(p => p.author.isCurrentUser || p.author.name === currentUser.name);

  const userCommunities = communities.filter(c =>
    currentUser.joinedCommunities?.includes(c.id)
  );

  const sampleReplies = [
    {
      id: 'rep_1',
      targetPostAuthor: 'Aditi Sharma',
      targetPostSnippet: 'Golden hour hit the central quad so perfectly today. Photography Club photowalk...',
      replyText: 'Will bring my vintage point-and-shoot camera! What time does the walk end? 📸',
      timestamp: '1h ago',
      likes: 6
    },
    {
      id: 'rep_2',
      targetPostAuthor: 'Rohan Deshmukh',
      targetPostSnippet: 'Whoever left handwritten formula cheat sheets on table 14 in the library 2nd floor...',
      replyText: 'The Paxos algorithm summary on page 3 saved my sanity during quiz revision! 🙌',
      timestamp: '2h ago',
      likes: 12
    }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16 animate-in fade-in duration-200">
      
      {/* PERSONAL PROFILE HEADER */}
      <div className="bg-cozy-surface rounded-2xl p-6 sm:p-8 shadow-cozy-sm border border-cozy-border/50">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          {/* Large Avatar */}
          <div className="relative shrink-0">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white shadow-cozy-sm"
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
          </div>

          {/* Student Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-cozy-text tracking-tight">
                  {currentUser.name}
                </h1>
                <p className="text-xs text-cozy-muted font-medium mt-0.5">
                  {currentUser.department} · {currentUser.year}
                </p>
                <p className="text-xs text-cozy-dim">
                  {currentUser.college}
                </p>
              </div>

              {isEditingBio ? (
                <button
                  onClick={handleSaveBio}
                  className="px-3.5 py-1.5 rounded-xl bg-nook-500 hover:bg-nook-600 text-white text-xs font-semibold shadow-cozy-sm transition-all flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingBio(true)}
                  className="px-3.5 py-1.5 rounded-xl bg-cozy-subtle hover:bg-cozy-hover text-cozy-text text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit bio</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4 pt-4 border-t border-cozy-divider/60">
          {isEditingBio ? (
            <textarea
              value={bioInput}
              onChange={(e) => setBioInput(e.target.value)}
              rows={3}
              className="w-full bg-cozy-subtle p-3 rounded-xl border-none text-xs sm:text-sm text-cozy-text focus:outline-none focus:ring-1 focus:ring-nook-300 font-normal"
            />
          ) : (
            <p className="text-xs sm:text-sm text-cozy-text leading-relaxed font-normal">
              {currentUser.bio}
            </p>
          )}
        </div>

        {/* Small Tasteful Interest Chips */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {currentUser.interests?.map((interest) => (
            <span
              key={interest}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-cozy-subtle text-cozy-muted"
            >
              #{interest.toLowerCase()}
            </span>
          ))}
        </div>

        {/* Relaxed Stats */}
        <div className="mt-5 pt-4 border-t border-cozy-divider/60 flex items-center gap-7 text-xs">
          <div>
            <strong className="text-cozy-text text-sm font-bold">{userPosts.length}</strong>
            <span className="text-cozy-dim ml-1 font-normal">posts</span>
          </div>
          <div>
            <strong className="text-cozy-text text-sm font-bold">{currentUser.stats?.followers || 482}</strong>
            <span className="text-cozy-dim ml-1 font-normal">followers</span>
          </div>
          <div>
            <strong className="text-cozy-text text-sm font-bold">{currentUser.stats?.following || 295}</strong>
            <span className="text-cozy-dim ml-1 font-normal">following</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-cozy-divider/70 pb-1">
        {['Posts', 'Replies', 'About'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === tab
                ? 'bg-cozy-text text-white shadow-cozy-sm'
                : 'text-cozy-muted hover:text-cozy-text hover:bg-cozy-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT: POSTS */}
      {activeTab === 'Posts' && (
        <div className="space-y-3">
          {userPosts.length === 0 ? (
            <div className="py-10 text-center text-xs text-cozy-muted">
              You haven't posted anything to the Lounge yet.
            </div>
          ) : (
            userPosts.map((post) => (
              <article
                key={post.id}
                className="bg-cozy-surface rounded-2xl p-5 shadow-cozy-sm border border-cozy-border/50"
              >
                <div className="flex items-center justify-between text-xs text-cozy-dim mb-2">
                  <span className="font-semibold text-cozy-text">#{post.category?.toLowerCase() || 'general'}</span>
                  <span>{post.timestamp}</span>
                </div>

                <p className="text-sm text-cozy-text leading-relaxed font-normal">
                  {post.content}
                </p>

                {post.image && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-cozy-border">
                    <img src={post.image} alt="Upload" className="w-full h-48 object-cover" />
                  </div>
                )}

                <div className="mt-3.5 pt-2.5 border-t border-cozy-divider/60 flex items-center gap-4 text-xs text-cozy-dim">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1 font-medium hover:text-cozy-text"
                  >
                    <Heart className={`w-3.5 h-3.5 ${post.hasLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    <span>{post.likes}</span>
                  </button>
                  <button
                    onClick={() => setActiveCommentPostId(post.id)}
                    className="flex items-center gap-1 font-medium hover:text-cozy-text"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{post.commentsCount} replies</span>
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      )}

      {/* TAB CONTENT: REPLIES */}
      {activeTab === 'Replies' && (
        <div className="space-y-3">
          {sampleReplies.map((reply) => (
            <div
              key={reply.id}
              className="bg-cozy-surface rounded-2xl p-4 shadow-cozy-sm border border-cozy-border/50 text-xs"
            >
              <p className="text-cozy-dim mb-1 font-medium">
                In reply to <strong className="text-cozy-text">@{reply.targetPostAuthor}</strong>:
              </p>
              <div className="p-2.5 rounded-xl bg-cozy-subtle/50 text-cozy-text font-normal leading-relaxed">
                "{reply.replyText}"
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-cozy-dim">
                <span>{reply.timestamp}</span>
                <span>{reply.likes} upvotes</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT: ABOUT */}
      {activeTab === 'About' && (
        <div className="space-y-4">
          <div className="bg-cozy-surface rounded-2xl p-5 shadow-cozy-sm border border-cozy-border/50 text-xs space-y-3">
            <h3 className="font-bold text-sm text-cozy-text">Campus Details</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 rounded-xl bg-cozy-subtle/50">
                <span className="text-cozy-dim block">College</span>
                <span className="font-semibold text-cozy-text">{currentUser.college}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-cozy-subtle/50">
                <span className="text-cozy-dim block">Department</span>
                <span className="font-semibold text-cozy-text">{currentUser.department}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-cozy-subtle/50">
                <span className="text-cozy-dim block">Year</span>
                <span className="font-semibold text-cozy-text">{currentUser.year}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-cozy-subtle/50">
                <span className="text-cozy-dim block">Student ID</span>
                <span className="font-semibold text-cozy-text">APX-2023-CS-084</span>
              </div>
            </div>
          </div>

          <div className="bg-cozy-surface rounded-2xl p-5 shadow-cozy-sm border border-cozy-border/50 text-xs space-y-3">
            <h3 className="font-bold text-sm text-cozy-text">Clubs Joined</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {userCommunities.map((club) => (
                <div key={club.id} className="p-2.5 rounded-xl bg-cozy-subtle/50 flex items-center gap-2.5">
                  <img src={club.cover} alt={club.name} className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <span className="font-semibold text-cozy-text block">{club.name}</span>
                    <span className="text-[10px] text-cozy-dim">{club.memberCount} members</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
