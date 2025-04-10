import { Check } from "@phosphor-icons/react";

function JuiceFeatures({ product }) {
  return (
    <ul className="my-4 flex w-full flex-wrap justify-center gap-2">
      {product.features.map((feature, index) => (
        <li
          key={index}
          className={`badge badge-outline border-secondary badge-neutral font-primary font-medium flex w-fit justify-start text-xs capitalize`}
        >
          <Check className="fill-primary h-4 w-4" />
          <p>{feature}</p>
        </li>
      ))}
    </ul>
  );
}

export default JuiceFeatures;
