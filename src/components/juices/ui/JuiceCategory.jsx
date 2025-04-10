function JuiceCategory({ product }) {
  return (
    <div className="badge badge-primary font-primary md:badge-lg leading-0 capitalize ml-auto">
      {product.category}
    </div>
  );
}

export default JuiceCategory;
