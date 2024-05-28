import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import Carousel from 'components/Carousel';
import carouselJSON from 'data/carousel.json';
import HighlightCard from 'components/HighlightCard';

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

        <section id="highlights_wrapper" className="mt-16">
          <div id="highlights_wrapper_inner" className="px-2 sm:px-4">
            <div
              id="highlights_header"
              className="mb-8 flex flex-col align-center items-center"
            >
              <h2 className="text-3xl">Highlight Topics</h2>
            </div>
            <ul
              id="highlights_body"
              style={{ marginBottom: '500px' }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2"
            >
              {Array.from({ length: 4 }, (_, index) => (
                <HighlightCard />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
