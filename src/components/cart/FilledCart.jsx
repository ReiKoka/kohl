import { useCart } from "../../hooks/useCart";

function FilledCart() {
  const { cart, setCart } = useCart();
  return <div>FilledCart</div>;
}

export default FilledCart;
