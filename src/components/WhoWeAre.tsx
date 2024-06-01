import { useAppContext } from 'context/Provider';
import { WhoWeAreProps } from 'types/types';
import { getImageUrl } from 'utils/utils';

const WhoWeAre: React.FC<WhoWeAreProps> = ({ data }) => {
  const { header, cards } = data;

  const { language } = useAppContext();

  return (
    <section id="who_we_are" className="mt-32">
      <div
        id="wea_inner"
        className="bg-nagahama-gradient px-5 py-3 md:pt-12 md:px-20 md:pb-32"
      >
        <div id="wea_heading" className="flex flex-col items-center mb-16">
          <h2 id="wea_heading_body" className="text-3xl">
            {language === 'en' ? header.body : header.body_jpn}
          </h2>
        </div>
        <p id="wea-lead" className="text-lg mb-10">
          {language === 'en' ? header.lead : header.lead_jpn}
        </p>
        <ul id="wea-cards" className="grid grid-cols-1 md:grid-cols-3 md:-ml-6">
          {cards.map(({ lead, header_jpn, imageURL, header, lead_jpn }) => (
            <li id="wea-card" className="flex flex-col md:ml-6 mb-10 md:mb-0">
              <div id="wea-image" className="">
                <img
                  className="h-full w-full"
                  src={getImageUrl(imageURL)}
                ></img>
              </div>
              <div id="wea-body" className="mt-3">
                <div className="wea-heading">
                  <a className="relative ml-2 text-xl" href="#">
                    <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
                    <span className=" pl-2 text-blue-500 hover:text-blue-700 underline ">
                      {language === 'en' ? header : header_jpn}
                    </span>
                  </a>
                </div>
                <p className="pt-1 lg:pt-2">
                  {language === 'en' ? lead : lead_jpn}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoWeAre;
