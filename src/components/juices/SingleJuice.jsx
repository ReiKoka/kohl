import { Plus, PlusCircle } from "@phosphor-icons/react";
import clsx from "clsx";
import { formatPriceALL } from "../../utils/helpers";
import { useMediaQuery } from "usehooks-ts";

function SingleJuice({ product }) {
  const matches = useMediaQuery("(min-width: 768px");

  const totalCircles = 5;

  const positions = Array.from({ length: totalCircles }, (_, i) => i + 1);
  const ratingValue = Math.max(
    1,
    Math.min(product.aciditySweetnessRatio || 1, totalCircles),
  );

  return (
    <div className="shadow-custom bg-base-200 font-secondary relative flex w-full overflow-hidden rounded-xl pt-3">
      <div className="badge badge-primary md:badge-lg absolute top-0 right-0 min-w-24 capitalize md:top-2 md:right-2 md:rounded-lg">
        {product.category}
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="-ml-6 w-36 md:ml-0"
      />
      <div className="relative -ml-6 flex w-full grow flex-col py-5 pr-5 md:ml-0">
        <h6 className="text-base font-thin capitalize md:text-lg">
          {product.secondaryName}
        </h6>
        <h4 className="text-secondary text-xl font-medium capitalize md:text-2xl">
          {product.primaryName}
        </h4>
        <p className="text-secondary font-primary mt-2 text-xs md:text-sm">
          {product.subtitle}
        </p>
        <div className="font-primary text-base-content mt-2 flex gap-2 text-xs font-medium capitalize md:text-sm">
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

        <div className="mt-auto flex items-end justify-between">
          <p className="font-secondary text-base md:text-lg font-medium">
            {formatPriceALL(product.price)}
          </p>
          <button
            className={`btn btn-primary btn-sm font-primary focus-visible:ring-primary flex items-center gap-2 outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 ${matches ? "" : "btn-circle rounded-full"}`}
          >
            {matches ? (
              <>
                <PlusCircle size={18} />
                <span>Add to Cart </span>
              </>
            ) : (
              <Plus size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleJuice;
