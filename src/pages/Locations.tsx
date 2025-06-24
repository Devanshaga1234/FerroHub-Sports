import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Wifi, PowerIcon as ShowerIcon, Star } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our premium pickleball facilities conveniently located across Bengaluru. 
            Each location offers unique features and stunning views.
          </p>
        </div>

        {/* Locations */}
        <div className="space-y-12">
          {locations.map((location, index) => (
            <div key={location.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Images */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="h-64 lg:h-full">
                    <img
                      src={location.images[0]}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{location.name}</h2>
                    <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-gray-600 ml-2">4.8 (124 reviews)</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{location.address}</p>
                        <p className="text-sm text-emerald-600 mt-1">{location.directions}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{location.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{location.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Hours</p>
                        <p className="text-gray-600">
                          {location.hours.open} - {location.hours.close} (7 days a week)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {location.amenities.map((amenity, amenityIndex) => {
                        const IconComponent = getAmenityIcon(amenity);
                        return (
                          <div key={amenityIndex} className="flex items-center space-x-2">
                            <IconComponent className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-gray-600">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/courts"
                      className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-emerald-700 transition-colors"
                    >
                      Book a Court
                    </a>
                    <a
                      href={`https://maps.google.com?q=${location.coordinates.lat},${location.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-emerald-600 text-emerald-600 py-3 px-6 rounded-xl font-semibold text-center hover:bg-emerald-50 transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Images */}
              {location.images.length > 1 && (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
                  {location.images.slice(1).map((image, imageIndex) => (
                    <div key={imageIndex} className="aspect-w-16 aspect-h-12">
                      <img
                        src={image}
                        alt={`${location.name} - View ${imageIndex + 2}`}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Play?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Choose your preferred location and book your court today. Both locations offer the same 
            premium experience with unique local character.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courts"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
            >
              Book Your Court
            </a>
            <a
              href="/coaching"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-200"
            >
              View Coaching Plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};