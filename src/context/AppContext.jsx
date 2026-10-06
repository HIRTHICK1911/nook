import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initialCurrentUser,
  initialClasses,
  initialTasks,
  initialTrendingDiscussions,
  initialEvents,
  initialCommunities,
  initialPosts,
  initialStudents,
  loungeCategories
} from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation view: 'home' | 'lounge' | 'explore' | 'events' | 'profile' | 'landing' | 'login' | 'onboarding'
  const [currentView, setCurrentView] = useState(() => {
    const saved = localStorage.getItem('nook_current_view');
    if (saved === 'feed') return 'lounge';
    return saved || 'home';
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('nook_current_user');
    return saved ? JSON.parse(saved) : initialCurrentUser;
  });

  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('nook_posts');
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('nook_events');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [communities, setCommunities] = useState(() => {
    const saved = localStorage.getItem('nook_communities');
    return saved ? JSON.parse(saved) : initialCommunities;
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('nook_students');
    return saved ? JSON.parse(saved) : initialStudents;
  });

  const [classes, setClasses] = useState(initialClasses);
  const [tasks, setTasks] = useState(initialTasks);
  const [trendingDiscussions] = useState(initialTrendingDiscussions);

  // Modals & UI overlays
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const [activeCommentPostId, setActiveCommentPostId] = useState(null);
  const [toast, setToast] = useState(null);

  // Search filter query across Explore / global
  const [searchQuery, setSearchQuery] = useState('');

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('nook_current_view', currentView);
  }, [currentView]);

  useEffect(() => {
    localStorage.setItem('nook_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('nook_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('nook_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('nook_communities', JSON.stringify(communities));
  }, [communities]);

  useEffect(() => {
    localStorage.setItem('nook_students', JSON.stringify(students));
  }, [students]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const addPost = ({ content, category = 'General', image = null }) => {
    if (!content.trim() && !image) return;

    const newPost = {
      id: `post_${Date.now()}`,
      author: {
        name: currentUser.name,
        username: currentUser.username,
        department: currentUser.department,
        year: currentUser.year,
        avatar: currentUser.avatar,
        isCurrentUser: true,
      },
      timestamp: 'Just now',
      category,
      content,
      image,
      likes: 0,
      hasLiked: false,
      commentsCount: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setCurrentUser(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        posts: prev.stats.posts + 1
      }
    }));
    showToast('Posted to the Lounge! ☕️');
  };

  const toggleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(p => {
        if (p.id === postId) {
          const wasLiked = p.hasLiked;
          return {
            ...p,
            hasLiked: !wasLiked,
            likes: wasLiked ? Math.max(0, p.likes - 1) : p.likes + 1
          };
        }
        return p;
      })
    );
  };

  const addComment = (postId, text) => {
    if (!text.trim()) return;

    const newComment = {
      id: `comm_${Date.now()}`,
      author: {
        name: currentUser.name,
        department: currentUser.department,
        year: currentUser.year,
        avatar: currentUser.avatar
      },
      timestamp: 'Just now',
      text
    };

    setPosts(prevPosts =>
      prevPosts.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: [...(p.comments || []), newComment]
          };
        }
        return p;
      })
    );
    showToast('Comment added 💬');
  };

  const toggleEventInterested = (eventId) => {
    setEvents(prevEvents =>
      prevEvents.map(ev => {
        if (ev.id === eventId) {
          const wasInterested = ev.isInterested;
          const nextState = !wasInterested;
          showToast(nextState ? `Saved "${ev.title}" to your calendar 📅` : `Removed from interested`);
          return {
            ...ev,
            isInterested: nextState,
            interestedCount: nextState ? ev.interestedCount + 1 : Math.max(0, ev.interestedCount - 1)
          };
        }
        return ev;
      })
    );
  };

  const toggleJoinCommunity = (commId) => {
    const isJoined = currentUser.joinedCommunities?.includes(commId);
    let updatedJoined = [];

    if (isJoined) {
      updatedJoined = currentUser.joinedCommunities.filter(id => id !== commId);
      showToast('Left community');
    } else {
      updatedJoined = [...(currentUser.joinedCommunities || []), commId];
      showToast('Joined community! Welcome 🎉');
    }

    setCurrentUser(prev => ({
      ...prev,
      joinedCommunities: updatedJoined
    }));

    setCommunities(prevComm =>
      prevComm.map(c => {
        if (c.id === commId) {
          return {
            ...c,
            memberCount: isJoined ? c.memberCount - 1 : c.memberCount + 1
          };
        }
        return c;
      })
    );
  };

  const toggleFollowStudent = (studentId) => {
    setStudents(prev =>
      prev.map(st => {
        if (st.id === studentId) {
          const nextFollow = !st.isFollowing;
          setCurrentUser(curr => ({
            ...curr,
            stats: {
              ...curr.stats,
              following: nextFollow ? curr.stats.following + 1 : Math.max(0, curr.stats.following - 1)
            }
          }));
          showToast(nextFollow ? `Following ${st.name}` : `Unfollowed ${st.name}`);
          return { ...st, isFollowing: nextFollow };
        }
        return st;
      })
    );
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
    showToast('Task marked as completed! 🎯');
  };

  const loginUser = ({ email, name = 'Vihz' }) => {
    setCurrentUser(prev => ({
      ...prev,
      email: email || prev.email,
      name: name || prev.name
    }));
    setCurrentView('home');
    showToast(`Welcome back, ${name || 'Vihz'}! 👋`);
  };

  const completeOnboarding = (profileData) => {
    setCurrentUser(prev => ({
      ...prev,
      ...profileData
    }));
    setCurrentView('home');
    showToast('Welcome to your Nook! 🚀');
  };

  const resetAllData = () => {
    localStorage.clear();
    setCurrentUser(initialCurrentUser);
    setPosts(initialPosts);
    setEvents(initialEvents);
    setCommunities(initialCommunities);
    setStudents(initialStudents);
    setClasses(initialClasses);
    setTasks(initialTasks);
    setCurrentView('home');
    showToast('Reset to default campus dataset');
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        currentUser,
        setCurrentUser,
        posts,
        addPost,
        toggleLike,
        addComment,
        events,
        toggleEventInterested,
        communities,
        toggleJoinCommunity,
        students,
        toggleFollowStudent,
        classes,
        tasks,
        toggleTaskComplete,
        trendingDiscussions,
        createPostModalOpen,
        setCreatePostModalOpen,
        activeCommentPostId,
        setActiveCommentPostId,
        toast,
        showToast,
        searchQuery,
        setSearchQuery,
        loginUser,
        completeOnboarding,
        resetAllData,
        loungeCategories
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
