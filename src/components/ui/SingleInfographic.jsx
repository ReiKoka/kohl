function SingleInfographic({ icon: Icon, title, text }) {
  return (
    <div className="mb-3 flex flex-1/3 flex-col items-center justify-center gap-2.5 md:flex-1/6 md:py-4 2xl:gap-5">
      <div className="border-secondary aspect-square max-w-full rounded-full border p-3 lg:p-4 2xl:p-5">
        {Icon && (
          <Icon className="fill-secondary h-9 w-9 lg:h-11 lg:w-11 xl:h-15 xl:w-15 2xl:h-20 2xl:w-20" />
        )}
      </div>
      <p className="text-secondary max-w-full text-center text-[8px] leading-4 md:text-xs lg:text-sm 2xl:text-base 2xl:leading-6">
        {title}
      </p>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SingleInfographic;
