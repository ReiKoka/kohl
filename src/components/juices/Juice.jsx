import { useLocation } from "react-router";
import productsData from "../../db/data.json";
import Loader from "../ui/Loader";
import JuiceCarousel from "./JuiceCarousel";

function Juice() {
  const location = useLocation();
  const searchParam = location.pathname.split("/").at(2);

  const product = productsData.products.find(
    (item) => item.primaryName === searchParam,
  );
  console.log(product);

  if (!product) return <Loader />;

  const slides = product.images;

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="h-1/2 flex flex-col md:flex-row-reverse">
        <JuiceCarousel slides={slides} />
      </div>
    </div>
  );
}

export default Juice;
