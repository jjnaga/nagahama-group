import { HighlightsProps } from 'types/types';
import HighlightCard from 'components/HighlightCard';
import { useAppContext } from 'context/Provider';

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  const { language } = useAppContext();

  return (
    <section id="highlights_wrapper" className="mt-16">
      <div id="highlights_wrapper_inner" className="px-2 sm:px-4">
        <div
          id="highlights_header"
          className="mb-8 flex flex-col align-center items-center"
        >
          <h2 className="text-3xl">
            {language === 'en' ? 'Highlight Topics' : '注目の話題'}
          </h2>
        </div>
        <ul
          id="highlights_body"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2"
        >
          {highlights.map((highlight, index) => {
            console.log('wat highlight', highlight);
            return (
              <li key={index}>
                <HighlightCard {...highlight} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
