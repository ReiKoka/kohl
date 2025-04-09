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
        className="relative md:mx-auto"
        aria-label={`Go to slide ${index + 1}`}
      >
        <img
          src={slide}
          alt={`img-${index + 1}`}
          className={`border-secondary ${selected ? "shadow-custom shadow-secondary animate-jump animate-once" : ""} rounded-lg border ${index === 0 ? "ml-auto aspect-auto max-h-16 md:max-h-22" : "h-16 md:h-22"}`}
        />
        <span
          className={`absolute inset-0 block ${selected ? "" : "animate-fade rounded-lg bg-black/40"} hover:bg-black/0`}
        ></span>
      </button>
    </div>
  );
};
