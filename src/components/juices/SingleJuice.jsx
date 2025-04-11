import { Plus, PlusCircle } from "@phosphor-icons/react";
import clsx from "clsx";
import { useMediaQuery } from "usehooks-ts";
import { useNavigate } from "react-router";

import { useCart } from "../../hooks/useCart";
import { toast } from "sonner";
import { handleAddToCart } from "../../utils/helpers";

function SingleJuice({ product }) {
  const { setCart } = useCart();
  const matches = useMediaQuery("(min-width: 768px");
  const navigate = useNavigate();

  const notify = () => toast.success(`1 ${product.primaryName} added to cart`);

  const totalCircles = 5;

  const positions = Array.from({ length: totalCircles }, (_, i) => i + 1);
  const ratingValue = Math.max(
    1,
    Math.min(product.aciditySweetnessRatio || 1, totalCircles),
  );

  return (
    <div
      className="bg-secondary/20 font-secondary hover:bg-base-100 relative flex w-full cursor-pointer overflow-hidden rounded-xl pt-3 shadow-lg transition-all duration-150 hover:scale-95"
      onClick={() => navigate(`/juices/${product.primaryName}`)}
    >
      <div className="badge badge-primary font-primary md:badge-lg absolute top-1 right-1 min-w-24 leading-0 capitalize md:top-2 md:right-2 md:rounded-lg">
        {product.category}
      </div>

      <img
        src={product.images[0]}
        alt={product.name}
        width="144px"
        className="-ml-6 w-36 md:ml-0 lg:w-40"
      />
      <div className="relative -ml-6 flex w-full grow flex-col py-5 pr-5 md:ml-0">
        <h6 className="text-lg font-extralight capitalize md:text-lg">
          {product.secondaryName}
        </h6>
        <h4 className="text-secondary text-2xl font-semibold capitalize md:text-2xl">
          {product.primaryName}
        </h4>
        <p className="text-secondary font-primary mt-2 text-sm">
          {product.subtitle}
        </p>
        <div className="font-primary text-base-content mt-2 flex gap-2 text-sm font-semibold capitalize">
          <p>acidity</p>
          <div className="flex items-center gap-0.5">
            {positions.map((position) => {
              const isSelected = position === ratingValue;
              return (
                <span
                  key={position}
                  className={clsx(
                    "border-base-content inline-block h-3 w-3 rounded-full border leading-0 md:h-4 md:w-4",
                    {
                      "bg-primary border-primary": isSelected,
                    },
                  )}
                ></span>
              );
            })}
          </div>
          <p>sweetness</p>
        </div>

        <div className="mt-auto flex items-end justify-end">
          <button
            className={`btn btn-primary btn-sm font-primary focus-visible:ring-primary flex items-center gap-2 outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 ${matches ? "" : "btn-circle rounded-full"}`}
            onClick={(e) => handleAddToCart(e, setCart, product, 1, notify)}
          >
            {matches ? (
              <>
                <PlusCircle className="h-5 w-5 md:h-6 md:w-6" />
                <span>Add to Cart </span>
              </>
            ) : (
              <Plus className="h-5 w-5 md:h-6 md:w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleJuice;
