import { useNavigate } from "react-router";
import EmptyCartImg from "../../assets/images/emptyCart.svg?react";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <EmptyCartImg className="text-primary animate-jump-in animate-duration-700 w-80 md:w-96 xl:w-[450px] 2xl:w-[600px]" />
      <h1 className="font-primary text-neutral mx-auto w-[90%] text-center text-2xl font-bold">
        Your cart is empty!
      </h1>
      <button className="btn btn-primary font-primary" onClick={() => navigate("/juices")}>
        Explore our juices
      </button>
    </div>
  );
}

export default EmptyCart;
