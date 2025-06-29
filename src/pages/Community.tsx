import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    title: 'Weekend Vibes',
    src: 'https://images.unsplash.com/photo-1693142517898-2f986215e412?fm=jpg&q=60&w=3000',
  },
  {
    title: 'Paint + Pickleball',
    src: 'https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?fm=jpg&q=60&w=3000',
  },
  {
    title: 'Night Play',
    src: 'https://media.self.com/photos/648a027d2ce966b1da9a1611/16:9/w_8100,h_4536,c_limit/pickleball.jpeg',
  },
  { title: 'Your Event', src: '' },
  { title: 'Add More!', src: '' },
  { title: 'Ferro Moments', src: '' },
];

export const Community: React.FC = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Community in Action
        </motion.h1>
        <motion.div
          className="w-18 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Tournaments. Laughter. Rooftop lights. Here’s a glimpse into FerroHub life.
        </motion.p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-64 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center italic text-sm text-neutral-500 dark:text-neutral-400">
                Add Image
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="https://instagram.com/ferrohubsports"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-orange-600 to-blue-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Follow @ferrohubsports on Instagram →
        </a>
      </motion.div>
    </main>
  );
};
