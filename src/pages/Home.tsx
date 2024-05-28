import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import Carousel from 'components/Carousel';
import carouselJSON from 'data/carousel.json';

const Home = () => {
  const { items } = carouselJSON;
  const { headerHeight } = useAppContext();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Determine if in large breakpoint.
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // set margintop to the height of header if largescreen, else set to 0.
  const mainStyle = {
    marginTop: isLargeScreen ? `${headerHeight}px` : '0',
  };

  console.log('huh', carouselJSON);

  return (
    <main style={mainStyle}>
      <div id="main_body">
        <Carousel items={items} />
        <div id="highlights" className="mt-16">
          <div id="highlights_inner" className="mx-8 px-16">
            <h2 className="flex flex-col align-center items-center text-3xl">
              Highlight Topics
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
