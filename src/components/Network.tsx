import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { NetworkProps, Regions } from 'types/types';
import { getImageUrl } from 'utils/utils';
import CompanyRow from './CompanyRow';

const Network: React.FC<NetworkProps> = ({
  body,
  mapURL,
  regions,
  network,
}) => {
  const [networkKey, setNetworkKey] = useState<Regions>('default');
  const { language } = useAppContext();

  useEffect(() => {
    console.log('index changeds', networkKey);
  }, [networkKey]);

  return (
    <section className="GlobalNetwork mt-5 md:lg-mt-10 lg:mt-16  px-5 py-3 md:px-10 md:pb-20 lg:px-20 lg:pb-32">
      <div className="GlobalNetwork_Header">
        <h2 className="text-3xl text-center">
          <span className="">
            {language === 'en' ? 'Global Network' : '全球網'}
          </span>
        </h2>
        <div className="mt-6 lg:mt-10">
          <p className="text-lg">
            {language === 'en' ? body.lead : body.lead_jpn}
          </p>
        </div>
      </div>
      <div className="GlobalNetwork_Visual mt-3">
        <div
          className={`Visual_Map h-auto transform transition-transform duration-300 ease-in-out hidden
           ${networkKey === 'default' ? 'md:block md:translate-y-0' : 'hidden -translate-y-full'}`}
        >
          <div
            className="Map_Inner relative my-5 pb-[47%]"
            style={{
              backgroundImage: `url(${getImageUrl(mapURL)})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 0',
              backgroundSize: '100%',
            }}
          >
            <ul className="absolute flex flex-wrap flex-col w-full pt-10 items-center">
              {regions.map((region) => (
                <li
                  key={region.key}
                  className="w-[50%] bg-slate-200 text-2xl m-3"
                >
                  <button
                    className="relative ml-2 text-xl p-3 h-full w-full"
                    onClick={() => setNetworkKey(region.key)}
                  >
                    <p>
                      {/* <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span> */}
                      <span className=" pl-2  text-nagahama-blue hover:text-blue-700 ">
                        {region.name}
                      </span>
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Visual_List block md:hidden lg:block bg-slate-200">
          <ul className="flex flex-col px-8 py-3 md:flex-row justify-center  md:space-x-4">
            {regions.map((region) => (
              <button
                key={region.key}
                className="px-2"
                onClick={() => setNetworkKey(region.key)}
              >
                <li className="relative text-lg md:text-2xl m-2 md:m-5 text-nagahama-blue hover:text-blue-700 underline ">
                  <span className=" mr-2">{region.name}</span>
                  <span className="absolute w-2 h-2    -translate-y-1/2 top-1/2  transform rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
                </li>
              </button>
            ))}
          </ul>
        </div>
        <div className="GlobalNetwork_Information">
          <div className="Information">
            <h2 className="mt-5 text-3xl underline">
              {network[networkKey].region}
            </h2>
            <div>
              {network[networkKey].locations.map((location) => (
                <CompanyRow key={location.name} {...location} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
