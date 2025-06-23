import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';

const Earnings = () => {
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
      <div id="main_body">Hello</div>
    </main>
  );
};

export default Earnings;
