import { use } from "react"
import { CartContext } from "../context/CartContext";

export const useNav = () => {
  const context = use(CartContext);

  if (!context) throw new Error('useCart cannot be used outside CartProvider')

  return context;
}