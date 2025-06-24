import React from 'react';
import { Clock, Shield, Trophy, Users, MapPin, Star } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '17 Hours Daily Access',
    description: 'Play from 6 AM to 11 PM every day with extended hours for your convenience.',
    color: 'text-orange-600 bg-orange-100'
  },
  {
    icon: Shield,
    title: 'Premium Court Surface',
    description: 'Professional-grade courts with optimal bounce and safety features.',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: Trophy,
    title: 'Tournament Ready',
    description: 'Official size courts suitable for both casual play and competitive tournaments.',
    color: 'text-orange-600 bg-orange-100'
  },
  {
    icon: Users,
    title: 'Expert Coaching',
    description: 'Learn from certified instructors with personalized training programs.',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Conveniently located in Millers Road and Budigere Cross with easy access.',
    color: 'text-orange-600 bg-orange-100'
  },
  {
    icon: Star,
    title: 'Rooftop Experience',
    description: 'Unique rooftop courts with stunning city skyline and garden views.',
    color: 'text-blue-600 bg-blue-100'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose FerroHub Sports?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience pickleball like never before with our premium facilities, 
            expert coaching, and unmatched playing environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Playing?
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of players who have made FerroHub their pickleball home. 
              Book your first session today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courts"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Book Your Court
              </a>
              <a
                href="/locations"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
              >
                Visit Our Locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};