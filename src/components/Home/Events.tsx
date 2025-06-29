import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Paint + Pickleball',
    img: 'https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?fm=jpg&q=60&w=3000',
  },
  {
    title: 'PickleBrawl Finals',
    img: 'https://images.unsplash.com/photo-1693142517898-2f986215e412?fm=jpg&q=60&w=3000',
  },
  {
    title: 'Weekend Vibes',
    img: 'https://media.self.com/photos/648a027d2ce966b1da9a1611/16:9/w_8100,h_4536,c_limit/pickleball.jpeg',
  },
  {
    title: 'Your Event Title Here',
    img: '', // Placeholder slot 1
  },
  {
    title: 'Another Event',
    img: '', // Placeholder slot 2
  },
  {
    title: 'Add More Images',
    img: '', // Placeholder slot 3
  },
];

export const Events: React.FC = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Events & Community Moments
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the vibrant life of FerroHub through photos from tournaments, workshops, and late-night games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {event.img ? (
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-60 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 italic text-sm">
                  Add Image
                </div>
              )}
              <div className="p-4 bg-white dark:bg-neutral-900">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {event.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
