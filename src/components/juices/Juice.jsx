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
import JuiceAddToCart from "./ui/JuiceAddToCart";
import { useNav } from "./../../hooks/useNav";

function Juice() {
  const location = useLocation();
  const matches = useMediaQuery("(min-width: 1024px");
  const { navHeight } = useNav();
  const searchParam = normalizeString(location.pathname.split("/").at(2));
  const product = productsData.products.find(
    (item) => normalizeString(item.primaryName) === searchParam,
  );

  if (!product) return <Loader />;

  const slides = product.images;
  const options = { loop: true };

  const containerStyle = {
    "--nav-height": `${navHeight}px`,
  };

  return (
    <div
      style={containerStyle}
      className="flex h-full flex-col gap-0 lg:grid lg:h-[calc(100svh_-_var(--nav-height))] lg:grid-cols-[2fr_1fr] lg:grid-rows-3 lg:gap-4 lg:p-4 lg:pr-4"
    >
      <div className="flex h-[calc((100svh_-_var(--nav-height))_*_0.58)] flex-col md:flex-row-reverse md:p-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:gap-4 lg:p-0 md:portrait:h-[calc((100svh_-_var(--nav-height))_*_0.5)]">
        <JuiceCarousel slides={slides} options={options} />
      </div>

      <div className="font-secondary lg:shadow-custom relative mt-4 flex h-full grow flex-col px-4 pb-4 md:mt-4 md:rounded-xl lg:row-span-3 lg:row-start-1 lg:mt-0 lg:h-full lg:p-4">
        <JuiceTitles product={product} />
        <JuiceDescription product={product} />
        <div className="divider"></div>
        <JuiceAcidityRatio product={product} />

        <div className="mb-8 md:flex md:flex-col-reverse lg:flex-row">
          <JuiceFeatures product={product} />
          {!matches && <JuiceExtraInfo product={product} />}
        </div>
        <JuiceAddToCart product={product} />
      </div>

      {matches && <JuiceExtraInfo product={product} />}
    </div>
  );
}

export default Juice;
