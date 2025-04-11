import HeroCarousel from "./HeroCarousel";
import img1 from "../../assets/images/hero_background.webp";
import img3 from "../../assets/images/hero_background_3.webp";
import img4 from "../../assets/images/hero_background_4.webp";
import img5 from "../../assets/images/hero_background_5.webp";
import img6 from "../../assets/images/hero_background_6.webp";
import img7 from "../../assets/images/hero_background_7.webp";
import img8 from "../../assets/images/hero_background_8.webp";
import img9 from "../../assets/images/hero_background_9.webp";
import img10 from "../../assets/images/hero_background_10.webp";
import { useNav } from "../../hooks/useNav";

const slides = [img1, img3, img4, img5, img6, img7, img8, img9, img10];
const options = { loop: true };

function HeroSection() {
  const { navHeight } = useNav();

  const containerStyle = {
    "--nav-height": `${navHeight}px`,
  };

  return (
    <div
      style={containerStyle}
      className="h-[calc((100svh_-_var(--nav-height))_*_0.4)] md:portrait:h-[calc((100svh_-_var(--nav-height))_*_0.5)] sm:landscape:h-[calc(100svh_-_var(--nav-height))] lg:landscape:h-[calc(100svh_-_var(--nav-height))]"
    >
      <div className="relative h-full w-full bg-cover bg-bottom">
        <HeroCarousel slides={slides} options={options} />
      </div>
    </div>
  );
}

export default HeroSection;
