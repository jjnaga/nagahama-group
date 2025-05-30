import { CarouselProps } from 'types/types';
import CarouselItem from 'components/CarouselItem';
import Slider, { Settings } from 'react-slick';

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 9000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {[...items].reverse().map((item, index) => (
        <CarouselItem key={index} {...item} keyString={String(index)} />
      ))}
    </Slider>
  );
};

export default Carousel;
