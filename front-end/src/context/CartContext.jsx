import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(function (prevCart) {
      return [...prevCart, product];
    });
  }

  function clearCart() {
    setCart([]);
  }

  function getCartCount() {
    return cart.length;
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartCount, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
