import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/40 via-[#3b82f6]/20 to-[#f97316]/40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="px-3 py-1 mb-6 inline-block bg-white/10 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🏆 Bengaluru's #1 Pickleball Destination
          </motion.div>

          <motion.h1
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Play Pickleball{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Under the Stars
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-neutral-300 max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience premium rooftop pickleball courts with stunning city views.
            Book your slot for just ₹750 per 30 minutes.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/courts"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Court</span>
            </Link>
            <Link
              to="/membership"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>View Membership Plans</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            alt="Placeholder for Pickleball court"
            className="object-cover w-full h-full"
          />
        </div>
          {/* Floating Rating Card */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl flex items-center space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">4.8/5 Rating</div>
              <div className="text-sm text-gray-600">500+ Happy Players</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
