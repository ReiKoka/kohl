import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import { showToast } from "../../utils/showToast";
import { capitalizeFirstLetter } from "../../utils/helpers";

function SingleCartItem({ item }) {
  const { onQuantityChange, onRemove } = useCart();

  const handleRemoveItem = () => {
    onRemove(item.product.id);
    showToast(
      "info",
      `${capitalizeFirstLetter(item.product.primaryName)} removed from cart!`,
    );
  };

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] px-3 pl-0 md:px-6">
      <div className="h-full w-full">
        <img
          src={item.product.images[0]}
          alt={item.product.primaryName}
          className="h-24 md:h-34"
        />
      </div>

      <div className="font-primary flex h-full w-full flex-col justify-center py-4 md:ml-6">
        <h2 className="font-secondary text-secondary text-lg font-bold capitalize md:text-xl">
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
          <Minus className="fill-base-100 h-5 w-5" />
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
          <Plus className="fill-base-100 h-5 w-5" />
        </button>

        <button
          onClick={handleRemoveItem}
          className="btn group btn-sm btn-secondary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75"
        >
          <Trash className="fill-base-primary group-hover:fill-base-100 h-5 w-5 transition-all duration-150" />
        </button>
      </div>
    </div>
  );
}

export default SingleCartItem;
