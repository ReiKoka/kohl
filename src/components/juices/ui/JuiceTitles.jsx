import JuiceCategory from "./JuiceCategory";

function JuiceTitles({ product }) {
  return (
    <>
      {/* Secondary Title */}
      <div className="flex items-center">
        <h6 className="text-lg font-thin capitalize md:text-xl">
          {product.secondaryName}
        </h6>
        <JuiceCategory product={product} />
      </div>

      {/* Primary Title */}
      <h4 className="text-secondary text-3xl font-semibold capitalize md:text-4xl">
        {product.primaryName}
      </h4>

      {/* Subtitle */}
      <p className="text-secondary font-primary pt-2 text-xs md:text-sm">
        {product.subtitle}
      </p>
    </>
  );
}

export default JuiceTitles;
