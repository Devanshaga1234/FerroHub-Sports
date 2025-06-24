import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';
import { format } from 'date-fns';

export const BookingPage: React.FC = () => {
  const { courtId, slotId } = useParams();
  const navigate = useNavigate();
  const { courts, generateTimeSlots, bookSlot } = useBooking();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cash'>('upi');
  const [loading, setLoading] = useState(false);

  if (!courtId || !slotId || !user) {
    navigate('/courts');
    return null;
  }

  const court = courts.find(c => c.id === courtId);
  const [, , date, time] = slotId.split('-');
  const slotDate = new Date(date);
  const timeSlots = generateTimeSlots(courtId, slotDate);
  const slot = timeSlots.find(s => s.id === slotId);

  if (!court || !slot) {
    navigate('/courts');
    return null;
  }

  const handleBooking = async () => {
    setLoading(true);
    try {
      const bookingData = {
        userId: user.id,
        courtId: court.id,
        timeSlotId: slot.id,
        date: slot.date,
        startTime: slot.startTime,
        endTime: slot.endTime,
        totalAmount: slot.price,
        paymentStatus: paymentMethod === 'cash' ? 'pending' as const : 'paid' as const,
        bookingStatus: 'confirmed' as const,
        paymentId: paymentMethod !== 'cash' ? `pay_${Date.now()}` : undefined
      };

      await bookSlot(bookingData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI Payment',
      description: 'Pay instantly using UPI apps like GPay, PhonePe, Paytm',
      icon: Smartphone,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 'card',
      name: 'Card Payment',
      description: 'Credit/Debit card, Net Banking, Wallets',
      icon: CreditCard,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 'cash',
      name: 'Pay at Court',
      description: 'Pay cash when you arrive at the court',
      icon: Banknote,
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Details */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">{court.name}</p>
                  <p className="text-sm text-gray-600">{court.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">{format(slotDate, 'EEEE, MMMM d, yyyy')}</p>
                  <p className="text-sm text-gray-600">Selected date</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">{slot.startTime} - {slot.endTime}</p>
                  <p className="text-sm text-gray-600">30 minutes session</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Court Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {court.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-md"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
            
            <div className="space-y-4 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === method.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod(method.id as any)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${method.color}`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{method.name}</h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      paymentMethod === method.id
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {paymentMethod === method.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Court booking (30 min)</span>
                <span className="font-medium text-gray-900">₹{slot.price}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Platform fee</span>
                <span className="font-medium text-gray-900">₹0</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-orange-600">₹{slot.price}</span>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <button
              onClick={handleBooking}
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-orange-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Processing...' : `Confirm Booking - ₹${slot.price}`}
            </button>

            {paymentMethod === 'cash' && (
              <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Note:</strong> Please arrive 10 minutes early to complete payment at the reception.
                  Your booking will be confirmed upon payment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};