import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, ArrowRight, CalendarIcon } from 'lucide-react';
import { format, isBefore, isSameDay } from 'date-fns';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-custom.css'; 

type LocationOption = 'millers-road' | 'budigere-cross' | 'all';

export const MyCourt: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationOption | null>(null);

  const { courts, getAvailableSlots } = useBooking();
  const { user } = useAuth();

  const locations = [
    { id: 'millers-road', name: 'Millers Road' },
    { id: 'budigere-cross', name: 'Budigere Cross' },
  ];

  const filteredCourts = selectedLocation
    ? courts.filter((court) => selectedLocation === 'all' || court.location === selectedLocation)
    : [];

  const formatTimeSlots = (slots: any[]) => {
    const daySlots = slots.filter(slot => {
      const [hour, minutes] = slot.startTime.split(':').map(Number);
      return hour >= 6 && (hour < 17 || (hour === 17 && minutes <= 30));
    });
    const nightSlots = slots.filter(slot => !daySlots.includes(slot));
    return { daySlots, nightSlots };
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 py-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Book Your Court</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose your preferred date and location to see available slots.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm p-6 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Date</label>

              <div className="flex justify-center w-full">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  inline
                  calendarClassName="custom-calendar"
                />
              </div>

              {selectedDate && (
                <div className="mt-4 flex items-center justify-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 text-orange-800 dark:text-orange-200 text-sm rounded-md px-4 py-2 shadow-sm w-fit mx-auto">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Selected: <span className="font-semibold">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
                  </span>
                </div>
              )}
            </div>
            {/* Location Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Select Location</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id as LocationOption)}
                    className={`p-3 rounded-lg text-center font-medium transition-all ${
                      selectedLocation === location.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courts and Slots */}
        {selectedDate && selectedLocation ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourts.map((court) => {
              const availableSlots = getAvailableSlots(court.id, selectedDate);
              const { daySlots, nightSlots } = formatTimeSlots(availableSlots);

              return (
                <div key={court.id} className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-neutral-800">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{court.name}</h3>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.8</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{court.description}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
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
                    {[{ title: '🌞 Daytime Slots (6:00 AM – 5:30 PM)', slots: daySlots },
                      { title: '🌙 Nighttime Slots (6:00 PM – 5:30 AM)', slots: nightSlots }]
                      .filter(({ slots }) => slots.length > 0)
                      .map(({ title, slots }) => (
                        <div key={title}>
                          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{title}</h5>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {slots.map((slot) => {
                              const isPast =
                                isSameDay(selectedDate, new Date()) &&
                                isBefore(new Date(`${format(selectedDate, 'yyyy-MM-dd')}T${slot.startTime}`), new Date());

                              return (
                                <Link
                                  key={slot.id}
                                  to={isPast ? '#' : `/booking/${court.id}/${slot.id}`}
                                  className={`p-2 text-center text-sm font-medium rounded-lg transition-colors ${
                                    isPast
                                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-600'
                                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900 dark:hover:bg-emerald-800 dark:text-emerald-300'
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
                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Ready to book?</p>
                            <p className="text-xs text-blue-700 dark:text-blue-300">Sign in to reserve your slot</p>
                          </div>
                          <Link
                            to="/login"
                            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-white font-medium text-sm"
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
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg font-medium mt-16">
            Please select a date and location to view available courts.
          </p>
        )}
      </div>
    </div>
  );
};
