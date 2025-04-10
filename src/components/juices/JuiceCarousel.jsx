import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./JuiceCarouselThumbsButton";
import Autoplay from "embla-carousel-autoplay";
import { handleImageLoad } from "./../../utils/helpers";

const JuiceCarousel = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      autoplay: true,
      delay: 15000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const [imageAspectRatios, setImageAspectRatios] = useState({});

  return (
    <div className="embla embla-juice">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slide, index) => {
            let dimensionClass = ""; // Start with no dimension class
            const aspectRatio = imageAspectRatios[index];

            if (aspectRatio === "portrait") {
              dimensionClass = "h-full";
            } else if (aspectRatio === "landscape") {
              // Apply w-full for landscape and square images
              dimensionClass = "w-full";
            }
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    onLoad={(event) =>
                      handleImageLoad(event, index, setImageAspectRatios)
                    }
                    className={`mx-auto h-full rounded-b-xl object-cover md:rounded-xl ${dimensionClass}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                slide={slide}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuiceCarousel;
