import { Broom, ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import SingleCartItem from "./SingleCartItem";
import { showToast } from "./../../utils/showToast";
import { useState } from "react";
import CheckoutForm from "./form/CheckoutForm";
import { useNavigate } from "react-router";

function FilledCart() {
  const { cart, clearCart } = useCart();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const navigate = useNavigate();

  console.log(cart);

  const handleClearCart = () => {
    clearCart();
    showToast("info", "Your cart is clear!");
  };

  const handleCheckout = () => {
    setIsOpenForm(true);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <h1 className="font-secondary text-secondary my-2 text-center text-2xl font-normal capitalize md:text-3xl lg:text-4xl">
        Your Cart
      </h1>
      <div className="mt-3 mb-32 flex h-full grow flex-col gap-1 overflow-hidden lg:h-auto lg:grow-0">
        {cart.map((item, index) => (
          <SingleCartItem key={index} item={item} />
        ))}
      </div>

      <div className="bg-base-200 shadow-custom absolute bottom-0 left-0 z-10 flex w-full flex-col gap-2 rounded-t-2xl p-4 lg:static lg:bottom-auto lg:left-auto">
        <div className="flex gap-2">
          <button
            className="btn btn-outline font-primary flex flex-1/2 items-center justify-center gap-4 text-lg transition-all duration-150 active:scale-90"
            onClick={handleClearCart}
          >
            <Broom className="fill-base-content h-5 w-5" strokeWidth={2} />
            <span>Clear Cart</span>
          </button>

          <button
            className="btn btn-primary font-primary flex flex-1/2 items-center justify-center gap-4 text-lg transition-all duration-150 active:scale-90"
            onClick={handleCheckout}
          >
            <ShoppingBag
              className="fill-primary-content h-6 w-6"
              strokeWidth={2}
            />
            <span>Checkout</span>
          </button>
        </div>

        <button
          onClick={() => navigate("/juices")}
          className="btn btn-link font-primary text-base"
        >
          Continue shopping
        </button>
      </div>

      <CheckoutForm isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
    </div>
  );
}

export default FilledCart;
