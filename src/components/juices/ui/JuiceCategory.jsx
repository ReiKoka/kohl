function JuiceCategory({ product }) {
  return (
    <div className="badge badge-primary md:badge-lg absolute top-1 right-2 capitalize md:top-2 md:right-2">
      {product.category}
    </div>
  );
}

export default JuiceCategory;
