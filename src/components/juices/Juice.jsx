import { useLocation } from "react-router";
import productsData from "../../db/data.json";
import Loader from "../ui/Loader";
import JuiceCarousel from "./JuiceCarousel";
import { normalizeString } from "../../utils/helpers";
import JuiceTitles from "./ui/JuiceTitles";
import JuiceDescription from "./ui/JuiceDescription";
import JuiceAcidityRatio from "./ui/JuiceAcidityRatio";
import JuiceFeatures from "./ui/JuiceFeatures";

function Juice() {
  const location = useLocation();
  const searchParam = normalizeString(location.pathname.split("/").at(2));
  console.log(searchParam);
  const product = productsData.products.find(
    (item) => normalizeString(item.primaryName) === searchParam,
  );

  if (!product) return <Loader />;

  console.log(product);

  const slides = product.images;
  const options = { loop: true };

  return (
    <div className="flex h-full flex-col gap-0 lg:grid lg:grid-cols-[2fr_1fr]">
      <div className="flex h-[58%] flex-col md:h-1/2 md:flex-row-reverse lg:mt-4">
        <JuiceCarousel slides={slides} options={options} />
      </div>

      <div className="font-secondary lg:bg-base-200 border-secondary h-full grow px-4 pt-2 pb-4 md:h-fit md:rounded-xl lg:m-4 lg:border">
        <JuiceTitles product={product} />
        <JuiceDescription product={product} />
        <JuiceAcidityRatio product={product} />
        <JuiceFeatures product={product} />
        <JuiceExtraInfo product={product} />
      </div>
    </div>
  );
}

export default Juice;
