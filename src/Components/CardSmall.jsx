import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export const CardSmall = ({ singleVisa }) => {
  const { _id, country_name, country_image, visa_type, fee } = singleVisa;
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        src={country_image}
        alt={country_name}
        className="w-full h-64 object-cover rounded-lg transition-opacity duration-300"
      />

      <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-6 transition-opacity duration-300">
        <h3 className="text-2xl font-semibold mb-2">{country_name}</h3>
        <p className="text-lg mb-4 font-medium">{visa_type}</p>
        <p className="text-sm mb-4 font-light">
          {" "}
          <span className="font-semibold">Fee:</span> {fee} $
        </p>
        <Link to={`/visaDetails/${_id}`}>
          <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light transition-colors duration-300 flex items-center">
            See Details <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};
