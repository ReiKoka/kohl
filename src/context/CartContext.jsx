import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const totalItems = cart?.length || 0;

  const onAdd = (productToAdd, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id === productToAdd.id,
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { product: productToAdd, quantity: quantity }];
      }
    });
  };

  const onRemove = (productIdToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productIdToRemove),
    );
  };

  const onQuantityChange = (productIdToUpdate, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.product.id === productIdToUpdate) {
          const validQuantity = Math.max(1, newQuantity);
          return { ...item, quantity: validQuantity };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalItems,
        // totalPrice,
        clearCart,
        onAdd,
        onRemove,
        onQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
