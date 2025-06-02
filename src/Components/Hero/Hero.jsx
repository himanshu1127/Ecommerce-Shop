import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden w-full">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-4 lg:left-10 w-16 lg:w-20 h-16 lg:h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-4 lg:right-20 w-12 lg:w-16 h-12 lg:h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-8 lg:w-12 h-8 lg:h-12 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-medium text-sm mb-6 animate-bounce-in">
              <Sparkles size={16} className="mr-2" />
              New Season Collection
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Explore our curated collection of premium fashion for men, women, and kids. 
              Quality meets style in every piece.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/" 
                className="btn-primary group inline-flex items-center justify-center"
              >
                Shop Now
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link 
                to="/Mens" 
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300 bg-white inline-flex items-center justify-center"
              >
                View Collection
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-10">
              <div className="text-center">
                <div className="flex items-center justify-center text-2xl font-bold text-gray-900">
                  <TrendingUp size={20} className="mr-1 text-green-500" />
                  10K+
                </div>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <p className="text-sm text-gray-600">Premium Brands</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <p className="text-sm text-gray-600">Products</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main hero image container */}
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12">
                <div className="aspect-[4/5] bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Fashion Collection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Latest Collection</h3>
                    <p className="text-sm opacity-90">Trendy & Affordable</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-red-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg animate-bounce">
                70% OFF
              </div>
              
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-white shadow-lg rounded-lg p-2 lg:p-4 animate-bounce delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Free Shipping</p>
                    <p className="text-xs text-gray-600">On orders over $50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
