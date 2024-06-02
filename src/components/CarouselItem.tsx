import { CarouselItemProps } from 'types/types';
import { getImageUrl } from 'utils/utils';

const CarouselItem: React.FC<CarouselItemProps> = ({
  keyString,
  title,
  linkName,
  linkURL,
  imageLarge,
  imageTablet,
  imageDefault,
}) => {
  return (
    <li
      key={keyString}
      id={`slider_${keyString}-item`}
      className="flex flex-col sm:block relative"
    >
      {/* I dont like this. #image_link should be able to be the main link for the li tag, but somewhere, the slider
      settings sets static and breaks the absolute */}
      <a className="image_link_large text-xl" href={linkURL}></a>
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
          id="image_link"
          className="text-xl lg:absolute inset-0 z-[99999]"
          href={linkURL}
        >
          <div className="relative">
            <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
            <span className="sm:hidden pl-2 text-blue-500 hover:text-blue-700 underline ">
              {linkName}
            </span>
          </div>
        </a>
      </div>
      <picture>
        <source media="(min-width: 960px)" srcSet={getImageUrl(imageLarge)} />
        <source media="(min-width: 640px)" srcSet={getImageUrl(imageTablet)} />
        <img src={getImageUrl(imageDefault)} />
      </picture>
    </li>
    // </div>
  );
};

export default CarouselItem;
