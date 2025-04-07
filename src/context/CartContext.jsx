import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalItems = cart?.length || 0;
  const totalPrice =
    cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  return (
    <CartContext.Provider value={{ cart, setCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
