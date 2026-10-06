export const initialCurrentUser = {
  id: 'user_vihz',
  name: 'Vihz',
  username: 'vihz_dev',
  email: 'vihz@campus.edu',
  college: 'Apex Institute of Technology',
  department: 'Computer Science & Engineering',
  year: '3rd Year',
  bio: 'Building cool web stuff & experimenting with AI models. Coffee fanatic, hackathon regular, and always down for late-night campus walks. ☕️🚀',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  banner: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=80',
  stats: {
    posts: 14,
    followers: 482,
    following: 295,
  },
  interests: ['Coding', 'Design', 'Hackathons', 'Gaming', 'Coffee', 'Basketball'],
  joinedCommunities: ['comm_1', 'comm_2', 'comm_6']
};

export const initialClasses = [
  {
    id: 'c1',
    code: 'CS302',
    name: 'Operating Systems Lab',
    time: '10:00 AM - 12:00 PM',
    room: 'Turing Block, Lab 3',
    professor: 'Dr. Mukherjee',
    color: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    id: 'c2',
    code: 'CS306',
    name: 'Database Engineering',
    time: '02:00 PM - 03:15 PM',
    room: 'Block B, Hall 204',
    professor: 'Prof. Ananya Sen',
    color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
  },
  {
    id: 'c3',
    code: 'CS310',
    name: 'Modern Web Architectures',
    time: '04:00 PM - 05:30 PM',
    room: 'Main Seminar Hall',
    professor: 'Prof. David Vance',
    color: 'bg-blue-50 text-blue-800 border-blue-200'
  }
];

export const initialTasks = [
  {
    id: 't1',
    title: 'Distributed Systems Assignment 3',
    due: 'Tonight, 11:59 PM',
    course: 'CS302',
    urgent: true
  },
  {
    id: 't2',
    title: 'Submit HackCampus team roster',
    due: 'Tomorrow, 5:00 PM',
    course: 'Clubs',
    urgent: false
  }
];

export const initialTrendingDiscussions = [
  {
    id: 'td1',
    topic: 'HackCampus 2026',
    query: 'hackathon',
    title: 'Anyone going to the hackathon this weekend?',
    tag: 'Clubs',
    replies: 42,
    reactions: 128,
    author: 'Aarav Mehta'
  },
  {
    id: 'td2',
    topic: 'Campus Facilities',
    query: 'library',
    title: 'PSA: Central Library 3rd floor AC is finally fixed & quiet pods reopened 🙌',
    tag: 'General',
    replies: 28,
    reactions: 94,
    author: 'Neha Raman'
  },
  {
    id: 'td3',
    topic: 'Academics',
    query: 'cheat sheet',
    title: 'Is Prof Sharma’s Distributed Systems quiz open book or should we panic?',
    tag: 'Study',
    replies: 65,
    reactions: 152,
    author: 'Rohan Deshmukh'
  }
];

export const initialEvents = [
  {
    id: 'ev_1',
    title: 'HackCampus 2026: 36h Annual Hackathon',
    category: 'Hackathons',
    date: 'Sat, Oct 11',
    time: '09:00 AM onwards',
    location: 'Innovation Hub & Design Arena',
    organizer: 'Coding Club & ACM Student Chapter',
    interestedCount: 342,
    isInterested: true,
    badge: 'Premier',
    badgeColor: 'bg-nook-50 text-nook-600 border-nook-200',
    description: '36 hours of continuous building, hardware tracks, mentor sessions, pizza at midnight, and $10k in prize bounties.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ev_2',
    title: 'Sunset Acoustic Jam & Open Mic',
    category: 'Cultural',
    date: 'Tonight, Oct 6',
    time: '06:30 PM - 08:30 PM',
    location: 'Student Quad Amphitheater',
    organizer: 'Campus Music Collective',
    interestedCount: 184,
    isInterested: true,
    badge: 'Happening Today',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Unplugged sessions as the sun goes down. Acoustic guitars, vocals, cajón, and warm chai provided.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ev_3',
    title: 'Inter-Department 3v3 Basketball Tournament',
    category: 'Sports',
    date: 'Wed, Oct 8',
    time: '05:00 PM',
    location: 'Sports Complex Court 1',
    organizer: 'Athletics Council',
    interestedCount: 96,
    isInterested: false,
    badge: 'Sports',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Annual autumn 3v3 showdown. Open bracket for all undergraduate departments. Trophies & medals.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ev_4',
    title: 'Hands-on Workshop: Building AI Agents from Scratch',
    category: 'Workshops',
    date: 'Thu, Oct 9',
    time: '03:30 PM - 05:30 PM',
    location: 'Turing Seminar Hall & Online Stream',
    organizer: 'Developer Student Club',
    interestedCount: 215,
    isInterested: false,
    badge: 'Workshop',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: 'Learn tool-calling, autonomous execution loops, and prompt chaining with live code walkthroughs.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ev_5',
    title: 'Autumn Fest & Campus Food Truck Rodeo',
    category: 'Cultural',
    date: 'Fri, Oct 17',
    time: '05:00 PM - 10:00 PM',
    location: 'Central Lawn & East Walkway',
    organizer: 'Student Activities Council',
    interestedCount: 520,
    isInterested: false,
    badge: 'Campus Fest',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    description: '8 local food trucks, live student band lineups, pop-up vintage thrift stalls, and light installations.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ev_6',
    title: 'Placement & Resume Sprint: Peer Mock Interviews',
    category: 'Clubs',
    date: 'Mon, Oct 13',
    time: '02:00 PM - 04:30 PM',
    location: 'Auditorium Annex & Zoom',
    organizer: 'Placement Prep Guild',
    interestedCount: 178,
    isInterested: false,
    badge: 'Career',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    description: '1-on-1 mock technical and behavioral rounds with final-year students and alumni placed at Tier-1 companies.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
  }
];

