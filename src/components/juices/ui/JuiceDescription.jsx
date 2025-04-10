function JuiceDescription({ product }) {
  return (
    <p className="font-secondary text-secondary my-4 text-sm">
      {product.descriptionMain}
    </p>
  );
}

export default JuiceDescription;
