import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Booking, TimeSlot, Court } from '../types';
import { format, addMinutes, startOfDay, addDays } from 'date-fns';

interface BookingContextType {
  bookings: Booking[];
  timeSlots: TimeSlot[];
  courts: Court[];
  getAvailableSlots: (courtId: string, date: Date) => TimeSlot[];
  bookSlot: (booking: Omit<Booking, 'id' | 'createdAt'>) => Promise<string>;
  cancelBooking: (bookingId: string) => Promise<void>;
  getUserBookings: (userId: string) => Booking[];
  generateTimeSlots: (courtId: string, date: Date) => TimeSlot[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  const courts: Court[] = [
    {
      id: 'court-1-millers',
      name: 'Court 1 - Millers Road',
      location: 'millers-road',
      description: 'Premium rooftop court with city skyline views',
      amenities: ['LED Lighting', 'Sound System', 'Changing Room', 'Water Station']
    },
    {
      id: 'court-2-millers',
      name: 'Court 2 - Millers Road',
      location: 'millers-road',
      description: 'Professional court with tournament-grade surface',
      amenities: ['LED Lighting', 'Sound System', 'Changing Room', 'Water Station']
    },
    {
      id: 'court-1-budigere',
      name: 'Court 1 - Budigere Cross',
      location: 'budigere-cross',
      description: 'Spacious court with garden views',
      amenities: ['LED Lighting', 'Parking', 'Changing Room', 'Refreshments']
    },
    {
      id: 'court-2-budigere',
      name: 'Court 2 - Budigere Cross',
      location: 'budigere-cross',
      description: 'Modern court with air conditioning in waiting area',
      amenities: ['LED Lighting', 'AC Waiting Area', 'Parking', 'Changing Room']
    }
  ];

  const generateTimeSlots = (courtId: string, date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = 0; // 12 AM
    const endHour = 23.5; // 11:30 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const startTime = new Date(date);
        startTime.setHours(hour, minute, 0, 0);
        
        const endTime = addMinutes(startTime, 30);
        
        const slotId = `${courtId}-${format(date, 'yyyy-MM-dd')}-${format(startTime, 'HH:mm')}`;
        
        const isBooked = bookings.some(booking => 
          booking.courtId === courtId &&
          booking.date === format(date, 'yyyy-MM-dd') &&
          booking.startTime === format(startTime, 'HH:mm') &&
          booking.bookingStatus !== 'cancelled'
        );

        slots.push({
          id: slotId,
          courtId,
          date: format(date, 'yyyy-MM-dd'),
          startTime: format(startTime, 'HH:mm'),
          endTime: format(endTime, 'HH:mm'),
          isBooked,
          isBlocked: false,
          price: 750
        });
      }
    }
    
    return slots;
  };

  const getAvailableSlots = (courtId: string, date: Date): TimeSlot[] => {
    return generateTimeSlots(courtId, date).filter(slot => !slot.isBooked && !slot.isBlocked);
  };

  const bookSlot = async (bookingData: Omit<Booking, 'id' | 'createdAt'>): Promise<string> => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    setBookings(prev => [...prev, newBooking]);
    return newBooking.id;
  };

  const cancelBooking = async (bookingId: string): Promise<void> => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, bookingStatus: 'cancelled' as const }
          : booking
      )
    );
  };

  const getUserBookings = (userId: string): Booking[] => {
    return bookings.filter(booking => booking.userId === userId);
  };

  return (
    <BookingContext.Provider value={{
      bookings,
      timeSlots,
      courts,
      getAvailableSlots,
      bookSlot,
      cancelBooking,
      getUserBookings,
      generateTimeSlots
    }}>
      {children}
    </BookingContext.Provider>
  );
};