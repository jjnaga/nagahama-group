import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from 'context/Provider';
import linksDataJSON from 'data/links.json';
import {
  faTiktok,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const { language } = useAppContext();

  const { links: linksData } = linksDataJSON;
  return (
    <footer className="Footer text-zinc-50 text-lg">
      <div className="Footer-Inner px-2 md:px-8 lg:px-16 lg:mx-32">
        <div className="Footer-Upper hidden sm:block py-12 border-b-2">
          <nav>
            <ul className="Footer-Utility flex flex-row flex-wrap justify-center align-center text-xl font-extralight">
              {linksData.map((link, index) => (
                <li key={index} className="mt-2 mx-5">
                  <a href={link.url} className="">
                    <span>
                      {language === 'en' ? link.title : link.title_jp}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="Footer-Lower py-10">
          <ul className="Footer-Utility flex flex-col items-center text-xl font-extralight">
            <li className="mt-5">
              <a href={'/terms'} className="">
                <span>{language === 'en' ? 'Terms of Use' : '利用規約'}</span>
              </a>
            </li>
            <li className="mt-5">
              <a href={'/privacy'} className="">
                <span>
                  {language === 'en' ? 'Privacy Policy' : '個人情報保護方針 '}
                </span>
              </a>
            </li>
            <li className="mt-5">
              <a href={'/social'} className="">
                <span>
                  {language === 'en'
                    ? 'Social Media Policy'
                    : 'ソーシャルメディアポリシ'}
                </span>
              </a>
            </li>
            <li className="mt-5">
              <a href={'/sitemap'} className="">
                <span>{language === 'en' ? 'Sitemap' : 'サイトマップ'}</span>
              </a>
            </li>
            {/* {linksData.map((link, index) => (
              <li key={index} className="mt-5">
                <a href={link.url} className="">
                  <span>{language === 'en' ? link.title : link.title_jp}</span>
                </a>
              </li>
            ))} */}
          </ul>
          <ul className="Footer-Socials mt-8 flex flex-row items-center justify-center w-full">
            <li className="text-5xl mr-4">
              <a href="https://www.tiktok.com/@jeremynagahama">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
            <li className="text-5xl mx-4">
              <a href="https://x.com/sensanders?lang=en">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="text-5xl ml-4">
              <a href="https://www.youtube.com/@JJN45321">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
          <div className="Footer-Brand mt-8">
            <p className="text-center text-2xl">NAGAHAMA Group</p>
            <p className="text-center text-xs">
              <small className="">
                © 1996-<span className="text-center">2024</span> NAGAHAMA
                group.
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
