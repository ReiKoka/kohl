function SingleInfographic({ icon: Icon, title, text }) {
  return (
    <div className="mb-3 flex flex-1/3 flex-col items-center justify-center md:mb-0 md:flex-1/6 md:pt-4 md:pb-0 xl:flex-1/3">
      <div className="border-secondary aspect-square max-w-full rounded-full border p-3 lg:p-4 xl:p-5">
        {Icon && (
          <Icon className="fill-secondary h-9 w-9 lg:h-11 lg:w-11 xl:h-15 xl:w-15 2xl:h-20 2xl:w-20" />
        )}
      </div>
      <p className="text-secondary mt-2.5 max-w-full text-center text-[8px] leading-4 font-bold md:text-xs lg:text-sm xl:mt-5 xl:text-base xl:leading-6">
        {title}
      </p>
      {text && (
        <p className="font-secondary text-secondary mt-1.5 mb-10 hidden max-w-full px-2.5 text-center text-sm font-light text-balance xl:block">
          {text}
        </p>
      )}
    </div>
  );
}

export default SingleInfographic;
