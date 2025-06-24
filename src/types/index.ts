export interface Court {
  id: string;
  name: string;
  location: 'millers-road' | 'budigere-cross';
  description: string;
  amenities: string[];
}

export interface TimeSlot {
  id: string;
  courtId: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  isBlocked: boolean;
  price: number;
}

export interface Booking {
  id: string;
  userId: string;
  courtId: string;
  timeSlotId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'timeout';
  bookingStatus: 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  paymentId?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  isAdmin: boolean;
  createdAt: string;
}

export interface CoachingPlan {
  id: string;
  name: string;
  coach: {
    name: string;
    experience: string;
    image: string;
    bio: string;
  };
  type: '1-on-1' | 'group' | 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  sessionsPerWeek: number;
  pricePerMonth: number;
  pricePerSession: number;
  features: string[];
  schedule: {
    days: string[];
    times: string[];
  };
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  directions: string;
  amenities: string[];
  hours: {
    open: string;
    close: string;
  };
}