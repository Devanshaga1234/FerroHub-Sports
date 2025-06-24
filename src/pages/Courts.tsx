import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { format, addDays, startOfDay } from 'date-fns';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export const Courts: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState<'millers-road' | 'budigere-cross' | 'all'>('all');
  const { courts, getAvailableSlots } = useBooking();
  const { user } = useAuth();

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'millers-road', name: 'Millers Road' },
    { id: 'budigere-cross', name: 'Budigere Cross' }
  ];

  const filteredCourts = selectedLocation === 'all' 
    ? courts 
    : courts.filter(court => court.location === selectedLocation);

  const getNextSevenDays = () => {
    return Array.from({ length: 7 }, (_, i) => addDays(startOfDay(new Date()), i));
  };

  const formatTimeSlots = (slots: any[]) => {
    const morningSlots = slots.filter(slot => {
      const hour = parseInt(slot.startTime.split(':')[0]);
      return hour >= 6 && hour < 12;
    });
    
    const afternoonSlots = slots.filter(slot => {
      const hour = parseInt(slot.startTime.split(':')[0]);
      return hour >= 12 && hour < 18;
    });
    
    const eveningSlots = slots.filter(slot => {
      const hour = parseInt(slot.startTime.split(':')[0]);
      return hour >= 18 && hour < 23;
    });

    return { morningSlots, afternoonSlots, eveningSlots };
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Court</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred date, location, and time slot. All slots are 30 minutes for ₹750.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Date</label>
              <div className="grid grid-cols-7 gap-2">
                {getNextSevenDays().map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-xs font-medium">{format(date, 'EEE')}</div>
                    <div className="text-lg font-bold">{format(date, 'd')}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Location</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id as any)}
                    className={`p-3 rounded-lg text-center font-medium transition-all ${
                      selectedLocation === location.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourts.map((court) => {
            const availableSlots = getAvailableSlots(court.id, selectedDate);
            const { morningSlots, afternoonSlots, eveningSlots } = formatTimeSlots(availableSlots);

            return (
              <div key={court.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Court Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{court.name}</h3>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-gray-700">4.8</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{court.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{court.location === 'millers-road' ? 'Millers Road' : 'Budigere Cross'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>₹750 per 30min</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {court.amenities.slice(0, 3).map((amenity, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md"
                      >
                        {amenity}
                      </span>
                    ))}
                    {court.amenities.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                        +{court.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      Available Slots - {format(selectedDate, 'MMM d, yyyy')}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {availableSlots.length} slots available
                    </span>
                  </div>

                  {availableSlots.length === 0 ? (
                    <div className="text-center py-8">
                      <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No slots available for this date</p>
                      <p className="text-sm text-gray-400 mt-1">Try selecting a different date</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Morning Slots */}
                      {morningSlots.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-3">Morning (6:00 - 12:00)</h5>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {morningSlots.map((slot) => (
                              <Link
                                key={slot.id}
                                to={user ? `/booking/${court.id}/${slot.id}` : '/login'}
                                className="p-2 text-center text-sm font-medium rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                              >
                                {slot.startTime}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Afternoon Slots */}
                      {afternoonSlots.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-3">Afternoon (12:00 - 18:00)</h5>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {afternoonSlots.map((slot) => (
                              <Link
                                key={slot.id}
                                to={user ? `/booking/${court.id}/${slot.id}` : '/login'}
                                className="p-2 text-center text-sm font-medium rounded-lg bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors"
                              >
                                {slot.startTime}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Evening Slots */}
                      {eveningSlots.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-3">Evening (18:00 - 23:00)</h5>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {eveningSlots.map((slot) => (
                              <Link
                                key={slot.id}
                                to={user ? `/booking/${court.id}/${slot.id}` : '/login'}
                                className="p-2 text-center text-sm font-medium rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                              >
                                {slot.startTime}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {!user && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-blue-900">Ready to book?</p>
                          <p className="text-xs text-blue-700">Sign in to reserve your slot</p>
                        </div>
                        <Link
                          to="/login"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          <span>Login</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};