import { ArrowArcRight } from "@phosphor-icons/react";

export const CarouselNextButton = (props) => {
  const { ...restProps } = props;

  return (
    <button
      className="absolute p-2.5 rounded-full bg-base-100/70 shadow-lg active:scale-75 transition-all duration-100 btn-lg top-1/2 right-4 -translate-y-1/2 z-10 lg:p-4 cursor-pointer"
      type="button"
      {...restProps}
    >
      <ArrowArcRight size={24} />
    </button>
  );
};
