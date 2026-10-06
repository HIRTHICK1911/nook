import React, { useState } from 'react';
import {
  Image,
  Send,
  Heart,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Bookmark,
  Coffee,
  Sparkles,
  Flame,
  Copy,
  BookOpen,
  Users,
  Gamepad2,
  Music,
  Dribbble,
  Smile,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function LoungeScreen() {
  const {
    currentUser,
    posts,
    addPost,
    toggleLike,
    setActiveCommentPostId,
    showToast,
    loungeCategories
  } = useApp();

  // Composer state
  const [inlineContent, setInlineContent] = useState('');
  const [inlineCategory, setInlineCategory] = useState('General');
  const [inlineImage, setInlineImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Trending');
  const [openMenuPostId, setOpenMenuPostId] = useState(null);

  // Playful extra emoji reacts per post
  const [postReactions, setPostReactions] = useState({});

  const categories = loungeCategories || [
    'Trending',
    'General',
    'Study',
    'Clubs',
    'Gaming',
    'Music',
    'Sports',
    'Random'
  ];

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    if (!inlineContent.trim() && !inlineImage) return;

    addPost({
      content: inlineContent,
      category: inlineCategory,
      image: inlineImage
    });

    setInlineContent('');
    setInlineImage(null);
  };

  const handleShare = (post) => {
    navigator.clipboard?.writeText?.(window.location.href);
    showToast(`Copied post by ${post.author.name} to clipboard! 📋`);
  };

  const handleEmojiReact = (postId, emoji) => {
    setPostReactions(prev => {
      const current = prev[postId] || {};
      const count = current[emoji] || 0;
      return {
        ...prev,
        [postId]: {
          ...current,
          [emoji]: count + 1
        }
      };
    });
    showToast(`Reacted with ${emoji}! ✨`);
  };

  // Filter posts based on selected category
  const filteredPosts = [...posts].filter(post => {
    if (selectedCategory === 'Trending') return true;
    return post.category?.toLowerCase() === selectedCategory.toLowerCase();
  }).sort((a, b) => {
    if (selectedCategory === 'Trending') {
      const scoreA = (a.likes || 0) * 2 + (a.commentsCount || 0) * 3;
      const scoreB = (b.likes || 0) * 2 + (b.commentsCount || 0) * 3;
      return scoreB - scoreA;
    }
    return 0;
  });

  return (
    <div className="max-w-2xl mx-auto space-y-7 pb-16 animate-in fade-in duration-200">
      
      {/* LOUNGE HEADER */}
      <div className="pt-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-cozy-text tracking-tight flex items-center gap-2">
          <span>yo, what's happening?</span>
          <span className="text-xl">👀</span>
        </h1>
        <p className="text-sm text-cozy-muted mt-1 font-normal">
          The campus lounge. Drop in, ask questions, or just see what everyone's up to.
        </p>
      </div>

      {/* CASUAL POST COMPOSER */}
      <div className="bg-cozy-surface rounded-2xl p-4 sm:p-5 shadow-cozy-sm border border-cozy-border/50">
        <form onSubmit={handleInlineSubmit}>
          <div className="flex gap-3.5">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover shrink-0 border border-cozy-border/80 shadow-cozy-sm"
            />
            <div className="flex-1 min-w-0">
              <textarea
                value={inlineContent}
                onChange={(e) => setInlineContent(e.target.value)}
                rows={2}
                placeholder="What's on your mind?..."
                className="w-full resize-none bg-cozy-subtle/50 hover:bg-cozy-subtle/70 focus:bg-white text-sm text-cozy-text placeholder-cozy-dim p-3.5 rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-nook-300 transition-all font-normal leading-relaxed"
              />

              {inlineImage && (
                <div className="relative mt-2.5 rounded-xl overflow-hidden border border-cozy-border group">
                  <img src={inlineImage} alt="Attachment" className="w-full h-36 object-cover" />
                  <button
                    type="button"
                    onClick={() => setInlineImage(null)}
                    className="absolute top-2 right-2 bg-cozy-text/80 hover:bg-cozy-text text-white rounded-full p-1 text-xs transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Action Toolbar */}
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-cozy-divider/60">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setInlineImage(prev => prev ? null : 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&auto=format&fit=crop&q=80');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      inlineImage
                        ? 'bg-nook-50 text-nook-600'
                        : 'text-cozy-muted hover:text-cozy-text hover:bg-cozy-subtle'
                    }`}
                  >
                    <Image className="w-3.5 h-3.5" />
                    <span>{inlineImage ? 'Photo attached' : 'Add photo'}</span>
                  </button>

                  {/* Channel Tag Dropdown */}
                  <div className="flex items-center gap-1 text-xs text-cozy-muted">
                    <span className="text-cozy-dim font-medium">in</span>
                    <select
                      value={inlineCategory}
                      onChange={(e) => setInlineCategory(e.target.value)}
                      className="bg-transparent text-cozy-text font-semibold border-none focus:ring-0 cursor-pointer p-0 text-xs"
                    >
                      {categories.filter(c => c !== 'Trending').map((cat) => (
                        <option key={cat} value={cat}>#{cat.toLowerCase()}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!inlineContent.trim() && !inlineImage}
                  className="px-4 py-2 rounded-xl bg-nook-500 hover:bg-nook-600 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-semibold shadow-cozy-sm transition-all"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* LOUNGE CATEGORY FILTER PILLS */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                isSelected
                  ? 'bg-cozy-text text-white shadow-cozy-sm'
                  : 'bg-cozy-surface hover:bg-cozy-hover text-cozy-muted border border-cozy-border/60'
              }`}
            >
              {cat === 'Trending' ? '🔥 Trending' : `#${cat.toLowerCase()}`}
            </button>
          );
        })}
      </div>

      {/* NATURAL CONVERSATIONS LIST */}
      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="py-12 text-center text-cozy-muted">
            <Coffee className="w-8 h-8 text-cozy-dim mx-auto mb-2 opacity-60" />
            <p className="font-semibold text-sm text-cozy-text">The #{selectedCategory.toLowerCase()} corner is quiet right now.</p>
            <p className="text-xs text-cozy-muted mt-1">Say something using the composer above!</p>
          </div>
        ) : (
          filteredPosts.map((post) => {
            const extraReacts = postReactions[post.id] || {};
            return (
              <article
                key={post.id}
                className="bg-cozy-surface/90 hover:bg-cozy-surface rounded-2xl p-5 shadow-cozy-sm border border-cozy-border/50 hover:border-cozy-border transition-all duration-150"
              >
                {/* Post Author & Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-cozy-border shadow-cozy-sm"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-cozy-text hover:text-nook-600 cursor-pointer">
                          {post.author.name}
                        </span>
                        {post.author.isCurrentUser && (
                          <span className="text-[10px] px-1.5 py-0.2 bg-nook-50 text-nook-600 rounded font-semibold">
                            You
                          </span>
                        )}
                        <span className="text-xs text-cozy-dim">·</span>
                        <span className="text-xs text-cozy-dim">
                          {post.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-cozy-muted">
                        {post.author.department} · {post.author.year}
                      </p>
                    </div>
                  </div>

                  {/* Channel tag & More */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-cozy-subtle text-cozy-muted">
                      #{post.category?.toLowerCase() || 'general'}
                    </span>

                    <button
                      onClick={() => setOpenMenuPostId(openMenuPostId === post.id ? null : post.id)}
                      className="p-1 rounded-lg text-cozy-dim hover:text-cozy-text hover:bg-cozy-subtle transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>

                    {openMenuPostId === post.id && (
                      <div 
                        className="absolute right-6 mt-8 w-36 bg-white rounded-xl shadow-cozy-md border border-cozy-border p-1 z-20"
                        onMouseLeave={() => setOpenMenuPostId(null)}
                      >
                        <button
                          onClick={() => {
                            showToast('Saved to bookmarks 📌');
                            setOpenMenuPostId(null);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-cozy-text hover:bg-cozy-subtle flex items-center gap-2"
                        >
                          <Bookmark className="w-3.5 h-3.5 text-cozy-muted" />
                          <span>Bookmark</span>
                        </button>
                        <button
                          onClick={() => {
                            handleShare(post);
                            setOpenMenuPostId(null);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-cozy-text hover:bg-cozy-subtle flex items-center gap-2"
                        >
                          <Copy className="w-3.5 h-3.5 text-cozy-muted" />
                          <span>Copy link</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-sm text-cozy-text leading-relaxed whitespace-pre-line font-normal">
                  {post.content}
                </p>

                {/* Optional Photo */}
                {post.image && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-cozy-border/60">
                    <img
                      src={post.image}
                      alt="Lounge attachment"
                      className="w-full h-56 sm:h-72 object-cover hover:scale-[1.01] transition-transform duration-200"
                    />
                  </div>
                )}

                {/* Playful Emoji Reaction Bar */}
                <div className="mt-3.5 pt-2.5 border-t border-cozy-divider/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                  {/* Left: Like & quick emojis */}
                  <div className="flex items-center gap-1.5">
                    {/* Primary Like Heart */}
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        post.hasLiked
                          ? 'text-red-600 bg-red-50'
                          : 'text-cozy-muted hover:text-cozy-text hover:bg-cozy-subtle'
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${post.hasLiked ? 'fill-current' : ''}`}
                      />
                      <span>{post.likes}</span>
                    </button>

                    {/* Quick play emojis */}
                    {['🔥', '☕️', '😂', '💯'].map((emoji) => {
                      const count = extraReacts[emoji] || 0;
                      return (
                        <button
                          key={emoji}
                          onClick={() => handleEmojiReact(post.id, emoji)}
                          className={`px-2 py-0.5 rounded-lg text-xs transition-all flex items-center gap-1 ${
                            count > 0 ? 'bg-amber-50 border border-amber-200/80 font-bold' : 'hover:bg-cozy-subtle text-cozy-muted opacity-80 hover:opacity-100'
                          }`}
                        >
                          <span>{emoji}</span>
                          {count > 0 && <span className="text-[10px] text-cozy-text">{count}</span>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right: Reply button & share */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCommentPostId(post.id)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-cozy-muted hover:text-cozy-text hover:bg-cozy-subtle transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{post.commentsCount > 0 ? `${post.commentsCount} replies` : 'Reply'}</span>
                    </button>

                    <button
                      onClick={() => handleShare(post)}
                      className="p-1 rounded-lg text-cozy-dim hover:text-cozy-text hover:bg-cozy-subtle transition-colors"
                      title="Share link"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

    </div>
  );
}