export const initialCommunities = [
  {
    id: 'comm_1',
    name: 'Coding Club',
    tagline: 'Code, debug, build open source campus tools.',
    category: 'Tech',
    memberCount: 1240,
    icon: 'Terminal',
    accent: 'bg-blue-50 text-blue-600',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    description: 'Weekly algorithm nights, open-source sprints, and collaboration on campus web and mobile apps.'
  },
  {
    id: 'comm_2',
    name: 'Photography Society',
    tagline: 'Golden hour walks, film cameras, darkroom sessions.',
    category: 'Creative',
    memberCount: 680,
    icon: 'Camera',
    accent: 'bg-amber-50 text-amber-600',
    cover: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
    description: 'Capturing campus life, photowalks across the city, gear sharing, and our semester photo zine.'
  },
  {
    id: 'comm_3',
    name: 'Gaming & Esports',
    tagline: 'Valorant scrims, FIFA brackets, casual Smash.',
    category: 'Gaming',
    memberCount: 950,
    icon: 'Gamepad2',
    accent: 'bg-purple-50 text-purple-600',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    description: 'Campus LAN parties, intramural collegiate leagues, and Friday night party games in the common lounge.'
  },
  {
    id: 'comm_4',
    name: 'Music Collective',
    tagline: 'Jam sessions, indie acoustics, beatmaking.',
    category: 'Creative',
    memberCount: 540,
    icon: 'Music',
    accent: 'bg-rose-50 text-rose-600',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
    description: 'Rehearsal space bookings, open mics, original track collabs, and live performances at campus events.'
  },
  {
    id: 'comm_5',
    name: 'Basketball Crew',
    tagline: 'Pickup games, intramural tournament runs, skills drills.',
    category: 'Sports',
    memberCount: 410,
    icon: 'Dribbble',
    accent: 'bg-emerald-50 text-emerald-600',
    cover: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=80',
    description: 'Daily 5:30 PM pickup runs on court 1, team selections, and departmental championships.'
  },
  {
    id: 'comm_6',
    name: 'Placement Prep Guild',
    tagline: 'DSA streaks, system design, resume teardowns.',
    category: 'Career',
    memberCount: 1890,
    icon: 'Briefcase',
    accent: 'bg-nook-50 text-nook-600',
    cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
    description: 'LeetCode daily challenge discussions, system design breakdowns, and alumni referral opportunities.'
  },
  {
    id: 'comm_7',
    name: 'Design & UI Guild',
    tagline: 'Figma wizards, poster design, UX research.',
    category: 'Design',
    memberCount: 470,
    icon: 'Palette',
    accent: 'bg-cyan-50 text-cyan-600',
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80',
    description: 'Weekly design teardowns, UI challenges, portfolio reviews, and branding collabs with clubs.'
  },
  {
    id: 'comm_8',
    name: 'Book & Philosophy Club',
    tagline: 'Sci-fi reads, book swaps, relaxed Sunday chai.',
    category: 'Lifestyle',
    memberCount: 310,
    icon: 'BookOpen',
    accent: 'bg-warm-200 text-warm-700',
    cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
    description: 'Monthly book reads, cozy reading corners in the quad lawn, and intellectual debate evenings.'
  }
];

