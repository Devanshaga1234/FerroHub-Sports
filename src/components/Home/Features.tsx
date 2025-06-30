import React from 'react';
import { Clock, Shield, Trophy, Users, MapPin, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: '17 Hours Daily Access',
    description: 'Play morning and night every day with extended hours for your convenience.',
    color: 'text-orange-600 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/30',
  },
  {
    icon: Shield,
    title: 'Premium Court Surface',
    description: 'Professional-grade courts with optimal bounce and safety features.',
    color: 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30',
  },
  {
    icon: Trophy,
    title: 'Tournament Ready',
    description: 'Official size courts suitable for both casual play and competitive tournaments.',
    color: 'text-orange-600 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/30',
  },
  {
    icon: Users,
    title: 'Expert Coaching',
    description: 'Learn from certified instructors with personalized training programs.',
    color: 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Conveniently located in Millers Road and Budigere Cross with easy access.',
    color: 'text-orange-600 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/30',
  },
  {
    icon: Star,
    title: 'Rooftop Experience',
    description: 'Unique rooftop courts with stunning city skyline and garden views.',
    color: 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: [0.42, 0, 1, 1],
    },
  }),
};

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose FerroHub Sports?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience pickleball like never before with our premium facilities, expert coaching, and unmatched playing environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2"
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Playing?</h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of players who have made FerroHub their pickleball home. Book your first session today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/FerroHub-Sports/courts"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition-transform"
              >
                Book Your Court
              </a>
              <a
                href="/FerroHub-Sports/locations"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 hover:scale-105 transition-transform"
              >
                Visit Our Locations
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};