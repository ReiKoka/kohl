function JuiceFeatures({product}) {
  return (
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
  );
}

export default JuiceFeatures;
