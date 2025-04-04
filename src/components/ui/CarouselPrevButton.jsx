import { ArrowArcLeft } from "@phosphor-icons/react";

export const CarouselPrevButton = (props) => {
  const { ...restProps } = props;

  return (
    <button
      className="focus-visible:ring-primary bg-base-100/70 btn-lg group absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full p-2.5 shadow-lg transition-all duration-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-0 active:scale-75 lg:p-4"
      type="button"
      {...restProps}
    >
      <ArrowArcLeft size={26} className="fill-base-content group-hover:fill-primary" />
    </button>
  );
};
