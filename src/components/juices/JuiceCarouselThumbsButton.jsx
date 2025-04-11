import React from "react";

export const Thumb = (props) => {
  const { selected, index, onClick, slide } = props;

  return (
    <div
      className={`embla-thumbs__slide ${selected ? "opacity-100" : "opacity-50"}`}
    >
      <button
        onClick={onClick}
        type="button"
        className="group relative cursor-pointer outline-0 md:mx-auto"
        aria-label={`Go to slide ${index + 1}`}
      >
        <img
          src={slide}
          alt={`img-${index + 1}`}
          className={`${selected ? "animate-jump animate-once" : ""} rounded-lg ${index === 0 ? "ml-auto aspect-auto max-h-16 outline-0 md:max-h-22 xl:max-h-26 2xl:max-h-30" : "h-16 md:h-22 2xl:h-30"} group-focus:ring-secondary group-focus:ring-offset-base-300 group-focus:border-secondary group-focus:border group-focus:ring-2 group-focus:ring-offset-2`}
        />
        <span
          className={`absolute inset-0 block ${selected ? "" : "animate-fade rounded-lg bg-black/40"} hover:bg-primary/0 transition-all duration-150`}
        ></span>
      </button>
    </div>
  );
};
