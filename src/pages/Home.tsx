import nagahamaCastlePC from 'assets/images/nagahama_castle_pc.jpg';
import nagahamaCastleTablet from 'assets/images/nagahama_castle_tablet.jpg';
import nagahamaCastleMobile from 'assets/images/nagahama_castle_mobile.jpg';
import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';

const Home = () => {
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
        <div id="slider1" className="relative">
          {/* <img src={nagahamaCastle} alt="Nagahama Castle" /> */}
          <a
            className="block absolute top-0 left-0 w-full h-full"
            href="/heritage"
          ></a>
          <picture>
            <source media="(min-width: 960px)" srcSet={nagahamaCastlePC} />
            <source media="(min-width: 560px)" srcSet={nagahamaCastleTablet} />
            <img src={nagahamaCastleMobile} />
          </picture>
        </div>

        {Array.from({ length: 10 }, (_, index) => (
          <p className="mt-10" key={index}>
            hehe
          </p>
        ))}
      </div>
    </main>
  );
};

export default Home;
