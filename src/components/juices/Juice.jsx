import { useLocation } from "react-router";
import productsData from "../../db/data.json";
import Loader from "../ui/Loader";
import JuiceCarousel from "./JuiceCarousel";
import { normalizeString } from "../../utils/helpers";
import JuiceTitles from "./ui/JuiceTitles";
import JuiceDescription from "./ui/JuiceDescription";
import JuiceAcidityRatio from "./ui/JuiceAcidityRatio";
import JuiceFeatures from "./ui/JuiceFeatures";
import JuiceExtraInfo from "./ui/JuiceExtraInfo";
import { useMediaQuery } from "usehooks-ts";

function Juice() {
  const location = useLocation();
  const matches = useMediaQuery("(min-width: 1024px");
  const searchParam = normalizeString(location.pathname.split("/").at(2));
  const product = productsData.products.find(
    (item) => normalizeString(item.primaryName) === searchParam,
  );

  if (!product) return <Loader />;

  const slides = product.images;
  const options = { loop: true };

  return (
    <div className="flex h-full flex-col gap-0 lg:grid lg:grid-cols-[2fr_1fr] lg:grid-rows-3 lg:gap-4 lg:p-4 lg:pr-4">
      <div className="flex h-[58%] flex-col md:h-1/2 md:flex-row-reverse md:p-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:gap-4 lg:p-0">
        <JuiceCarousel slides={slides} options={options} />
      </div>

      <div className="font-secondary lg:shadow-custom relative mt-4 h-full grow px-4 pb-4 md:mt-4 md:rounded-xl lg:row-span-3 lg:row-start-1 lg:mt-0 lg:h-full lg:p-4">
        <JuiceTitles product={product} />
        <JuiceDescription product={product} />
        <JuiceAcidityRatio product={product} />

        <div className="md:flex md:flex-row-reverse md:gap-4">
          <JuiceFeatures product={product} />
          {!matches && <JuiceExtraInfo product={product} />}
        </div>
      </div>

      {matches && <JuiceExtraInfo product={product} />}
    </div>
  );
}

export default Juice;
