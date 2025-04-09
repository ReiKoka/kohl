function JuiceDescription({ product }) {
  return (
    <p className="font-secondary text-secondary my-4 text-center text-xs text-balance lg:text-left lg:text-wrap">
      {product.descriptionMain}
    </p>
  );
}

export default JuiceDescription;
