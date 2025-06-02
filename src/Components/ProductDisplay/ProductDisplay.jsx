import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import { Star, Heart, Share2, ShoppingCart, Check, Truck, Shield, RotateCcw, Gift } from "lucide-react";

const ProductDisplay = (props) => {
  const current = props.product;
  const product = current[0];
  const [selectedSize, setSelectedSize] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const images = [product.image, product.image, product.image, product.image];

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {images.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${product.title} view ${index + 1}`}
              className={selectedImage === index ? 'active' : ''}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img 
            className="productdisplay-main-img" 
            src={images[selectedImage]} 
            alt={product.title} 
          />
          <div className="productdisplay-badges">
            <div className="badge-exclusive">
              <Gift size={16} />
              <span>Exclusive</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="productdisplay-right">
        <div className="productdisplay-header">
          <div>
            <h1>{product.title}</h1>
            <p className="product-category">{product.category}</p>
          </div>
          <div className="product-actions">
            <button 
              className={`action-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            <button className="action-btn">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="productdisplay-right-star">
          <div className="rating-container">
            <div className="stars">
              {renderStars(product.rating.rate)}
            </div>
            <span className="rating-text">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
        </div>

        <div className="productdisplay-right-price">
          <span className="current-price">${product.price}</span>
          <span className="original-price">${(product.price * 1.4).toFixed(2)}</span>
          <span className="discount-badge">30% OFF</span>
        </div>

        <div className="productdisplay-right-description">
          <h3>Product Details</h3>
          <p>{product.description}</p>
        </div>

        <div className="productdisplay-right-size">
          <h3>Select Size</h3>
          <div className="productdisplay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div 
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button 
          className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          {isAdded ? (
            <>
              <Check size={20} />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart size={20} />
              Add to Cart
            </>
          )}
        </button>

        <div className="product-features">
          <div className="feature">
            <Truck size={20} />
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="feature">
            <RotateCcw size={20} />
            <span>30-day return policy</span>
          </div>
          <div className="feature">
            <Shield size={20} />
            <span>2-year warranty included</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
