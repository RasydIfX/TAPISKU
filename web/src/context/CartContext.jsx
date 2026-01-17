import { createContext, useContext, useState } from "react";

// 1️⃣ Buat Context
const CartContext = createContext(null);

// 2️⃣ Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3️⃣ Hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart HARUS dipakai di dalam <CartProvider>");
  }
  return context;
}