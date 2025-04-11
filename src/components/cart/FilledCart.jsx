import { Broom, ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import SingleCartItem from "./SingleCartItem";

function FilledCart() {
  const { cart } = useCart();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <h1 className="font-secondary text-secondary my-2 text-center text-2xl font-normal capitalize md:text-3xl lg:text-4xl">
        Your Cart
      </h1>
      <div className="my-3 flex h-full grow flex-col gap-1 overflow-y-auto">
        {cart.map((item, index) => (
          <SingleCartItem key={index} item={item} />
        ))}
      </div>
      <div className="bg-base-200 shadow-custom absolute bottom-0 left-0 z-10 flex w-full gap-2 rounded-t-2xl p-4">
        <button className="btn btn-outline btn-lg font-primary flex flex-1/2 items-center justify-center gap-4 text-lg transition-all duration-150 active:scale-90">
          <Broom className="fill-base-content h-5 w-5" strokeWidth={2} />
          <span>Clear Cart</span>
        </button>
        <button className="btn btn-primary btn-lg font-primary flex flex-1/2 items-center justify-center gap-4 text-lg transition-all duration-150 active:scale-90">
          <ShoppingBag
            className="fill-primary-content h-6 w-6"
            strokeWidth={2}
          />
          <span>Checkout</span>
        </button>
      </div>
    </div>
  );
}

export default FilledCart;
