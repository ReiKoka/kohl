import { Broom, ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import SingleCartItem from "./SingleCartItem";
import { showToast } from "./../../utils/showToast";
import { useState } from "react";
import { useNavigate } from "react-router";
import CheckoutDrawer from "./form/CheckoutDrawer";
import CheckoutForm from "./form/CheckoutForm";

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
      <h1 className="font-secondary text-secondary py-4 text-center text-2xl font-normal capitalize md:py-6 md:text-3xl lg:text-4xl">
        Your Cart
      </h1>

      <div className="mt-3 lg:mx-4 lg:flex lg:gap-4 lg:h-full lg:my-3">
        <div className="lg:shadow-custom mb-32 flex h-full grow flex-col gap-1 overflow-hidden p-3 pl-0 md:p-6 md:pl-0 lg:mb-0 lg:h-auto lg:flex-2/3 lg:grow-0 lg:rounded-2xl 2xl:flex-3/4">
          {cart.map((item, index) => (
            <SingleCartItem key={index} item={item} />
          ))}
        </div>

        <div className="bg-base-200 shadow-custom lg:h-full absolute bottom-0 left-0 z-10 grid w-full grid-cols-2 flex-col gap-2 rounded-t-2xl p-4 lg:static lg:bottom-auto lg:left-auto  lg:flex-1/3 lg:rounded-2xl 2xl:flex-1/4 lg:grid-rows-[auto_auto_1fr]">
          {/* ================================================= Continue Shopping Button ================================================= */}
          <button
            onClick={() => navigate("/juices")}
            className="btn btn-ghost font-primary col-start-1 col-end-3 text-base xl:col-end-2"
          >
            Continue shopping
          </button>

          {/* ================================================= Clear Cart Button ================================================= */}
          <button
            className="btn btn-outline font-primary flex items-center justify-center gap-4 text-lg transition-all duration-150 active:scale-90 lg:col-start-1 lg:col-end-3 xl:col-start-2 xl:col-end-3"
            onClick={handleClearCart}
          >
            <Broom className="fill-base-content h-5 w-5" strokeWidth={2} />
            <span>Clear Cart</span>
          </button>

          {/* ================================================= Checkout Button ================================================= */}
          <button
            className="btn btn-primary font-primary flex items-center justify-center gap-4 text-lg transition-all duration-150 active:scale-90 lg:hidden"
            onClick={handleCheckout}
          >
            <ShoppingBag
              className="fill-primary-content h-6 w-6"
              strokeWidth={2}
            />
            <span>Checkout</span>
          </button>
          <div className="divider col-start-1 col-end-3 hidden lg:flex lg:mb-2">OR</div>

          <div className="col-start-1 col-end-3 hidden lg:flex lg:flex-col">
            <h1 className="font-primary text-secondary pb-6 text-center text-xl font-semibold md:pb-8 md:text-2xl lg:pb-4">
              Checkout
            </h1>
            <CheckoutForm />
          </div>
        </div>
      </div>

      <CheckoutDrawer isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
    </div>
  );
}

export default FilledCart;
