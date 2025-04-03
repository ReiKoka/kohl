import EmblaCarousel from "./../components/EmblaCarousel";
import img1 from "../assets/images/hero_background.webp";
import img2 from "../assets/images/hero_background_2.webp";
import img3 from "../assets/images/hero_background_3.webp";
import img4 from "../assets/images/hero_background_4.webp";
import img5 from "../assets/images/hero_background_5.webp";
import img6 from "../assets/images/hero_background_6.webp";

const slides = [img1, img2, img3, img4, img5, img6];
const options = { loop: true };

function Home() {
  return (
    <div className="font-secondary h-2/5 md:portrait:h-1/2 md:landscape:h-full lg:landscape:h-full">
      <div className="carousel-wrapper h-full">
        <EmblaCarousel slides={slides} options={options} />
      </div>
    </div>
  );
}

export default Home;
