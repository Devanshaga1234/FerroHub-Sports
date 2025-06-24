import { CoachingPlan, Location } from '../types';

export const coachingPlans: CoachingPlan[] = [
  {
    id: 'plan-1',
    name: 'Beginner Fundamentals',
    coach: {
      name: 'Priya Sharma',
      experience: '5+ years coaching experience',
      image: 'https://images.pexels.com/photos/5012071/pexels-photo-5012071.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      image: 'https://images.pexels.com/photos/6944045/pexels-photo-6944045.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      image: 'https://images.pexels.com/photos/8172943/pexels-photo-8172943.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      image: 'https://images.pexels.com/photos/8937840/pexels-photo-8937840.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    address: '123 Millers Road, Vasanth Nagar, Bengaluru 560052',
    phone: '+91 80 2234 5678',
    email: 'millersroad@ferrohub.com',
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    },
    images: [
      'https://images.pexels.com/photos/8007203/pexels-photo-8007203.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8937699/pexels-photo-8937699.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    directions: 'Located on Millers Road, near Cantonment Railway Station. Parking available on-site.',
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
      open: '06:00',
      close: '23:00'
    }
  },
  {
    id: 'budigere-cross',
    name: 'FerroHub Budigere Cross',
    address: '456 Old Madras Road, Budigere Cross, Bengaluru 560049',
    phone: '+91 80 3345 6789',
    email: 'budigere@ferrohub.com',
    coordinates: {
      lat: 13.0827,
      lng: 77.7064
    },
    images: [
      'https://images.pexels.com/photos/8007359/pexels-photo-8007359.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8172930/pexels-photo-8172930.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    directions: 'On Old Madras Road, near Budigere Cross. Easy access from Whitefield and surrounding areas.',
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