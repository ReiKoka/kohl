import { useCart } from "../../hooks/useCart";
import SingleCartItem from "./SingleCartItem";

function FilledCart() {
  const { cart, setCart } = useCart();
  return (
    <div className="flex h-full flex-col gap-4 p-2">
      <h1 className="font-secondary text-secondary my-2 text-center text-2xl font-normal capitalize md:text-3xl lg:text-4xl">
        Your Cart
      </h1>
      <div className="relative my-3 h-full grow overflow-y-auto">
        {cart.map((item, index) => (
          <SingleCartItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FilledCart;
