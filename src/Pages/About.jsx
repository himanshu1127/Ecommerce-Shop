import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About EliteMart</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your premier destination for fashion-forward clothing and premium lifestyle products.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, EliteMart began with a simple mission: to make premium fashion 
                accessible to everyone. We believe that great style shouldn't break the bank, 
                and quality should never be compromised.
              </p>
              <p className="text-gray-600 mb-6">
                From our humble beginnings as a small online boutique, we've grown into a 
                trusted destination for fashion enthusiasts worldwide. Our curated collection 
                features the latest trends alongside timeless classics.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of satisfied customers globally, maintaining our 
                commitment to quality, affordability, and exceptional customer service.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationship with customers, 
              partners, and the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We carefully select and test every product to ensure it meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen, adapt, and continuously improve.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to ethical practices and reducing our environmental impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in giving back and supporting the communities that support us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-red-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-red-100">Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-red-100">Brands</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <p className="text-red-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind EliteMart is a passionate team of fashion enthusiasts, tech experts, 
              and customer service professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Alex Johnson</h3>
              <p className="text-red-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Fashion industry veteran with 15+ years of experience in retail and e-commerce.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b332c2fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Design Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Martinez</h3>
              <p className="text-red-600 font-medium mb-2">Design Director</p>
              <p className="text-gray-600 text-sm">
                Creative visionary who curates our collections and sets the aesthetic direction.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Tech Lead"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-red-600 font-medium mb-2">Tech Lead</p>
              <p className="text-gray-600 text-sm">
                Full-stack developer ensuring our platform delivers the best shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
