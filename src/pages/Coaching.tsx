import React from 'react';
import { Clock, Users, Star, CheckCircle, Calendar } from 'lucide-react';
import { coachingPlans } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Coaching: React.FC = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleSubscribe = (id: string) => {
    console.log('Subscribing to plan:', id);
    navigate(`/subscribe/${id}`);
  };

  const handleLearnMore = (id: string) => {
    console.log('Learn more about plan:', id);
    navigate(`/coaching/${id}`);
  };

  const getPlanColor = (type: string) => {
    switch (type) {
      case 'beginner':
        return 'from-green-500 to-emerald-600';
      case 'intermediate':
        return 'from-blue-500 to-indigo-600';
      case '1-on-1':
        return 'from-purple-500 to-pink-600';
      case 'advanced':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getPlanBadge = (type: string) => {
    switch (type) {
      case 'beginner':
        return { text: 'Best for Beginners', color: 'bg-green-100 text-green-800' };
      case 'intermediate':
        return { text: 'Most Popular', color: 'bg-blue-100 text-blue-800' };
      case '1-on-1':
        return { text: 'Premium', color: 'bg-purple-100 text-purple-800' };
      case 'advanced':
        return { text: 'Tournament Prep', color: 'bg-orange-100 text-orange-800' };
      default:
        return { text: 'Featured', color: 'bg-gray-100 text-gray-800' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coaching Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from certified instructors and take your pickleball game to the next level with our 
            comprehensive coaching programs designed for all skill levels.
          </p>
        </div>

        {/* Coaching Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {coachingPlans.map((plan) => {
            const badge = getPlanBadge(plan.type);
            
            return (
              <div key={plan.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Plan Header */}
                <div className={`bg-gradient-to-r ${getPlanColor(plan.type)} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${badge.color} bg-white bg-opacity-90`}>
                      {badge.text}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">₹{plan.pricePerMonth.toLocaleString()}</div>
                      <div className="text-sm opacity-90">per month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">₹{plan.pricePerSession}</div>
                      <div className="text-sm opacity-90">per session</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Coach Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={plan.coach.image}
                      alt={plan.coach.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{plan.coach.name}</h4>
                      <p className="text-sm text-gray-600">{plan.coach.experience}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.9 rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{plan.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{plan.sessionsPerWeek}/week</div>
                        <div className="text-xs text-gray-600">Sessions</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{plan.schedule.days.join(', ')}</div>
                        <div className="text-xs text-gray-600">Schedule</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{plan.schedule.times.join(', ')}</div>
                        <div className="text-xs text-gray-600">Times</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">What's Included:</h5>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coach Bio */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">About Your Coach:</h5>
                    <p className="text-sm text-gray-600">{plan.coach.bio}</p>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    {user ? (
                      <button 
                        onClick={() => handleSubscribe(plan.id)}
                        className={`flex-1 bg-gradient-to-r ${getPlanColor(plan.type)} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                        Subscribe Now
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className={`flex-1 bg-gradient-to-r ${getPlanColor(plan.type)} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center`}
                      >
                        Login to Subscribe
                      </Link>
                    )}
                    <button 
                      onClick={() => handleLearnMore(plan.id)}
                      className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Our Coaching */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Coaching?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certified instructors bring years of competitive experience and proven teaching methods 
              to help you achieve your pickleball goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Instructors</h3>
              <p className="text-gray-600">
                Learn from nationally certified coaches with tournament experience and proven track records.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Training</h3>
              <p className="text-gray-600">
                Customized programs designed for your skill level, goals, and learning pace.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Multiple time slots and days available to fit your busy schedule and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};