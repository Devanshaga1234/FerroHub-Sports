import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Membership: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    {
      name: 'DINK STARTER',
      price: '₹12,000',
      hours: '12 HOURS',
      validity: '30 DAYS VALIDITY',
      savings: 'SAVE ₹3000',
      color: 'bg-orange-500',
      textColor: 'text-black',
      link: 'https://hudle.page.link/JM9H',
    },
    {
      name: 'PICKLE PRO',
      price: '₹22,500',
      hours: '25 HOURS',
      validity: '45 DAYS VALIDITY',
      savings: 'SAVE ₹7500',
      color: 'bg-blue-700',
      textColor: 'text-white',
      link: 'https://hudle.page.link/JM9H',
    },
  ];

  const yearlyPlans = [
    {
      name: 'DINK ANNUAL',
      price: '₹1,20,000',
      hours: '150 HOURS',
      validity: '365 DAYS VALIDITY',
      savings: 'SAVE ₹30,000',
      color: 'bg-orange-500',
      textColor: 'text-black',
      link: 'https://hudle.page.link/JM9H',
    },
    {
      name: 'PICKLE ELITE',
      price: '₹2,10,000',
      hours: '300 HOURS',
      validity: '365 DAYS VALIDITY',
      savings: 'SAVE ₹60,000',
      color: 'bg-blue-700',
      textColor: 'text-white',
      link: 'https://hudle.page.link/JM9H',
    },
  ];

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-transparent to-yellow-200 opacity-20 animate-pulse blur-3xl z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          className="text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Membership Plans
        </motion.h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
          Choose a plan that fits your game and schedule.
          <br />
          <span className="text-gray-900 font-semibold">More play, more value.</span>
        </p>

        {/* Toggle Switch */}
        <div className="mt-8 inline-flex items-center justify-center bg-gray-200 rounded-full p-1 w-fit mx-auto">
          <button
            className={`px-5 py-2 text-sm font-semibold rounded-full transition ${
              !isYearly ? 'bg-white text-black shadow-md' : 'text-gray-600'
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-5 py-2 text-sm font-semibold rounded-full transition ${
              isYearly ? 'bg-white text-black shadow-md' : 'text-gray-600'
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className={`rounded-3xl p-10 ${plan.color} ${plan.textColor} shadow-2xl border border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-all duration-300 transform backdrop-blur-sm relative overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl" />
              <h2 className="text-3xl font-extrabold mb-6 tracking-wide">{plan.name}</h2>
              <div className="text-xl font-semibold mb-4">
                PRICING – {plan.price}
              </div>
              <ul className="space-y-2 text-base font-medium">
                <li>🕒 {plan.hours}</li>
                <li>📅 {plan.validity}</li>
                <li>💸 {plan.savings}</li>
              </ul>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-200 transition"
              >
                Book Now on HUDLE →
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
