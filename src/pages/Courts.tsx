import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, ArrowRight, CalendarIcon } from 'lucide-react';
import { format, isBefore } from 'date-fns';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  const formatTimeSlots = (slots: any[]) => {
    const daySlots = slots.filter(slot => {
      const hour = parseInt(slot.startTime.split(':')[0]);
      const minutes = parseInt(slot.startTime.split(':')[1]);
      return hour >= 6 && (hour < 17 || (hour === 17 && minutes <= 30));
    });

    const nightSlots = slots.filter(slot => !daySlots.includes(slot));
    return { daySlots, nightSlots };
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
            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm w-full text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholderText="Select a date"
                />
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <div className="mt-3 flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-md px-4 py-2 shadow-sm">
                <Calendar className="w-4 h-4" />
                <span>
                  You’ve selected: <span className="font-semibold">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
                </span>
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
            const { daySlots, nightSlots } = formatTimeSlots(availableSlots);
            return (
              <div key={court.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
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
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      Available Slots - {format(selectedDate, 'MMM d, yyyy')}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {availableSlots.length} slots available
                    </span>
                  </div>
                  {[
                    { title: 'Daytime Slots 🌞 (6:00 AM - 5:30 PM)', slots: daySlots },
                    { title: 'Nighttime Slots 🌙 (6:00 PM - 5:30 AM)', slots: nightSlots }
                  ]
                  .filter(({ slots }) => slots.length > 0)
                  .map(({ title, slots }) => (
                    <div key={title}>
                      <h5 className="text-sm font-medium text-gray-700 mb-3">{title}</h5>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {slots.map((slot) => {
                          const isPast =
                            format(selectedDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') &&
                            isBefore(new Date(`${format(selectedDate, 'yyyy-MM-dd')}T${slot.startTime}`), new Date());

                          return (
                            <Link
                              key={slot.id}
                              to={isPast ? '#' : `/booking/${court.id}/${slot.id}`}
                              className={`p-2 text-center text-sm font-medium rounded-lg transition-colors ${
                                isPast
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              }`}
                              onClick={(e) => isPast && e.preventDefault()}
                            >
                              {slot.startTime}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
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