export const initialPosts = [
  {
    id: 'post_1',
    author: {
      name: 'Vihz',
      username: 'vihz_dev',
      department: 'Computer Science',
      year: '3rd Year',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: true
    },
    timestamp: '25m ago',
    category: 'Clubs',
    content: 'Looking for 1 frontend/UI dev who knows React or Tailwind for HackCampus this weekend! 💻 We already have 2 backend & ML devs and a validated project around campus food rescue & dining hall redistribution. Aiming for the Sustainability track bounties! Drop a reply or DM me.',
    image: null,
    likes: 24,
    hasLiked: false,
    commentsCount: 7,
    comments: [
      {
        id: 'c_1',
        author: {
          name: 'Priya Nambiar',
          department: 'Design / IT',
          year: '2nd Year',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '18m ago',
        text: 'Hey Vihz! I do design systems in Figma and frontend with Tailwind. Would love to join if the spot is still open!'
      },
      {
        id: 'c_2',
        author: {
          name: 'Kabir Verma',
          department: 'ECE',
          year: '3rd Year',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '12m ago',
        text: 'Love the campus food rescue idea. Dining Hall B wastes so much good bakery stuff every evening.'
      }
    ]
  },
  {
    id: 'post_2',
    author: {
      name: 'Aditi Sharma',
      username: 'aditi_snaps',
      department: 'Electronics & Comm',
      year: '2nd Year',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: false
    },
    timestamp: '2h ago',
    category: 'Clubs',
    content: 'Golden hour hit the central quad so perfectly today. Photography Club is organizing a casual campus photowalk tomorrow at 5:15 PM! Meet near the old amphitheater steps. Phone cameras, vintage digicams, DSLRs all welcome 📸✨',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&auto=format&fit=crop&q=80',
    likes: 89,
    hasLiked: true,
    commentsCount: 14,
    comments: [
      {
        id: 'c_3',
        author: {
          name: 'Arjun Das',
          department: 'Mechanical',
          year: '4th Year',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '1h ago',
        text: 'This lighting looks unreal. Will definitely bring my dad’s old Minolta 35mm!'
      }
    ]
  },
  {
    id: 'post_3',
    author: {
      name: 'Rohan Deshmukh',
      username: 'rohan_d',
      department: 'Computer Science',
      year: '3rd Year',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: false
    },
    timestamp: '3h ago',
    category: 'Study',
    content: 'Whoever left the neat handwritten formula summary sheet for Distributed Systems on Table 14 in the library 2nd floor... you are an absolute saint. May both sides of your pillow stay crisp and cool forever 🙏📚',
    image: null,
    likes: 142,
    hasLiked: false,
    commentsCount: 31,
    comments: [
      {
        id: 'c_4',
        author: {
          name: 'Ananya Roy',
          department: 'CS',
          year: '3rd Year',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '2h ago',
        text: 'Haha that was me and Sneha! We photocopied copies for anyone stressed out about Chapter 4 consensus algorithms 😂'
      }
    ]
  },
  {
    id: 'post_4',
    author: {
      name: 'Kabir Verma',
      username: 'kabir_v',
      department: 'ECE',
      year: '3rd Year',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: false
    },
    timestamp: '4h ago',
    category: 'Gaming',
    content: 'Need +2 for Valorant Premier tournament qualifiers tonight at 9:30 PM! Diamond/Ascendant rank preferred. We have a private booth booked in the Gaming lounge with zero packet loss. Who’s online? 🎮🎯',
    image: null,
    likes: 56,
    hasLiked: false,
    commentsCount: 12,
    comments: [
      {
        id: 'c_7',
        author: {
          name: 'Sneha Chawla',
          department: 'Data Science',
          year: '3rd Year',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '3h ago',
        text: 'Count me in! Playing smokes/Omen. Hit me up on campus Discord.'
      }
    ]
  },
  {
    id: 'post_5',
    author: {
      name: 'Samir Joshi',
      username: 'samir_j',
      department: 'Information Science',
      year: '4th Year',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: false
    },
    timestamp: '6h ago',
    category: 'Random',
    content: 'Campus cat "Kernel" has decided my laptop bag is his personal luxury hotel right as I need to pack up for my OS presentation. I am legally and morally prohibited from moving him. Wish me luck with Professor Mukherjee.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
    likes: 218,
    hasLiked: true,
    commentsCount: 26,
    comments: [
      {
        id: 'c_6',
        author: {
          name: 'Meera Rao',
          department: 'CS',
          year: '4th Year',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '5h ago',
        text: 'Show this photo to Mukherjee, even he cannot penalize Kernel’s authority 🐾'
      }
    ]
  },
  {
    id: 'post_6',
    author: {
      name: 'Tanvi Patel',
      username: 'tanvi_p',
      department: 'Biotechnology',
      year: '1st Year',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: false
    },
    timestamp: '7h ago',
    category: 'General',
    content: 'Hot take: The iced vanilla chai at the North Quad kiosk beats the overpriced cafe in the Student Union by a mile. Plus they don’t charge extra for oat milk. What’s your go-to campus coffee/tea order? ☕️',
    image: null,
    likes: 74,
    hasLiked: false,
    commentsCount: 19,
    comments: [
      {
        id: 'c_8',
        author: {
          name: 'Arjun Das',
          department: 'Mechanical',
          year: '4th Year',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '6h ago',
        text: '100% agreed. And their grilled cheese sandwich at 4 PM is straight therapy.'
      }
    ]
  },
  {
    id: 'post_7',
    author: {
      name: 'Priya Nambiar',
      username: 'priya_ux',
      department: 'Design',
      year: '2nd Year',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: false
    },
    timestamp: '8h ago',
    category: 'Music',
    content: 'Making a collaborative playlist for tonight’s Sunset Acoustic Jam! Drop your favorite indie/folk/alt tracks or acoustic covers in the replies and we’ll queue them during the break between sets 🎶🎸',
    image: null,
    likes: 63,
    hasLiked: true,
    commentsCount: 15,
    comments: [
      {
        id: 'c_9',
        author: {
          name: 'Vihz',
          department: 'CS',
          year: '3rd Year',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '7h ago',
        text: 'Anything by Boy Pablo or Gregory Alan Isakov for peak quad sunset vibes!'
      }
    ]
  },
  {
    id: 'post_8',
    author: {
      name: 'Devraj Kapoor',
      username: 'devraj_k',
      department: 'Civil Eng',
      year: '2nd Year',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
      isCurrentUser: false
    },
    timestamp: '9h ago',
    category: 'Sports',
    content: 'Running 5v5 pickup basketball runs on Court 1 today starting at 5:30 PM sharp. High energy, friendly vibes, sneakers on. Need 3 more to make 3 full teams with rotation. Who’s lacing up? 🏀🔥',
    image: null,
    likes: 47,
    hasLiked: false,
    commentsCount: 8,
    comments: [
      {
        id: 'c_10',
        author: {
          name: 'Kabir Verma',
          department: 'ECE',
          year: '3rd Year',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
        },
        timestamp: '8h ago',
        text: 'Bringing two friends after our circuit analysis lab ends at 5:15 PM!'
      }
    ]
  }
];

export const initialStudents = [
  {
    id: 'st_1',
    name: 'Aarav Mehta',
    username: 'aarav_m',
    department: 'Computer Science',
    year: '4th Year',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    bio: 'ACM Chapter Lead. Full-stack TypeScript & Go. Hackathon mentor.',
    interests: ['Coding', 'Hackathons', 'Startups'],
    isFollowing: true
  },
  {
    id: 'st_2',
    name: 'Priya Nambiar',
    username: 'priya_ux',
    department: 'Design & Human-Computer Interaction',
    year: '2nd Year',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
    bio: 'Crafting pixel-perfect web experiences. Design lead at Nook campus chapter.',
    interests: ['Design', 'Music', 'Photography'],
    isFollowing: false
  },
  {
    id: 'st_3',
    name: 'Sneha Chawla',
    username: 'sneha_ai',
    department: 'Data Science & AI',
    year: '3rd Year',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    bio: 'Working on LLM fine-tuning and campus autonomous robotics.',
    interests: ['Coding', 'AI/ML', 'Gaming'],
    isFollowing: true
  },
  {
    id: 'st_4',
    name: 'Kabir Verma',
    username: 'kabir_v',
    department: 'Electronics & Comm',
    year: '3rd Year',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    bio: 'IoT hardware hacker, drone builder, and varsity basketball guard.',
    interests: ['Sports', 'Coding', 'Gaming'],
    isFollowing: false
  }
];

export const availableInterests = [
  'Coding',
  'Music',
  'Gaming',
  'Sports',
  'Photography',
  'Design',
  'Entrepreneurship',
  'Movies',
  'Travel',
  'AI/ML',
  'Robotics',
  'Literature'
];

export const loungeCategories = [
  'Trending',
  'General',
  'Study',
  'Clubs',
  'Gaming',
  'Music',
  'Sports',
  'Random'
];
