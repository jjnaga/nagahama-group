import { CarouselItemProps } from 'types/types';

const CarouselItem: React.FC<CarouselItemProps> = ({
  keyString,
  title,
  linkName,
  imageLarge,
  imageTablet,
  imageDefault,
}) => {
  return (
    <li
      key={keyString}
      id={`slider_${keyString}-item`}
      className="flex flex-col sm:block"
    >
      <div
        id={`slider_${keyString}-body`}
        className="order-2 flex flex-col items-center sm:hidden pb-16 px-5 py-10 bg-slate-100 space-y-4"
      >
        <div
          id={`slider_${keyString}-body`}
          className="text-3xl font-bold tracking-tight"
        >
          {title}
        </div>
        <a
          className="inline-block relative sm:absolute sm:top-0 sm:left-0 text-xl"
          href="/heritage"
        >
          {/* <span className="absolute top-1/2 -left-2 transform  rotate- border-solid border-r-2 border-b-2 border-blue-600 w-2 h-2"></span> */}
          <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
          <span className="sm:hidden pl-2 text-blue-500 hover:text-blue-700 underline ">
            {linkName}
          </span>
        </a>
      </div>
      <picture>
        <source media="(min-width: 960px)" srcSet={imageLarge} />
        <source media="(min-width: 640px)" srcSet={imageTablet} />
        <img src={imageDefault} />
      </picture>
    </li>
    // </div>
  );
};

export default CarouselItem;
