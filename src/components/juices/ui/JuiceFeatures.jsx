import { Check } from "@phosphor-icons/react";

function JuiceFeatures({ product }) {
  return (
    <ul className="my-4 flex w-full flex-wrap justify-center gap-2 md:flex-1/3 md:flex-col md:flex-nowrap">
      {product.features.map((feature, index) => (
        <li
          key={index}
          className={`badge badge-outline border-secondary badge-neutral font-primary flex w-fit justify-start text-xs font-medium capitalize md:w-full md:border-0`}
        >
          <Check className="fill-primary h-4 w-4" />
          <p>{feature}</p>
        </li>
      ))}
    </ul>
  );
}

export default JuiceFeatures;
