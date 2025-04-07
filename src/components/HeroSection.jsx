import HeroCarousel from "./HeroCarousel";
import img1 from "../assets/images/hero_background.webp";
import img2 from "../assets/images/hero_background_2.webp";
import img3 from "../assets/images/hero_background_3.webp";
import img4 from "../assets/images/hero_background_4.webp";
import img5 from "../assets/images/hero_background_5.webp";
import img6 from "../assets/images/hero_background_6.webp";
import img7 from "../assets/images/hero_background_7.webp";
import img8 from "../assets/images/hero_background_8.webp";
import img9 from "../assets/images/hero_background_9.webp";
import img10 from "../assets/images/hero_background_10.webp";

const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const options = { loop: true };

function HeroSection() {
  return (
    <div className="relative h-full w-full bg-cover bg-bottom">
      <HeroCarousel slides={slides} options={options} />
      <button className="btn btn-primary font-primary focus-visible:ring-primary btn-sm ring-offset-base-300 absolute right-5 bottom-5 rounded-full outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 md:btn-lg md:right-1/2 translate-x-1/2">
        View Our Juices
      </button>
    </div>
  );
}

export default HeroSection;
