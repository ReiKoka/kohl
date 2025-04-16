import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router";

const HeroCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      autoplay: true,
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const navigate = useNavigate();

  return (
    <section className="embla">
      <div className="bg-base-content/40 pointer-events-none absolute inset-0 z-10">
        <div className="flex h-full w-full items-center justify-center">
          <p className="font-primary text-base-200 top-1/2 left-1/2 max-w-96 text-center text-2xl font-black tracking-wide text-shadow-lg md:text-3xl lg:max-w-96 lg:text-4xl xl:max-w-none xl:text-6xl 2xl:text-7xl animate-once animate-fade-down">
            The Apple Juice from the mountains
          </p>
        </div>
        <button
          className="btn custom btn-primary font-primary focus-visible:ring-primary btn-sm ring-offset-base-300 md:btn-lg xl:btn-xl pointer-events-auto absolute right-5 bottom-5 rounded-full outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 md:right-1/2 md:translate-x-1/2"
          onClick={() => navigate("/juices")}
        >
          View Our Juices
        </button>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageUrl, index) => (
            <div className="embla__slide" key={index}>
              <div
                className="embla__slide__number"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
