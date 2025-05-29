import React from 'react'
import { ArrowRight, Gift, Percent, Clock } from 'lucide-react'

const Offers = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-orange-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-red-600 font-medium text-sm mb-6">
              <Gift size={16} className="mr-2" />
              Limited Time Offer
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block text-red-600">Exclusive</span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Offers For You
              </span>
            </h1>
            
            {/* Offer Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="p-2 bg-red-100 rounded-full">
                  <Percent size={20} className="text-red-600" />
                </div>
                <span className="text-lg text-gray-700">Up to 70% OFF on selected items</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Clock size={20} className="text-orange-600" />
                </div>
                <span className="text-lg text-gray-700">Flash Sale - Ends in 24 hours</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now & Save
                <ArrowRight size={20} className="ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="px-6 py-4 border-2 border-red-300 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300">
                View All Deals
              </button>
            </div>
          </div>
          
          {/* Right Content - Offer Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main offer image container */}
              <div className="relative bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-6 lg:p-8">
                <div className="aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Special Offers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Special Collection</h3>
                    <p className="text-sm opacity-90">Limited Edition</p>
                  </div>
                </div>
              </div>
              
              {/* Floating discount badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-full text-center font-bold shadow-xl animate-pulse">
                <div className="text-2xl">70%</div>
                <div className="text-xs">OFF</div>
              </div>
              
              {/* Sale timer */}
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl p-4">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg">23:59:45</div>
                  <div className="text-xs text-gray-600">Time Left</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
