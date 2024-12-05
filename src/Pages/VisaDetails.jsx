import { FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router";

export const VisaDetails = () => {
  const visaDetail = useLoaderData();
  const {
    _id,
    country_name,
    country_image,
    visa_type,
    processing_time,
    fee,
    validity,
    application_method,
    description,
    age_restriction,
    user_email,
    required_documents,
  } = visaDetail;

  return (
    <div className="w-1/2 mx-auto lato my-20">
      <img
        className="max-h-96 w-full object-cover rounded-lg"
        src={country_image}
        alt={country_name}
      />
      <h2 className="text-3xl font-bold">
        {" "}
        <span className="font-extrabold">Country</span> : {country_name}
      </h2>
      <p className="text-2xl font-semibold mt-4">Visa overview</p>
      <p className="text-gray-500 font-medium mt-2">{description}</p>
      <p className="text-2xl font-semibold mt-4">Visa Type : {visa_type}</p>
      <p className="text-2xl font-semibold mt-4">
        Processing time : {processing_time}
      </p>
      <p className="text-2xl font-semibold mt-4">Visa Fee : {fee} $</p>
      <p className="text-2xl font-semibold mt-4">Visa Validity : {validity}</p>
      <p className="text-2xl font-semibold mt-4">
        Application Method: {application_method}
      </p>
      <p className="text-2xl font-semibold mt-4">
        Minimum age restriction : {age_restriction}
      </p>
      <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-lg w-full lg:w-40 h-12 overflow-hidden group mt-8">
        <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        <span className="relative z-10">Apply</span>
      </button>
    </div>
  );
};
