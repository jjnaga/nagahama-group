import { useAppContext } from 'context/Provider';
import { Highlight } from 'types/types';

const HighlightCard: React.FC<Highlight> = ({
  description,
  imageURL,
  text,
  description_japanese,
  // title,
  url,
}) => {
  const { language } = useAppContext();

  return (
    <li className="highlight_wrapper">
      <div className="highlight_header border ">
        <img src={imageURL} alt={text} />
      </div>
      <div className="highlight_body mt-8 pl-2">
        <p className="text-xl min-h-12">
          {language === 'en' ? description : description_japanese}
        </p>
        <p className="pl-2 mt-3">
          <a className="relative text-xl" href={url}>
            <span className="absolute w-2 h-2 -left-2  -translate-y-1/2 top-1/2  transform -rotate-45 border-blue-600 border-solid border-r-2 border-b-2"></span>
            <span className=" pl-2 text-blue-500 hover:text-blue-700 underline ">
              {language === 'en' ? 'Learn More' : 'もっと詳しく知る'}
            </span>
          </a>
        </p>
      </div>
    </li>
  );
};

export default HighlightCard;
