import { Minus, Money, Plus } from "@phosphor-icons/react";
import { formatPriceALL } from "../../../utils/helpers";
import { useState } from "react";

function JuiceAddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-auto flex w-full items-center justify-between p-4">
      <p className="text-secondary flex items-center gap-2 text-xl">
        <Money className="fill-secondary w-8 h-8 " />
        {formatPriceALL(product.price)}
      </p>

      <div className="flex max-w-min items-center gap-4">
        <button
          className="btn btn-sm bg-primary active:animate-jump aspect-square rounded-full p-0"
          onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
        >
          <Minus className="fill-base-100 h-5 w-5" />
        </button>
        <p className="text-base-content font-primary text-base">{quantity}</p>
        <button
          className="btn btn-sm bg-primary active:animate-jump aspect-square rounded-full p-0"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Plus className="fill-base-100 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default JuiceAddToCart;
