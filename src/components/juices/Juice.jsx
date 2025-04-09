import { useLocation } from "react-router";
import productsData from "../../db/data.json";
import Loader from "../ui/Loader";
import JuiceCarousel from "./JuiceCarousel";
import clsx from "clsx";
import { normalizeString } from "../../utils/helpers";
import { Check } from "@phosphor-icons/react";

function Juice() {
  const location = useLocation();
  const searchParam = normalizeString(location.pathname.split("/").at(2));
  console.log(searchParam);
  const product = productsData.products.find(
    (item) => normalizeString(item.primaryName) === searchParam,
  );

  if (!product) return <Loader />;

  console.log(product);

  // Slider
  const slides = product.images;
  const options = { loop: true };

  const totalCircles = 5;
  const positions = Array.from({ length: totalCircles }, (_, i) => i + 1);
  const ratingValue = Math.max(
    1,
    Math.min(product.aciditySweetnessRatio || 1, totalCircles),
  );

  return (
    <div className="flex h-full flex-col gap-0 lg:grid lg:grid-cols-[2fr_1fr]">
      <div className="flex h-[58%] flex-col md:h-1/2 md:flex-row-reverse lg:mt-4">
        <JuiceCarousel slides={slides} options={options} />
      </div>

      <div className="font-secondary lg:bg-base-200 border-secondary h-full grow px-4 pt-2 pb-4 md:h-fit md:rounded-xl lg:m-4 lg:border">
        {/* Secondary Title */}
        <h6 className="text-center text-lg font-thin capitalize md:text-lg lg:text-left">
          {product.secondaryName}
        </h6>

        {/* Primary Title */}
        <h4 className="text-secondary text-center text-2xl font-semibold capitalize md:text-3xl lg:text-left">
          {product.primaryName}
        </h4>

        {/* Subtitle */}
        <p className="text-secondary font-primary pt-2 text-center text-xs md:text-sm lg:text-left">
          {product.subtitle}
        </p>

        {/* Description */}
        <p className="font-secondary text-secondary my-4 text-center text-xs text-balance lg:text-left lg:text-wrap">
          {product.descriptionMain}
        </p>

        {/* Acidity Ratio */}
        <div className="font-primary text-base-content mt-2 flex justify-center gap-2 text-xs font-medium capitalize md:text-sm">
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

        {/* Features */}
        <ul className="my-4 flex w-full flex-wrap justify-center gap-2">
          {product.features.map((feature, index) => (
            <li
              className={`badge badge-outline badge-neutral flex w-fit justify-start text-xs`}
            >
              <Check className="fill-primary h-4 w-4" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>

        {/* Accordion */}
        <div className="join join-vertical border-secondary rounded-lg border">
          <div className="collapse-arrow join-item collapse">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">Description</div>
            <div className="collapse-content text-xs">
              {product.descriptionSub}
            </div>
          </div>
          <div className="collapse-arrow join-item border-base-300 collapse">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title focus-within::text-primary font-semibold">
              Highly recommended:
            </div>
            <div className="collapse-content text-xs">
              {product.foodPairing}
            </div>
          </div>
          <div className="collapse-arrow join-item border-base-300 collapse">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Directions of use
            </div>
            <div className="collapse-content text-sm">
              {product.directionsOfUse}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Juice;
