import { Company } from 'types/types';

const CompanyRow: React.FC<Company> = ({
  contact,
  name,
  location,
  description,
}) => {
  return (
    <div className="Company py-8 border-b-2 md:flex">
      <div className="Company_Header md:w-1/3 md:pr-32 lg:w-1/3 flex flex-col">
        <span className="text-2xl font-bold text-nagahama-blue">{name}</span>
        <span className="mt-1">{description}</span>
      </div>
      <div className="Company_Body mt-2">
        <ul>
          <li className="text-lg">{location}</li>
          <li className="text-lg pt-1">TEL. {contact}</li>
        </ul>
      </div>
    </div>
  );
};
export default CompanyRow;
