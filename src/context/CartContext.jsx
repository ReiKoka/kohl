import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalItems = cart?.length || 0;
  const totalPrice =
    cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  const onRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const onQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalItems,
        totalPrice,
        onRemove,
        onQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
