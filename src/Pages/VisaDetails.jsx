import document from "../assets/documnet.jpg";
import { useLoaderData } from "react-router";
import requirement from "../assets/requirement.png";
import { IoDocumentsOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { IoIosCheckboxOutline } from "react-icons/io";

export const VisaDetails = () => {
  const visaDetail = useLoaderData();
  const {
    country_name,
    country_image,
    visa_type,
    processing_time,
    fee,
    validity,
    application_method,
    description,
    age_restriction,
    required_documents,
  } = visaDetail;

  return (
    <div className="w-11/12 lg:w-1/2 mx-auto lato my-10 lg:my-20">
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-6">
        <div className="flex-1">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={country_image}
            alt={country_name}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            {" "}
            <span className="font-extrabold">Country</span> : {country_name}
          </h2>
          <h3 className="text-2xl font-semibold mt-4">
            Visa type :{" "}
            <span className="text-secondary font-bold">{visa_type}</span>
          </h3>
          <p className="text-2xl font-semibold mt-4">Visa overview</p>
          <p className="text-gray-500 font-medium mt-2">{description}</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mt-4">
          Visa Application Whole Process
        </h2>
        <p className="text-gray-500 mt-3">
          The visa application involves submitting forms, documents, fees, and
          biometrics, with decisions made after processing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 text-center">
          <div className="flex flex-col justify-center items-center bg-[#f5f5f7] p-6 rounded">
            <img className="w-[72px]" src={requirement} alt="" />
            <h3 className="text-xl font-bold mt-3">Ensure The Requrements</h3>
            <p className="text-lg font-medium">
              Ensure all requirements are met for a smooth visa application
              process
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#f5f5f7] p-6 rounded">
            <IoDocumentsOutline className="text-7xl text-primary" />
            <h3 className="text-xl font-bold mt-3">Collection The Documents</h3>
            <p className="text-lg font-medium">
              Collect all necessary documents to complete the visa application
              process.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#f5f5f7] p-6 rounded md:col-span-2 lg:col-span-1">
            <TfiWrite className="text-6xl lg:text-7xl text-primary" />
            <h3 className="text-xl font-bold mt-3">
              Fill Up The Required From
            </h3>
            <p className="text-lg font-medium">
              Fill out the required forms accurately to proceed with your visa
              application
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 gap-6 items-stretch">
        <div className="flex-1">
          <img className="w-full h-full object-cover" src={document} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-between grow">
          <h2 className="text-2xl font-semibold mb-4">Necessary document</h2>
          {required_documents.map((item) => (
            <div class="flex items-center space-x-2">
              <IoIosCheckboxOutline className="text-3xl text-secondary" />
              <label for="checkbox" class="text-xl text-gray-700">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto ">
          <table className="table border border-gray-300 border-collapse">
            {/* head */}
            <thead>
              <tr className="border border-gray-300">
                <th className="border border-gray-300 text-lg font-bold text-black">
                  Processing Time
                </th>
                <th className="border border-gray-300 text-lg font-bold text-black">
                  Fee
                </th>
                <th className="border border-gray-300 text-lg font-bold text-black">
                  Validity
                </th>
                <th className="border border-gray-300 text-lg font-bold text-black">
                  Application Method
                </th>
                <th className="border border-gray-300 text-lg font-bold text-black">
                  Age restriction
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="border border-gray-300">
                <td className="border border-gray-300 text-lg text-gray-500">
                  {processing_time} days
                </td>
                <td className="border border-gray-300 text-lg text-gray-500">
                  {fee} $
                </td>
                <td className="border border-gray-300 text-lg text-gray-500">
                  {validity}
                </td>
                <td className="border border-gray-300 text-lg text-gray-500">
                  {application_method}
                </td>
                <td className="border border-gray-300 text-lg text-gray-500">
                  {age_restriction} +{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <p className="text-2xl font-semibold mt-4">Visa Type : {visa_type}</p>
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
      </p> */}
      <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-lg w-full lg:w-40 h-12 overflow-hidden group mt-8">
        <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        <span className="relative z-10">Apply</span>
      </button>
    </div>
  );
};
