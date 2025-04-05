import { ArrowArcRight } from "@phosphor-icons/react";

export const CarouselNextButton = (props) => {
  const { ...restProps } = props;

  return (
    <button
      className="bg-base-100/70 btn-lg focus-visible:ring-primary group absolute top-1/2 right-3 z-20 -translate-y-1/2 cursor-pointer rounded-full p-2 shadow-lg transition-all duration-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-0 active:scale-75 md:p-2.5 lg:right-4 lg:p-4"
      type="button"
      {...restProps}
    >
      <ArrowArcRight className="fill-base-content group-hover:fill-primary h-6 w-6 md:h-[26px] md:w-[26px]" />
    </button>
  );
};
