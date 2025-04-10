function JuiceTitles({ product }) {
  return (
    <>
      {/* Secondary Title */}
      <h6 className="text-lg font-thin capitalize md:text-lg">
        {product.secondaryName}
      </h6>

      {/* Primary Title */}
      <h4 className="text-secondary text-2xl font-semibold capitalize md:text-3xl">
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
