import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  CreditCard, 
  Tag,
  ArrowRight,
  Gift
} from "lucide-react";

function CartItems() {
  const { cartItems, addToCart, removeFromCart, updateQuantity, getTotalCartAmount } =
    useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = getTotalCartAmount();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <button className="btn-primary">
              Continue Shopping
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
              <ShoppingBag size={24} className="mr-3" />
              Shopping Cart ({cartItems.length} items)
            </h1>
          </div>

          {/* Cart Items */}
          <div className="p-6">
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="flex flex-col md:flex-row items-center border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  {/* Product Image */}
                  <div className="w-32 h-32 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2">Category: {item.category}</p>
                    <p className="text-xl font-bold text-primary">${item.price?.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 mb-4 md:mb-0 md:mr-6">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-semibold text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Item Total & Remove */}
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-xl font-bold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Promo Code */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Gift size={20} className="mr-2 text-secondary" />
                Have a promo code?
              </h3>
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="input-field flex-grow"
                />
                <button className="btn-secondary">
                  <Tag size={18} className="mr-2" />
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Cart Total */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              
              {subtotal < 50 && shipping > 0 && (
                <p className="text-sm text-gray-500">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              
              <hr className="my-4" />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full btn-primary mb-3">
              <CreditCard size={18} className="mr-2" />
              Proceed to Checkout
            </button>
            
            <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
