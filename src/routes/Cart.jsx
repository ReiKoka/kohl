import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";
import { Table } from "../components/table";
import { Form } from "../components/cart/form";
import EmptyCart from "../components/cart/EmptyCart";
import FilledCart from "../components/cart/FilledCart";

function Cart() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="h-full">
      {cart.length === 0 ? <EmptyCart /> : <FilledCart />}
    </div>
  );
}

export default Cart;
