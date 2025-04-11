import { useState } from "react";
import { formatPriceALL } from "./../../utils/helpers";
import { Minus, Plus } from "@phosphor-icons/react";

function SingleCartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] px-3 py-3 pl-0">
      <div className="h-full w-full">
        <img src={item.images[0]} alt={item.primaryName} className="h-24" />
      </div>

      <div className="font-primary flex h-full w-full flex-col justify-center py-4">
        <h2 className="font-secondary text-secondary text-lg font-bold capitalize">
          {item.primaryName}
        </h2>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          className="btn btn-sm bg-primary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75"
          onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
        >
          <Minus className="fill-base-100 h-4 w-4" />
        </button>
        <div className="w-6 text-center">
          <p className="text-base-content font-primary text-lg font-medium">
            {quantity}
          </p>
        </div>
        <button
          className="btn btn-sm bg-primary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Plus className="fill-base-100 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default SingleCartItem;
