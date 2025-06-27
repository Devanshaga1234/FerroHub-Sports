import React from 'react';
import { Link } from 'react-router-dom';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Booking Confirmed!</h1>
        <p className="text-gray-700 mb-6">Your booking has been successfully recorded. You’ll also get a confirmation SMS or email if applicable.</p>
        <Link
          to="/courts"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Book Another Slot
        </Link>
      </div>
    </div>
  );
};
