import React from 'react';
import { Hero } from '../components/Home/Hero';
import { Features } from '../components/Home/Features';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
    </div>
  );
};