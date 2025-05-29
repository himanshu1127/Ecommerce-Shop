import React, { createContext, useState, useEffect } from "react";
import Getdata from "../Components/Functions/Getdata";

export const ShopContext = createContext();

// const getDefaultCart = () => {
//   const Products = Getdata();
//   console.log(Products);
//   let cart = {};
//   for (let index = 0; index < Products.length; index++) {
//     cart[index] = 0;
//   }
//   console.log(cart);
//   return cart;
// };

const ShopContextProvider = (props) => {
  const newProducts = Getdata();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, id) => {
    const obj = { ...product, quantity: 1 };

    const cartitem = cartItems.find((item) => {
      return item.id === id;
    });
    // if cart item is already in cart
    if (cartitem) {
      const newcart = [...cartItems].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartitem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newcart);
    } else {
      setCartItems([...cartItems, obj]);
    }
  };

  const removeFromCart = (id) => {
    const newcart = [...cartItems].filter((item) => {
      return item.id !== id;
    });
    setCartItems(newcart);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      const newcart = [...cartItems].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
      setCartItems(newcart);
    }
  };
  const getTotalCartAmount = () => {
    if (cartItems) {
      let amount = 0;
      for (const item in cartItems) {
        amount += cartItems[item].price * cartItems[item].quantity;
      }
      return amount;
    } else {
      return 0;
    }
  };

  const contextValue = {
    newProducts,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
