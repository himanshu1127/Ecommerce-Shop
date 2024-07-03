import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

function CartItems() {
  const { cartItems, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartitem">
      <div className="cartitem-format-headings">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div>
              <div className="cartitem-format cartitem-format-headings">
                <img
                  src={item.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button
                  style={{
                    background: "white",
                    borderRadius: 0,
                    width: "50px",
                    textAlign: "center",
                  }}
                  className="cartitem-quantity"
                >
                  {item.quantity}
                </button>
                <p>${item.price * item.quantity}</p>
                <button
                  src=""
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  alt=""
                >
                  Remove
                </button>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <p
          style={{
            textAlign: "center",
            marginTop: "10vw",
            fontSize: "2vw",
            fontWeight: "300",
          }}
        >
          Cart is Empty
        </p>
      )}
      <div className="cartitem-down">
        <div className="cartiem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>FREE</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>TOTAL</h3>
              <h3>
                $
                {() => {
                  getTotalCartAmount();
                }}
              </h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>Have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" name="" id="" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
