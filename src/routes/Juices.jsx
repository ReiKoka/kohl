import Footer from "../components/ui/Footer";
import SingleJuice from "./../components/juices/SingleJuice";
import productsData from "../db/data.json";

function Juices() {
  const { products } = productsData;

  return (
    <>
      <h1 className="font-secondary text-secondary py-4 text-center text-2xl font-normal uppercase md:py-6 md:text-3xl lg:text-4xl">
        Our Juices
      </h1>
      <div className="grid grid-cols-1 items-center gap-4 px-4 pb-4 md:gap-6 md:px-6 md:pb-6 lg:grid-cols-2 2xl:grid-cols-3">
        {products &&
          products.map((product) => (
            <SingleJuice key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default Juices;
