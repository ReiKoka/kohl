import { Minus, Plus } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";

function SingleCartItem({ item }) {
  const { onQuantityChange } = useCart();

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] px-3 pl-0">
      <div className="h-full w-full">
        <img
          src={item.product.images[0]}
          alt={item.product.primaryName}
          className="h-24"
        />
      </div>

      <div className="font-primary flex h-full w-full flex-col justify-center py-4">
        <h2 className="font-secondary text-secondary text-lg font-bold capitalize">
          {item.product.primaryName}
        </h2>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          className="btn btn-sm bg-primary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75"
          onClick={() =>
            item.quantity > 0 &&
            onQuantityChange(item.product.id, item.quantity - 1)
          }
        >
          <Minus className="fill-base-100 h-4 w-4" />
        </button>
        <div className="w-6 text-center">
          <p className="text-base-content font-primary text-lg font-medium">
            {item.quantity}
          </p>
        </div>
        <button
          className="btn btn-sm bg-primary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75"
          onClick={() => onQuantityChange(item.product.id, item.quantity + 1)}
        >
          <Plus className="fill-base-100 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default SingleCartItem;
