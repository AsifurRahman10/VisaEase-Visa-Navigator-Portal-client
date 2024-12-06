import { IoMdTime } from "react-icons/io";
import { LuCircleDollarSign } from "react-icons/lu";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
export const MyVisaCard = ({ myVisa }) => {
  const [visaDetails, setVisaDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const {
    _id,
    country_name,
    country_image,
    visa_type,
    processing_time,
    fee,
    validity,
    application_method,
  } = myVisa;
  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isModalOpen, visaDetails]);
  const handleModalData = (_id) => {
    fetch(`http://localhost:5000/allVisa/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setVisaDetails(data);
        setIsModalOpen(true);
      });
  };
  return (
    <div className="flex items-center gap-6 border rounded-lg p-6 shadow-lg bg-white">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          className="w-48 h-32 object-cover rounded-md border"
          src={country_image}
          alt={country_name}
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <div className="flex justify-between">
          {/* Info Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Country : {country_name}
            </h2>
            <h3 className="text-lg font-medium text-gray-600">
              <span className="font-semibold">Visa Type</span> : {visa_type}
            </h3>
            <div className="flex gap-4 text-gray-700">
              <p className="flex items-center gap-2 text-lg">
                <IoMdTime className="text-blue-500 text-xl" /> {processing_time}{" "}
                days
              </p>
              <p className="flex items-center gap-2 text-lg">
                <LuCircleDollarSign className="text-green-500 text-xl" /> {fee}{" "}
                $
              </p>
            </div>
            <div className="flex gap-6 text-gray-600">
              <p className="text-md font-medium">
                <span className="font-semibold">Validity</span> : {validity}
              </p>
              <p className="text-md font-medium">
                <span className="font-semibold">Application Method</span> :{" "}
                {application_method}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => handleModalData(_id)}
          className="relative bg-primary text-white text-md font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md"
        >
          <GrUpdate className="text-xl" /> Update
        </button>
        <button className="relative bg-red-600 text-white text-md font-medium py-2 px-6 rounded-md hover:bg-red-700 transition-all flex items-center gap-2 shadow-md">
          <MdDelete className="text-2xl" /> Delete
        </button>
      </div>
      <Modal
        modalRef={modalRef}
        isModalOpen={isModalOpen}
        visaDetails={visaDetails}
      ></Modal>
    </div>
  );
};
