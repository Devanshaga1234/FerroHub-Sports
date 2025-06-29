import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Wifi,
  PowerIcon as ShowerIcon,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { locations } from '../data/mockData';

export const Locations: React.FC = () => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'free parking':
      case 'ample parking':
      case 'parking':
        return Car;
      case 'changing rooms':
        return ShowerIcon;
      case 'wifi':
        return Wifi;
      default:
        return Star;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Locations</h1>
          <motion.h1
            className="w-17 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            style={{ transformOrigin: 'left' }}
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore premium rooftop and indoor courts across Bengaluru, built for every kind of player.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="relative group rounded-3xl overflow-hidden bg-white shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={location.images[0]}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{location.name}</h2>
                <div className="flex items-center text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-gray-500 ml-2 text-sm">4.8 • 124 reviews</span>
                </div>

                {/* Contact */}
                <div className="space-y-4 mb-6 text-sm sm:text-base text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p>{location.address}</p>
                      {/* <a
                        href={location.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-emerald-600 underline hover:text-emerald-800 mt-1 inline-block"
                      >
                        View on Maps
                      </a> */}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <p>{location.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <p>{location.hours.open} – {location.hours.close} (7 days)</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {location.amenities.map((amenity, idx) => {
                      const Icon = getAmenityIcon(amenity);
                      return (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Icon className="w-4 h-4 text-emerald-600" />
                          {amenity}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/courts"
                    className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-emerald-700 transition"
                  >
                    Book a Court
                  </a>
                  <a
                    href={location.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-emerald-600 text-emerald-600 py-3 px-6 rounded-xl text-center font-semibold hover:bg-emerald-50 transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
