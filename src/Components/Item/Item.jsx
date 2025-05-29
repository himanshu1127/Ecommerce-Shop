import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { ShoppingCart, Heart, Star, Eye, Check } from "lucide-react";

const Item = ({ id, image, name, new_price, old_price, product }) => {
  const { addToCart } = useContext(ShopContext);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const discountPercentage = old_price ? Math.round(((old_price - new_price) / old_price) * 100) : 0;

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              -{discountPercentage}%
            </div>
          )}

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <button
              onClick={handleWishlist}
              className={`p-2 rounded-full shadow-md transition-all duration-200 ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
              }`}
            >
              <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            
            <button className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-blue-50 hover:text-blue-500 transition-all duration-200">
              <Eye size={16} />
            </button>
          </div>

          {/* Overlay with Add to Cart */}
          <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <button
              onClick={handleAddToCart}
              className={`transform transition-all duration-200 hover:scale-105 ${
                isAdded 
                  ? 'bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md'
                  : 'btn-primary'
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={18} className="mr-2" />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">(4.0)</span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${new_price}
            </span>
            {old_price && (
              <span className="text-sm text-gray-500 line-through">
                ${old_price}
              </span>
            )}
          </div>

          {/* Brand */}
          <p className="text-sm text-gray-500 mt-1">Premium Brand</p>
        </div>
      </Link>

      {/* Quick Add to Cart Button (Mobile) */}
      <div className="md:hidden p-4 pt-0">
        <button
          onClick={handleAddToCart}
          className={`w-full text-sm py-2 transition-all duration-200 ${
            isAdded 
              ? 'bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md'
              : 'btn-primary'
          }`}
        >
          {isAdded ? (
            <>
              <Check size={16} className="mr-2" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Item;
