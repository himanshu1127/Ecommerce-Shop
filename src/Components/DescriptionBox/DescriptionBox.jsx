import React, { useState } from "react";
import { Star, User, ThumbsUp, ShoppingBag } from "lucide-react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      comment: "Amazing quality! The fabric is soft and the fit is perfect. Highly recommended!",
      helpful: 12
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 4,
      date: "1 week ago", 
      comment: "Good product overall. Fast shipping and great customer service.",
      helpful: 8
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Love this! Exactly as described and arrived quickly.",
      helpful: 15
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({reviews.length})
        </div>
      </div>
      
      <div className="descriptionbox-content">
        {activeTab === 'description' ? (
          <div className="descriptionbox-description">
            <h3>Product Overview</h3>
            <p>
              This premium quality product is crafted with the finest materials to ensure durability, 
              comfort, and style. Designed for the modern consumer who values both functionality and 
              aesthetics, this item represents the perfect blend of innovation and tradition.
            </p>
            
            <h4>Key Features:</h4>
            <ul>
              <li>Premium quality materials for long-lasting durability</li>
              <li>Ergonomic design for maximum comfort</li>
              <li>Modern styling that complements any wardrobe</li>
              <li>Easy care and maintenance</li>
              <li>Available in multiple sizes and colors</li>
            </ul>
            
            <h4>Care Instructions:</h4>
            <p>
              Machine wash cold with like colors. Tumble dry low heat. Do not bleach. 
              Iron on low heat if needed. For best results, wash inside out.
            </p>
          </div>
        ) : (
          <div className="reviews-section">
            <div className="reviews-summary">
              <div className="rating-overview">
                <div className="average-rating">
                  <span className="rating-number">4.7</span>
                  <div className="rating-stars">
                    {renderStars(5)}
                  </div>
                  <span className="rating-text">Based on {reviews.length} reviews</span>
                </div>
              </div>
            </div>
            
            <div className="reviews-list">
              {reviews.map(review => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        <User size={20} />
                      </div>
                      <div>
                        <h4 className="reviewer-name">{review.name}</h4>
                        <span className="review-date">{review.date}</span>
                      </div>
                    </div>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  
                  <p className="review-comment">{review.comment}</p>
                  
                  <div className="review-actions">
                    <button className="helpful-btn">
                      <ThumbsUp size={16} />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
