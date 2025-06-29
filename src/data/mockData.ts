import { CoachingPlan, Location } from '../types';

export const coachingPlans: CoachingPlan[] = [
  {
    id: 'plan-1',
    name: 'Beginner Fundamentals',
    coach: {
      name: 'Priya Sharma',
      experience: '5+ years coaching experience',
      image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
      bio: 'Certified pickleball instructor with expertise in teaching beginners. Former state-level badminton player.'
    },
    type: 'beginner',
    duration: '1 month',
    sessionsPerWeek: 2,
    pricePerMonth: 4500,
    pricePerSession: 300,
    features: [
      'Basic rules and scoring',
      'Paddle grip and stance',
      'Serve techniques',
      'Basic shots (forehand, backhand)',
      'Court positioning',
      'Small group sessions (max 6 players)'
    ],
    schedule: {
      days: ['Tuesday', 'Thursday'],
      times: ['7:00 AM', '6:00 PM']
    }
  },
  {
    id: 'plan-2',
    name: 'Intermediate Skills',
    coach: {
      name: 'Rajesh Kumar',
      experience: '8+ years professional coaching',
      image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
      bio: 'Professional pickleball coach and tournament player. Specializes in strategy and advanced techniques.'
    },
    type: 'intermediate',
    duration: '1 month',
    sessionsPerWeek: 3,
    pricePerMonth: 6000,
    pricePerSession: 400,
    features: [
      'Advanced shot techniques',
      'Dinking strategies',
      'Third shot drops',
      'Net play improvement',
      'Game strategy and tactics',
      'Video analysis sessions'
    ],
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      times: ['8:00 AM', '7:00 PM']
    }
  },
  {
    id: 'plan-3',
    name: 'Private 1-on-1 Training',
    coach: {
      name: 'Anita Patel',
      experience: '10+ years elite coaching',
      image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
      bio: 'Former national-level player turned coach. Specializes in personalized training programs and tournament preparation.'
    },
    type: '1-on-1',
    duration: 'Flexible',
    sessionsPerWeek: 2,
    pricePerMonth: 12000,
    pricePerSession: 800,
    features: [
      'Personalized training plan',
      'One-on-one attention',
      'Flexible scheduling',
      'Tournament preparation',
      'Fitness and conditioning',
      'Mental game coaching'
    ],
    schedule: {
      days: ['Flexible'],
      times: ['By appointment']
    }
  },
  {
    id: 'plan-4',
    name: 'Competitive Group Training',
    coach: {
      name: 'Vikram Singh',
      experience: '7+ years tournament coaching',
      image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
      bio: 'Tournament coach with multiple championship wins. Focuses on competitive play and advanced strategies.'
    },
    type: 'advanced',
    duration: '1 month',
    sessionsPerWeek: 4,
    pricePerMonth: 8000,
    pricePerSession: 500,
    features: [
      'Advanced tournament strategies',
      'Competitive match play',
      'Partner coordination',
      'Pressure situation training',
      'Performance analysis',
      'Mental toughness training'
    ],
    schedule: {
      days: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
      times: ['9:00 AM', '8:00 PM']
    }
  }
];

export const locations: Location[] = [
  {
    id: 'millers-road',
    name: 'FerroHub Millers Road',
    address: '16/A, Millers Rd, above Advaith Hyundai, Kaverappa Layout, Vasanth Nagar, Bengaluru, Karnataka 560052, India',
    phone: '+91 80 2234 5678',
    email: 'millersroad@ferrohub.com',
    directions: 'https://www.google.com/maps/place/FerroHub+Sports+Millers+Pickleball/@12.993193,77.5910259,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae171b5b3139e5:0x2764bc37057755a8!8m2!3d12.9931878!4d77.5958968!16s%2Fg%2F11x7ppw11q?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D', // or a shortened maps link
    images: [
      'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
    ],
    amenities: [
      '2 Premium Courts',
      'LED Flood Lighting',
      'Changing Rooms',
      'Equipment Rental',
      'Refreshment Area',
      'Free Parking',
      'Rooftop Views',
      'Sound System'
    ],
    hours: {
      open: '6:00am',
      close: '12:00am'
    }
  },
  {
    id: 'budigere-cross',
    name: 'FerroHub Budigere Cross',
    address: '112, Budigere Cross, Cheemasandra, Bengaluru, Karnataka 560049, India',
    phone: '+91 80 3345 6789',
    email: 'budigere@ferrohub.com',
    directions: 'https://www.google.com/maps/place/FerroHub+Sports+Budigere/@13.0580117,77.7417969,18z/data=!4m10!1m2!2m1!1sBudigere+ferrohub+!3m6!1s0x3bae118085f966a7:0xfaa20c035bf58613!8m2!3d13.0580152!4d77.7430526!15sChFCdWRpZ2VyZSBmZXJyb2h1YpIBDnNwb3J0c19jb21wbGV4qgFmCg0vZy8xMWx3ODg1NGM5Cg0vZy8xMXgyY21nN3pqEAEqDCIIZmVycm9odWIoADIfEAEiGzH6nqL7ft32ubs_qtbh999hpfob6oTigNUIwzIVEAIiEWJ1ZGlnZXJlIGZlcnJvaHVi4AEA!16s%2Fg%2F11x2cmg7zj?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D', // sample location
    images: [
      'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
    ],
    amenities: [
      '2 Standard Courts',
      'LED Lighting',
      'AC Waiting Area',
      'Equipment Rental',
      'Ample Parking',
      'Changing Rooms',
      'Garden Views',
      'Refreshments'
    ],
    hours: {
      open: '06:00',
      close: '23:00'
    }
  }
];
