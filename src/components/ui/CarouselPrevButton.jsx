import { ArrowArcLeft } from "@phosphor-icons/react";

export const CarouselPrevButton = (props) => {
  const { ...restProps } = props;

  return (
    <button
      className="absolute p-2.5 rounded-full bg-base-100/70 shadow-lg active:scale-75 transition-all duration-100 btn-lg top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer lg:p-4"
      type="button"
      {...restProps}
    >
      <ArrowArcLeft size={26} />
    </button>
  );
};
