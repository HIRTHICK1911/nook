import React, { useState } from 'react';
import { X, Send, Heart, MessageSquare } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function CommentDrawer() {
  const {
    activeCommentPostId,
    setActiveCommentPostId,
    posts,
    addComment,
    toggleLike,
    currentUser
  } = useApp();

  const [commentText, setCommentText] = useState('');

  if (!activeCommentPostId) return null;

  const post = posts.find((p) => p.id === activeCommentPostId);

  if (!post) {
    setActiveCommentPostId(null);
    return null;
  }

  const handleSendComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    addComment(post.id, commentText);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-cozy-text/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-lg max-h-[85vh] bg-cozy-surface rounded-2xl shadow-cozy-float border border-cozy-border flex flex-col overflow-hidden animate-in zoom-in-95 duration-150 text-cozy-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-cozy-divider">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-nook-500" />
            <h3 className="font-bold text-sm text-cozy-text">Lounge Discussion</h3>
          </div>
          <button
            onClick={() => setActiveCommentPostId(null)}
            className="p-1 rounded-lg text-cozy-dim hover:text-cozy-text hover:bg-cozy-subtle transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Main Post Card preview */}
          <div className="bg-cozy-subtle/50 p-4 rounded-xl border border-cozy-border/60">
            <div className="flex items-center gap-2.5 mb-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover border border-cozy-border"
              />
              <div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-bold text-cozy-text">{post.author.name}</span>
                  <span className="text-cozy-dim">·</span>
                  <span className="text-cozy-dim">{post.timestamp}</span>
                </div>
                <span className="text-[11px] text-cozy-muted">{post.author.department}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cozy-text leading-relaxed font-normal">{post.content}</p>

            {post.image && (
              <div className="mt-2.5 rounded-lg overflow-hidden max-h-48 border border-cozy-border">
                <img src={post.image} alt="Post media" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="mt-3 flex items-center gap-4 text-xs text-cozy-dim pt-2 border-t border-cozy-divider/60">
              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center gap-1 transition-colors ${
                  post.hasLiked ? 'text-red-500 font-bold' : 'hover:text-cozy-text'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${post.hasLiked ? 'fill-current' : ''}`} />
                <span>{post.likes}</span>
              </button>
              <div className="flex items-center gap-1 text-nook-600 font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{post.commentsCount} replies</span>
              </div>
            </div>
          </div>

          {/* Comments Thread */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-cozy-dim px-1">
              Replies ({post.comments?.length || 0})
            </h4>

            {(!post.comments || post.comments.length === 0) ? (
              <div className="text-center py-6 text-cozy-dim text-xs italic">
                No replies yet. Be the first to chime in! 💬
              </div>
            ) : (
              post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex gap-2.5 p-3 rounded-xl bg-white border border-cozy-border/60"
                >
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-cozy-text">
                          {comment.author.name}
                        </span>
                        <span className="text-[10px] text-cozy-dim">· {comment.timestamp}</span>
                      </div>
                      <span className="text-[10px] text-cozy-dim truncate max-w-[100px]">
                        {comment.author.department}
                      </span>
                    </div>
                    <p className="text-xs text-cozy-text mt-1 leading-relaxed font-normal">
                      {comment.text}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Input Footer */}
        <form onSubmit={handleSendComment} className="p-3 bg-cozy-subtle/50 border-t border-cozy-divider/70">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Reply casually..."
              className="flex-1 text-xs sm:text-sm bg-white rounded-xl px-3.5 py-2 border border-cozy-border/60 focus:outline-none focus:border-nook-400 text-cozy-text placeholder-cozy-dim"
              autoFocus
            />
            <button
              type="submit"
              disabled={!commentText.trim()}
              className="p-2 bg-nook-500 hover:bg-nook-600 disabled:opacity-40 text-white rounded-xl shadow-cozy-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
