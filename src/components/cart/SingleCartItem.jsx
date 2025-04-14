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
    <div className="grid grid-cols-[auto_1fr]">
      <div className="h-full w-full">
        <img
          src={item.product.images[0]}
          alt={item.product.primaryName}
          className="h-24 md:h-34 xl:h-44"
        />
      </div>

      <div className="font-primary flex h-full w-full items-center py-4 md:pl-6">
        <h2 className="font-secondary text-secondary min-w-40 text-lg font-bold capitalize md:text-xl xl:text-2xl">
          {item.product.primaryName}
        </h2>

        <div className="ml-auto flex items-center justify-end gap-2 xl:grid xl:w-full xl:grid-cols-[1fr_auto]">
          <div className="flex items-center justify-center gap-2">
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
              onClick={() =>
                onQuantityChange(item.product.id, item.quantity + 1)
              }
            >
              <Plus className="fill-base-100 h-5 w-5" />
            </button>
          </div>

          <button
            onClick={handleRemoveItem}
            className="btn group btn-sm btn-secondary aspect-square rounded-full p-0 transition-all duration-150 active:scale-75 xl:w-fit 2xl:p-2 2xl:text-sm"
          >
            <Trash className="fill-base-primary group-hover:fill-base-100 h-5 w-5 transition-all duration-150" />
            <span className="hidden w-max 2xl:block">Remove from cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCartItem;
