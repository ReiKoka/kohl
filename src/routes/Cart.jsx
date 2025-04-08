import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";
import clsx from "clsx";
import Footer from "../components/Footer";
import { Table } from "../components/table";
import { Form } from "../components/form";

function Cart() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <h1 className="font-secondary text-secondary pt-4 text-center text-2xl font-normal uppercase md:text-3xl lg:text-4xl">
        {cart?.length <= 0 ? "Your Cart is Empty" : "Your Cart"}
      </h1>
      {cart.length > 0 ? (
        <div>
          <Table cart={cart} />
          <Form cart={cart} setCart={setCart} />
        </div>
      ) : (
        <div className="mt-2 flex flex-col items-center justify-center gap-4">
          <button
            className="btn btn-primary font-primary focus-visible:ring-primary btn-sm ring-offset-base-300 md:btn-lg xl:btn-xl pointer-events-auto rounded-full outline-0 focus-visible:ring-2 focus-visible:ring-offset-2"
            onClick={() => navigate("/juices")}
          >
            View Our Juices
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
