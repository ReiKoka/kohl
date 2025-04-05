import React from "react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselPrevButton } from "./ui/CarouselPrevButton";
import { CarouselNextButton } from "./ui/CarouselNextButton";

import Autoplay from "embla-carousel-autoplay";

const HowToUseCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      autoplay: false,
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gray-900/20"></div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <img
                  src={slide.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="font-secondary absolute right-0 bottom-0 left-0 bg-black/50 p-4 text-center text-lg font-normal text-base-100">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CarouselPrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <CarouselNextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </section>
  );
};

export default HowToUseCarousel;
