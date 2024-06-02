import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { getImageUrl } from 'utils/utils';
import executives from 'data/executives';

const Executives = () => {
  const { headerHeight } = useAppContext();
  const { language } = useAppContext();
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
    <main style={mainStyle} className="pt-5 md:pt-10 px-3 md:px-10 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-nagahama-blue py-4 lg:py-6 border-y-2 border-y-slate-100">
        <span>{language === 'en' ? 'Executives' : '役員一同'}</span>
      </h2>
      <section className="MessageFromPresident flex flex-col lg:flex-row mt-10 lg:mt-16 items-center lg:items-start">
        <div className="MFP_Image lg:order-2 relative w-[300px] lg:ml-2">
          <div className="w-full">
            <img
              className="h-auto w-full"
              src={getImageUrl('jeremiah_vapey_wapey.jpeg')}
              width={728}
              height={971}
              alt=""
            />
          </div>
        </div>
        <div className="MFP_Body lg:order-1 lg:mr-2 w-full mt-3 lg:mt-0">
          <p className="text-2xl">
            {language === 'en'
              ? 'Nagahama Group forges forward safeguarding the future of humanity.'
              : '長濱グループは人類の未来を守るために前進し続けます。'}
          </p>
          <p className="text-lg mt-3">
            {language === 'en'
              ? 'Since our establishment in 1905, Nagahama Group has been dedicated to providing leading services and products for the benefit of humanity. From our humble beginnings in America to our pioneering advancements in technology across the decades, and our recent return to the Japanese market in 2017, we have consistently pushed boundaries to drive humanity forward.'
              : '1905年の設立以来、長濱グループは人類の利益のために先進的なサービスと製品を提供することに尽力してきました。アメリカでの小さな始まりから、数十年にわたる技術革新、そして2017年の日本市場への復帰まで、私たちは常に限界を超え、人類の進歩を推進してきました。'}
          </p>
          <p className="text-lg mt-3">
            {language === 'en'
              ? 'As the latest President of Nagahama Group, I am fully committed to preserving our rich heritage. More importantly, I will steer Nagahama Group into new directions, entering emerging markets and solidifying our position as a premier Japanese conglomerate.'
              : '長濱グループの新しい社長として、私はこの豊かな伝統を守り抜くことをお約束します。それだけでなく、新興市場への進出や、日本の有数のコングロマリットとしての地位を確立するために、長濱グループを新しい方向へと導いてまいります。'}
          </p>
          <p className="text-lg mt-3">
            {language === 'en'
              ? 'I wholeheartedly thank you for your support during my transition into the President role and assure you that we will listen to your feedback to the best of our ability. On behalf of Nagahama Group, we humbly thank you for your continued support.'
              : '私の社長への就任に際してのご支援に心から感謝申し上げますとともに、皆様のご意見を最大限に反映させていただきます。長濱グループを代表して、皆様の継続的なご支援に深く感謝申し上げます。'}
          </p>
          <div className="mt-5 md:mt-8 lg:mt-10">
            <p className="text-xl text-end">
              President and Representative Director
            </p>
            <p className="text-2xl font-thin  text-end">Jeremiah Nagahama</p>
          </div>
        </div>
      </section>
      <section className="Directors">
        <div className="py-10">
          <div className="Directors">
            <h2 className="Heading relative py-4 text-4xl">
              {language === 'en' ? 'Directors' : '取締役'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:-ml-6">
              {executives.executives.map(({ name, picture, title, duties }) => (
                <div className="mt-7 lg:mt-12 md:ml-6">
                  <div className="flex flex-col">
                    <div className="Exec_Image w-full">
                      <img
                        src={getImageUrl(picture)}
                        alt={`Image of ${name}`}
                      />
                    </div>
                    <div className="Exec_Body mt-5">
                      <p className="mt-1 text-lg">{title}</p>
                      <p className="mt-2 text-xl font-medium">{name}</p>
                      <p className="mt-2">{duties?.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="Officers py-10">
            <h2 className="Heading relative text-4xl py-4">
              {language === 'en' ? 'Officers' : '取締役'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:-ml-6">
              {executives.directors.map(({ name, title, duties }) => (
                <div className="mt-7 lg:mt-12 md:ml-6 border-b-2">
                  <div className="flex flex-col">
                    <p className="mt-1 text-lg">{title}</p>
                    <p className="mt-2 text-xl font-medium">{name}</p>
                    <p className="mt-2 pb-4">{duties?.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Executives;
