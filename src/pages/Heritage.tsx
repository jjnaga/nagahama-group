import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Heritage = () => {
  const { headerHeight } = useAppContext();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainStyle = {
    marginTop: isLargeScreen ? `${headerHeight}px` : '0',
  };

  const timeline = [
    {
      name: 'Kana Nagahama',
      period: 'Unknown',
      description:
        'First Nagahama to land in Hawaii. A pioneer whose courage and determination laid the foundation for generations to come.',
    },
    {
      name: 'James Shingen Nagahama',
      period: '1919 - 2013',
      description:
        'A cornerstone of the family legacy. Grandfather to Jeremy James Nagahama, he shaped not just a business, but the values that would define future generations. His influence continues through his cherished middle name passed down to his grandson.',
    },
    {
      name: 'Brian Nagahama',
      period: '1957 - Present',
      description: 'My father. 50% of who I am.',
    },
    {
      name: 'Jeremy James Nagahama',
      period: '1997 - Present',
      description: 'Current CEO of Nagahama Group',
      future: [
        { year: 2025, event: 'Launch of Nagahama Tech Division' },
        { year: 2028, event: 'Expansion into quantum computing' },
        { year: 2030, event: 'First trillion-dollar valuation' },
        { year: 2035, event: 'Mars colonization partnership' },
        { year: 2040, event: 'Clean energy revolution' },
        { year: 2050, event: 'Ten trillion dollar valuation achieved' },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8" style={mainStyle}>
      <h1 className="text-4xl font-bold mb-12 text-center">Nagahama Legacy</h1>

      <div className="space-y-16">
        {timeline.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="border-l-4 border-blue-600 p-6 md:p-8">
              <div className="flex justify-between items-baseline mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {leader.name}
                </h2>
                <span className="text-gray-500">{leader.period}</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">{leader.description}</p>

              {leader.future && (
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Future Milestones
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {leader.future.map((milestone) => (
                      <div
                        key={milestone.year}
                        className="bg-gray-50 p-4 rounded-md"
                      >
                        <span className="text-blue-600 font-semibold">
                          {milestone.year}
                        </span>
                        <p className="text-gray-700 mt-1">{milestone.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Heritage;
