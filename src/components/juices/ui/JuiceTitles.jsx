function JuiceTitles({product}) {
  return (
    <>
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
    </>
  );
}

export default JuiceTitles;
