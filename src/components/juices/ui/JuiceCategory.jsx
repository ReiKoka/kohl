function JuiceCategory({ product }) {
  return (
    <div className="badge badge-primary font-primary leading-0 md:badge-lg absolute top-1 right-2 capitalize md:top-2 md:right-2">
      {product.category}
    </div>
  );
}

export default JuiceCategory;
