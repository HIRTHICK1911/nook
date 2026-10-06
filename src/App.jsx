import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import TopHeader from './components/layout/TopHeader';
import CreatePostModal from './components/modals/CreatePostModal';
import CommentDrawer from './components/modals/CommentDrawer';
import Toast from './components/ui/Toast';

// Screens
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import LoungeScreen from './screens/LoungeScreen';
import ExploreScreen from './screens/ExploreScreen';
import EventsScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';

function AppContent() {
  const { currentView } = useApp();

  // Full-page standalone flows
  if (currentView === 'landing') {
    return (
      <div className="relative min-h-screen bg-cozy-bg text-cozy-text">
        <TopHeader />
        <LandingScreen />
        <Toast />
      </div>
    );
  }

  if (currentView === 'login') {
    return (
      <div className="relative min-h-screen bg-cozy-bg text-cozy-text">
        <TopHeader />
        <LoginScreen />
        <Toast />
      </div>
    );
  }

  if (currentView === 'onboarding') {
    return (
      <div className="relative min-h-screen bg-cozy-bg text-cozy-text">
        <TopHeader />
        <OnboardingScreen />
        <Toast />
      </div>
    );
  }

  // Authenticated campus app layout
  return (
    <div className="min-h-screen bg-cozy-bg flex flex-col md:flex-row text-cozy-text">
      {/* Desktop Left Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <TopHeader />

        {/* View Content */}
        <main className="flex-1 px-4 sm:px-8 py-6 max-w-5xl w-full mx-auto">
          {currentView === 'home' && <HomeScreen />}
          {(currentView === 'lounge' || currentView === 'feed') && <LoungeScreen />}
          {currentView === 'explore' && <ExploreScreen />}
          {currentView === 'events' && <EventsScreen />}
          {currentView === 'profile' && <ProfileScreen />}
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileNav />
      </div>

      {/* Global Modals & Feedback */}
      <CreatePostModal />
      <CommentDrawer />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
