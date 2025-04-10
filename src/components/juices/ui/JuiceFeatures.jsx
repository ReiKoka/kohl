import { Check } from "@phosphor-icons/react";

function JuiceFeatures({ product }) {
  return (
    <div>
      <h4 className="font-secondary text-secondary mt-4 mb-2 text-lg font-semibold">
        Features
      </h4>
      <ul className="mb-4 flex w-full flex-wrap gap-2 md:flex-1/3 md:flex-col md:flex-nowrap">
        {product.features.map((feature, index) => (
          <li
            key={index}
            className={`badge badge-outline border-secondary badge-neutral font-primary flex w-fit justify-start text-xs font-medium capitalize md:w-full md:border-0 md:px-0 lg:text-sm`}
          >
            <Check className="fill-primary h-4 w-4" />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JuiceFeatures;
