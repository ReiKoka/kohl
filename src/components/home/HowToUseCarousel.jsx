import React from "react";
import { usePrevNextButtons } from "../ui/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselPrevButton } from "../ui/CarouselPrevButton";
import { CarouselNextButton } from "../ui/CarouselNextButton";

import Autoplay from "embla-carousel-autoplay";

const HowToUseCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="pointer-events-none absolute inset-0 z-10"></div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number how__to__use">
                <div className="relative flex h-full flex-col">
                  <div className="relative flex-3/4 overflow-hidden">
                    <img
                      src={slide.img}
                      alt=""
                      className="h-full w-full object-cover md:aspect-video md:rounded-t-3xl"
                    />
                  </div>
                  <p className="bg-base-content text-secondary flex w-full flex-1/4 grow items-center justify-center p-4 text-center text-sm md:rounded-b-3xl">
                    <span>{slide.text}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CarouselPrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <CarouselNextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </section>
  );
};

export default HowToUseCarousel;
