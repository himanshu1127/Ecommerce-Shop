import React from "react";
import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import Item from "../Item/Item";

const NewCollection = (props) => {
  return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-600 font-medium text-sm mb-4">
            <Sparkles size={16} className="mr-2" />
            Just Dropped
          </div>
          
          <h2 className="section-title">
            New Arrivals
          </h2>
          
          <p className="section-subtitle">
            Discover the latest additions to our collection. Fresh styles, trending pieces, and must-have items that just landed in our store.
          </p>
        </div>

        {/* Products Grid */}
        <div className="relative">
          {!props.product && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Products Coming Soon</h3>
              <p className="text-gray-500">We're updating our collection with amazing new items.</p>
            </div>
          )}
          
          {props.product && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {props.product.slice(0, 8).map((item, i) => (
                  <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <Item
                      id={item.id}
                      name={item.title}
                      image={item.image}
                      new_price={item.price}
                      old_price={Math.round(item.price * 1.3)} // Generate a realistic old price
                      product={item}
                    />
                  </div>
                ))}
              </div>

              {/* View All Button */}
              {props.product.length > 8 && (
                <div className="text-center mt-12">
                  <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    View All New Arrivals
                    <ArrowRight size={20} className="ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Featured Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles size={24} className="text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Women's Fashion</h3>
            <p className="text-gray-600 text-sm">Latest trends and timeless classics</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Men's Collection</h3>
            <p className="text-gray-600 text-sm">Sophisticated styles for modern men</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles size={24} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessories</h3>
            <p className="text-gray-600 text-sm">Complete your look with our picks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
