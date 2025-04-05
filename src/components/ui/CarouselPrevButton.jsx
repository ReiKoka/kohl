import { ArrowArcLeft } from "@phosphor-icons/react";

export const CarouselPrevButton = (props) => {
  const { ...restProps } = props;

  return (
    <button
      className="focus-visible:ring-primary bg-base-100/70 btn-lg group absolute top-1/2 left-3 z-20 -translate-y-1/2 cursor-pointer rounded-full p-2 md:p-2.5 shadow-lg transition-all duration-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-0 active:scale-75 lg:p-4 lg:left-4"
      type="button"
      {...restProps}
    >
      <ArrowArcLeft className="fill-base-content group-hover:fill-primary w-6 h-6 md:w-[26px] md:h-[26px]" />
    </button>
  );
};
