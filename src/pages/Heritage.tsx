import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';

const Heritage = () => {
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
    <div className="max-w-5xl mx-auto p-8" style={mainStyle}>
      <h1 className="text-4xl font-bold mb-8 text-center">
        History of the Nagahama Family
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Kana Nagahama (1887 - 1958)
        </h2>
        <p className="text-lg mb-4">
          Kana Nagahama founded Nagahama Group from humble beginnings in Hawaii.
          Initially focusing on local needs, he expanded the company into a
          statewide brand specializing in water and housing solutions. His
          leadership and vision for sustainable growth helped Nagahama Group
          establish a solid reputation throughout Hawaii. Kana served as the
          president until his death in 1958, leaving a legacy of innovation and
          community support.
        </p>
        <p className="text-lg">
          Under Kana's guidance, Nagahama Group thrived despite the challenges
          of the early 20th century. His emphasis on quality and customer
          satisfaction laid a strong foundation for future generations. Kana's
          commitment to his employees and clients alike made Nagahama Group a
          trusted name in Hawaii's business community.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          James Shingen Nagahama (1919 - 2013)
        </h2>
        <p className="text-lg mb-4">
          James Shingen Nagahama expanded upon his father's legacy by taking
          Nagahama Group to the west coast of America. Under his leadership, the
          company became a leader in water management and large-scale
          construction projects. James's strategic vision and ability to forge
          key partnerships enabled Nagahama Group to grow exponentially.
        </p>
        <p className="text-lg">
          His tenure saw the company navigate through numerous economic cycles,
          consistently emerging stronger. By the time he passed the title to his
          son Brian in 2002, James had firmly established Nagahama Group as a
          significant player in the American infrastructure sector. His legacy
          is marked by his relentless pursuit of excellence and innovation.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Brian Harumi Nagahama (1957 - Current)
        </h2>
        <p className="text-lg mb-4">
          Brian Harumi Nagahama took over in 2002 and transformed Nagahama Group
          into a tech conglomerate. He was instrumental in expanding the
          company's footprint into Asia, starting with Korea in 2010, followed
          by Hong Kong in 2012, and finally Japan in 2015. Brian's innovative
          approach and strategic investments in technology positioned Nagahama
          Group at the forefront of the industry.
        </p>
        <p className="text-lg">
          Brian's leadership marked a period of significant technological
          advancements and international growth for Nagahama Group. His efforts
          in modernizing the company's operations and diversifying its portfolio
          have made it a global powerhouse. Brian's commitment to excellence
          continues to drive the company's success.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Jeremiah Nagahama (1997 - Current)
        </h2>
        <p className="text-lg mb-4">
          In 2024, Jeremiah Nagahama took over the reins from his father, Brian.
          As the newest leader of Nagahama Group, Jeremiah aims to build upon
          the strong foundation laid by his predecessors. With a focus on
          sustainability and innovation, he is committed to steering the company
          towards new heights in the 21st century.
        </p>
        <p className="text-lg">
          Jeremiah's vision includes leveraging advanced technologies to enhance
          the company's operations and expanding its global reach. His
          leadership is expected to usher in a new era of growth and success for
          Nagahama Group, ensuring that the family legacy continues to thrive
          for generations to come.
        </p>
      </div>
    </div>
  );
};

export default Heritage;
