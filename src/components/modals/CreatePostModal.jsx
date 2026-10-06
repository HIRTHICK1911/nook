import React, { useState } from 'react';
import { X, Image, Coffee, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function CreatePostModal() {
  const {
    createPostModalOpen,
    setCreatePostModalOpen,
    currentUser,
    addPost,
    loungeCategories
  } = useApp();

  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);

  if (!createPostModalOpen) return null;

  const categories = (loungeCategories || [
    'General',
    'Study',
    'Clubs',
    'Gaming',
    'Music',
    'Sports',
    'Random'
  ]).filter(c => c !== 'Trending');

  const sampleImages = [
    { label: 'Campus Quad', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&auto=format&fit=crop&q=80' },
    { label: 'Hackathon Desk', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80' },
    { label: 'Campus Cat', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80' },
    { label: 'Acoustic Jam', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() && !selectedImage) return;

    addPost({
      content,
      category,
      image: selectedImage
    });

    setContent('');
    setSelectedImage(null);
    setShowImagePicker(false);
    setCreatePostModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-cozy-text/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-lg bg-cozy-surface rounded-2xl shadow-cozy-float border border-cozy-border overflow-hidden scale-100 animate-in zoom-in-95 duration-150 text-cozy-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-cozy-divider">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-nook-500" />
            <h3 className="font-bold text-sm text-cozy-text">Post to Lounge</h3>
          </div>
          <button
            onClick={() => setCreatePostModalOpen(false)}
            className="p-1 rounded-lg text-cozy-dim hover:text-cozy-text hover:bg-cozy-subtle transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5">
          {/* User info */}
          <div className="flex items-center gap-2.5 mb-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-9 h-9 rounded-full object-cover border border-cozy-border shadow-cozy-sm"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-cozy-text">{currentUser.name}</span>
                <span className="text-[10px] text-cozy-dim">({currentUser.department})</span>
              </div>
              <span className="text-[11px] text-cozy-muted">{currentUser.year}</span>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            placeholder="What's on your mind?..."
            className="w-full resize-none bg-cozy-subtle/50 p-3.5 rounded-xl text-cozy-text placeholder-cozy-dim border-none focus:outline-none focus:ring-1 focus:ring-nook-300 text-xs sm:text-sm font-normal leading-relaxed"
            autoFocus
          />

          {/* Selected Image Preview */}
          {selectedImage && (
            <div className="mt-2.5 relative rounded-xl overflow-hidden border border-cozy-border group">
              <img
                src={selectedImage}
                alt="Upload preview"
                className="w-full h-36 object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-1 bg-cozy-text/80 hover:bg-cozy-text text-white rounded-full transition-colors text-xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Sample photo picker */}
          {showImagePicker && !selectedImage && (
            <div className="mt-2.5 p-2.5 bg-cozy-subtle rounded-xl text-xs">
              <p className="font-semibold text-cozy-muted mb-2">Attach a campus visual:</p>
              <div className="grid grid-cols-4 gap-2">
                {sampleImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setSelectedImage(img.url);
                      setShowImagePicker(false);
                    }}
                    className="relative rounded-lg overflow-hidden aspect-video border border-cozy-border hover:border-nook-500 transition-all group"
                  >
                    <img src={img.url} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <span className="absolute inset-0 bg-black/40 flex items-end p-1 text-[8px] text-white font-medium">
                      {img.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Channel Selector Chips */}
          <div className="mt-3.5">
            <span className="text-[11px] font-bold text-cozy-muted mb-1.5 block uppercase tracking-wider">Channel:</span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`text-xs px-3 py-1 rounded-lg font-medium transition-all ${
                    category === cat
                      ? 'bg-cozy-text text-white shadow-cozy-sm'
                      : 'bg-cozy-subtle text-cozy-muted hover:bg-cozy-hover'
                  }`}
                >
                  #{cat.toLowerCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="mt-5 pt-3.5 border-t border-cozy-divider flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowImagePicker(!showImagePicker)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-cozy-muted hover:text-cozy-text hover:bg-cozy-subtle text-xs transition-colors"
            >
              <Image className="w-3.5 h-3.5" />
              <span>{selectedImage ? 'Change photo' : 'Add photo'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCreatePostModalOpen(false)}
                className="px-3 py-1.5 rounded-xl text-xs font-medium text-cozy-muted hover:text-cozy-text transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!content.trim() && !selectedImage}
                className="px-4 py-2 rounded-xl bg-nook-500 hover:bg-nook-600 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-semibold shadow-cozy-sm transition-all"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
