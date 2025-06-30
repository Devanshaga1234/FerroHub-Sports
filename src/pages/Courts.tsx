import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, LayoutGrid } from 'lucide-react';

const locations = [
  {
    name: 'Millers Road',
    courts: 3,
    image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
    address: 'Millers Road, Bangalore',
    link: 'https://hudle.in/venues/ferrohub-sports-millers/131566',
  },
  {
    name: 'Budigere Cross',
    courts: 3,
    image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
    address: 'Budigere Cross, Bangalore',
    link: 'https://playo.co/venues/bangalore/ferrohub-sports-budigere-cross-budigere-cross-bengaluru',
  },
];

export const Courts: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from 6 premium courts across 2 prime locations in Bangalore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <img
                src={location.image}
                alt={`${location.name} courts`}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {location.address}
                </div>
                <div className="flex items-center text-gray-700 font-semibold">
                  <LayoutGrid className="w-5 h-5 mr-2 text-orange-500" />
                  {location.courts} Available Courts
                </div>
                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
