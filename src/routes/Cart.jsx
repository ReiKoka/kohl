import { useCart } from "../hooks/useCart";

import { Form } from "../components/cart/form";
import EmptyCart from "../components/cart/EmptyCart";
import FilledCart from "../components/cart/FilledCart";

function Cart() {
  const { cart, setCart } = useCart();

  return (
    <div className="h-full">
      {cart.length === 0 ? <EmptyCart /> : <FilledCart />}
    </div>
  );
}

export default Cart;
