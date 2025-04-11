function JuiceDescription({ product }) {
  return (
    <p className="font-secondary text-secondary mt-4 text-sm md:text-base">
      {product.descriptionMain}
    </p>
  );
}

export default JuiceDescription;
