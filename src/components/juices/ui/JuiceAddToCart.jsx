import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { capitalizeFirstLetter, handleAddToCart } from "../../../utils/helpers";
import { useState } from "react";
import { useCart } from "../../../hooks/useCart";

import { showToast } from "../../../utils/showToast";

function JuiceAddToCart({ product }) {
  const { onAdd, cart } = useCart();
  const [quantity, setQuantity] = useState(
    cart.find((item) => item.product.id === product.id)?.quantity || 1,
  );

  const notify = () =>
    showToast(
      "success",
      `${quantity} ${capitalizeFirstLetter(product.primaryName)} added to cart`,
    );

  return (
    <div className="mt-auto flex w-full items-center justify-between gap-4">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <button
            className="btn bg-primary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75"
            onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
          >
            <Minus className="fill-base-100 h-5 w-5" />
          </button>
          <div className="w-6 text-center">
            <p className="text-base-content font-primary text-xl font-semibold">
              {quantity}
            </p>
          </div>
          <button
            className="btn bg-primary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <Plus className="fill-base-100 h-5 w-5" />
          </button>
        </div>
      </div>

      <button
        className="btn btn-primary font-primary flex items-center justify-center gap-4 transition-all duration-150 active:scale-75"
        onClick={(e) => handleAddToCart(e, onAdd, product, notify, quantity)}
      >
        <ShoppingCart className="fill-primary-content h-6 w-6" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default JuiceAddToCart;
