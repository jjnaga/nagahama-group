import nagahamaImage from 'assets/images/nagahama.jpg';

const HighlightCard = () => {
  const text =
    'Showcasing the New Agri Concept for the Future of Sustainable Agriculture';
  const href = '#';

  return (
    <li className="highlight_wrapper">
      <div className="highlight_header border ">
        <img src={nagahamaImage} alt={text} />
      </div>
      <div className="highlight_body mt-2 pl-2">
        <p className="text-xl">{text}</p>
        <p className="pl-2 mt-3">
          <a className="relative text-xl" href={href}>
            <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
            <span className=" pl-2 text-blue-500 hover:text-blue-700 underline ">
              Learn More
            </span>
          </a>
        </p>
      </div>
    </li>
  );
  return <p>hehe</p>;
};

export default HighlightCard;

// import { CarouselProps } from 'types/types';
// import CarouselItem from 'components/CarouselItem';
// import Slider, { Settings } from 'react-slick';

// const Carousel: React.FC<CarouselProps> = ({ items }) => {

//   return (
//     <Slider {...settings}>
//       {items.map((item, index) => (
//         <CarouselItem {...item} keyString={String(index)} />
//       ))}
//     </Slider>
//   );
// };

// export default Carousel;
