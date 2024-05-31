import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import Carousel from 'components/Carousel';
import carouselJSON from 'data/carousel.json';
import highlightsJSON from 'data/highlights.json';
import Highlights from 'components/Highlights';
import { getImageUrl } from 'utils/utils';

const Home = () => {
  const { items } = carouselJSON;
  const { highlights } = highlightsJSON;
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

  return (
    <main style={mainStyle}>
      <div id="main_body">
        <Carousel items={items} />
        <Highlights highlights={highlights} />
        <section id="who_we_are" className="mt-32">
          <div
            id="wea_inner"
            className="bg-nagahama-gradient pt-12 px-20 pb-32"
          >
            <div id="wea_heading" className="flex flex-col items-center mb-16">
              <h2 id="wea_heading_body" className="text-3xl">
                Who We Are
              </h2>
            </div>
            <p id="wea-lead" className="text-lg mb-10">
              As a global conglomerate, our presence in the technology sector is
              transforming the world. Through cutting-edge innovations in AI,
              IoT, and renewable energy, we are revolutionizing industries,
              enhancing connectivity, and empowering individuals worldwide. Our
              commitment to sustainable practices ensures that our technological
              advancements benefit society and the planet, driving progress and
              creating a brighter future for all.
            </p>
            <ul id="wea-cards" className="grid grid-cols-1 md:grid-cols-3">
              <li id="wea-card" className="flex flex-col ml-6 mb-10 md:mb-0">
                <div id="wea-image" className="">
                  <img
                    className="h-full w-full"
                    src={getImageUrl('technology.jpg')}
                  ></img>
                </div>
                <div id="wea-body" className="mt-3">
                  <div className="wea-heading">
                    <a className="relative text-xl" href="#">
                      <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
                      <span className=" pl-2 text-blue-500 hover:text-blue-700 underline ">
                        Technology
                      </span>
                    </a>
                  </div>
                  <p>
                    As a global conglomerate, our presence in the technology
                    sector is transforming the world. Through cutting-edge
                    innovations in AI, IoT, and renewable energy, we are
                    revolutionizing industries, enhancing connectivity, and
                    empowering individuals worldwide. Our commitment to
                    sustainable practices ensures that our technological
                    advancements benefit society and the planet, driving
                    progress and creating a brighter future for all.
                  </p>
                </div>
              </li>
              <li id="wea-card" className="flex flex-col ml-6 mb-10 md:mb-0">
                <div id="wea-image" className="">
                  <img
                    className="h-full w-full"
                    src={getImageUrl('water.jpg')}
                  ></img>
                </div>
                <div id="wea-body" className="mt-3">
                  <div className="wea-heading">
                    <a className="relative text-xl" href="#">
                      <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
                      <span className=" pl-2 text-blue-500 hover:text-blue-700 underline ">
                        Water
                      </span>
                    </a>
                  </div>
                  <p>
                    In the water sector, we are fundamentally changing the world
                    by ensuring access to clean water for communities worldwide.
                    Through advanced water purification technologies and
                    sustainable water management practices, we are addressing
                    one of the most critical challenges facing humanity. By
                    promoting water conservation and efficient use, we are
                    safeguarding this precious resource for future generations.
                  </p>
                </div>
              </li>
              <li id="wea-card" className="flex flex-col ml-6">
                <div id="wea-image" className="">
                  <img
                    className="h-full w-full"
                    src={getImageUrl('housing.jpg')}
                  ></img>
                </div>
                <div id="wea-body" className="mt-3">
                  <div className="wea-heading">
                    <a className="relative text-xl" href="#">
                      <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
                      <span className=" pl-2 text-blue-500 hover:text-blue-700 underline ">
                        Housing
                      </span>
                    </a>
                  </div>
                  <p>
                    Our global footprint in the housing sector is reshaping
                    communities and improving living standards around the world.
                    Through innovative approaches to affordable housing and
                    sustainable urban development, we are creating inclusive,
                    resilient cities. By providing access to quality housing, we
                    are empowering individuals and families, fostering social
                    cohesion, and building a more equitable world.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
