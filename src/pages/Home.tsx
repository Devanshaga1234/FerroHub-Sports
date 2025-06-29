import React from 'react';
import { Hero } from '../components/Home/Hero';
import { Features } from '../components/Home/Features';
import { motion } from 'framer-motion';
import ChatBot from '../components/ChatBot';

export const Home: React.FC = () => {
  return (
    <motion.main
      className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <Hero />
        <Features />
      </motion.div>

      {/* ✅ Add ChatBot here */}
      <ChatBot />
    </motion.main>
  );
};
