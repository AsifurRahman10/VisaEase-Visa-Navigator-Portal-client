import { CiTimer } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export const VisaCard = ({ singleVisa }) => {
  const {
    _id,
    country_name,
    country_image,
    visa_type,
    processing_time,
    fee,
    validity,
    application_method,
  } = singleVisa;
  return (
    <div className="group bg-[#f5f5f7] dark:bg-gray-300 shadow-lg rounded-lg p-6 hover:bg-primary hover:shadow-2xl space-y-4 hover:scale-105 transition-all duration-300 ease-in-out text-gray-800">
      <img
        className="w-full h-[250px] object-cover rounded-md"
        src={country_image}
        alt={`Image of ${country_name}`}
      />
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
          Country Name: {country_name}
        </h2>
        <p className="font-medium text-gray-700 group-hover:text-white">
          Visa Type: <span className="font-normal">{visa_type}</span>
        </p>
        <p className="font-medium text-gray-700 group-hover:text-white">
          Validity: <span className="font-normal">{validity}</span>
        </p>
        <p className="font-medium text-gray-700 group-hover:text-white">
          Application Method:{" "}
          <span className="font-normal">{application_method}</span>
        </p>
        <p className="font-medium text-gray-700 group-hover:text-white">
          Processing Time:{" "}
          <span className="font-normal">{processing_time}</span>
        </p>
        <p className="font-medium text-gray-700 group-hover:text-white">
          Fee: <span className="font-normal">{fee}</span>
        </p>
      </div>
      <Link to={`/visaDetails/${_id}`}>
        <button className="btn bg-secondary mt-4 text-white w-full py-2 rounded hover:bg-transparent hover:underline hover:underline-offset-4  focus:outline-none focus:ring focus:ring-secondary-dark transition-colors duration-300">
          See Details <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};
