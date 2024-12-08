import { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Swal from "sweetalert2";

export const Modal = ({
  visaDetails,
  isModalOpen,
  modalRef,
  setUserAddedVisas,
  setIsModalOpen,
}) => {
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
    required_documents,
  } = visaDetails || {};
  const [selectedValues, setSelectedValues] = useState([]);
  const [visaType, setVisaType] = useState("");
  useEffect(() => {
    if (required_documents) {
      setSelectedValues(required_documents);
    }
    if (visa_type) {
      setVisaType(visa_type);
    }
  }, [required_documents, visa_type]);
  const handleChange = (e) => {
    setVisaType(e.target.value);
  };

  const handleCheckbox = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(
        selectedValues.filter((selectedValue) => selectedValue !== value)
      );
    }
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryName = form.cName.value;
    const CountryPhoto = form.cPhoto.value;
    const processTime = form.time.value;
    const description = form.description.value;
    const ageLimit = form.ageLimit.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const updatedData = {
      countryName,
      CountryPhoto,
      processTime,
      description,
      ageLimit,
      fee,
      validity,
      applicationMethod,
      visaType,
      selectedValues,
    };
    fetch(`https://visa-ease-server-one.vercel.app/updateVisa/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setUserAddedVisas((prevDetails) =>
            prevDetails.map((visa) =>
              visa._id === _id ? { ...visa, ...updatedData } : visa
            )
          );
          setIsModalOpen(false);
          Swal.fire({
            title: "success",
            text: "You visa information has been updated",
            icon: "success",
          });
        } else {
          setIsModalOpen(false);
          Swal.fire({
            title: "No change were made",
          });
        }
      });
  };

  return (
    isModalOpen &&
    visaDetails?._id && (
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex box-border justify-center items-center">
            <div className="rounded-2xl flex w-11/12 max-w-full md:max-w-5xl md:p-5 items-center">
              <div className="mx-auto md:px-8">
                <h2 className="font-bold text-xl md:text-3xl text-primary mb-6">
                  Please update the form with the correct information.
                </h2>

                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleUpdateForm}
                >
                  <div>
                    <label className="font-medium">Country name</label>
                    <input
                      defaultValue={country_name}
                      type="text"
                      name="cName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Country Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-medium">Country image</label>
                    <input
                      defaultValue={country_image}
                      type="text"
                      name="cPhoto"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Country image"
                      required
                    />
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex-1">
                      <label className="font-medium">
                        Processing time (day){" "}
                      </label>
                      <input
                        type="number"
                        defaultValue={processing_time}
                        name="time"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Processing time"
                        required
                      />
                    </div>
                    {/* options */}
                    <div className="flex-1 w-full relative">
                      <label className="font-medium"> Visa Type</label>
                      <select
                        required
                        onChange={handleChange}
                        defaultValue={visa_type}
                        className="select-bordered mt-1 h-10 w-full rounded border bg-gray-50 px-4 appearance-none"
                      >
                        <option value="" disabled>
                          Visa Type
                        </option>
                        <option value="Tourist visa">Tourist visa</option>
                        <option value="Student visa">Student visa</option>
                        <option value="Official visa">Official visa</option>
                      </select>
                      <div className="absolute top-12 right-3 transform -translate-y-1/2 text-gray-500">
                        <IoMdArrowDropdown size={30} />
                      </div>
                    </div>
                  </div>
                  <label className="font-medium">Required documents</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-2 mt-1">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox "
                        value="Valid passport"
                        defaultChecked={required_documents?.includes(
                          "Valid passport"
                        )}
                        onChange={handleCheckbox}
                      />
                      <span>Valid passport</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value="Visa application form"
                        defaultChecked={required_documents?.includes(
                          "Visa application form"
                        )}
                        onChange={handleCheckbox}
                      />
                      <span>Visa application form</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value="Recent passport-sized photograph"
                        defaultChecked={required_documents?.includes(
                          "Recent passport-sized photograph"
                        )}
                        onChange={handleCheckbox}
                      />
                      <span>Recent passport-sized photograph</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value="Proof of financial means"
                        defaultChecked={required_documents?.includes(
                          "Proof of financial means"
                        )}
                        onChange={handleCheckbox}
                      />
                      <span>Proof of financial means</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value="Proof of accommodation"
                        defaultChecked={required_documents?.includes(
                          "Proof of accommodation"
                        )}
                        onChange={handleCheckbox}
                      />
                      <span>Proof of accommodation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value="Travel itinerary"
                        defaultChecked={required_documents?.includes(
                          "Travel itinerary"
                        )}
                        onChange={handleCheckbox}
                      />
                      <span>Travel itinerary</span>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="font-medium">Description</label>
                    <br />
                    <textarea
                      required
                      className="textarea textarea-bordered w-full mt-1 bg-gray-50"
                      placeholder="Enter visa Description"
                      name="description"
                      defaultValue={description}
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <div className="flex-1">
                      <label className="font-medium">Age restriction</label>
                      <input
                        defaultValue={age_restriction}
                        type="number"
                        name="ageLimit"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter minimum age for apply"
                      />
                    </div>
                    <div className="flex-1 w-full">
                      <label className="font-medium">Fee $</label>
                      <input
                        required
                        defaultValue={fee}
                        type="number"
                        name="fee"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter Fee"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="font-medium">Validity</label>
                    <input
                      defaultValue={validity}
                      required
                      type="text"
                      name="validity"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter visa validity"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-medium">Application_method</label>
                    <input
                      required
                      defaultValue={application_method}
                      type="text"
                      name="applicationMethod"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Ex - online, offline, embassy"
                    />
                  </div>

                  <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-xl w-full overflow-hidden group">
                    <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10">Update Visa</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-action justify-center mt-0">
            <form method="dialog">
              <button className="relative px-10 btn bg-primary text-white font-bold text-lg lato rounded-xl w-full overflow-hidden group">
                <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Close</span>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    )
  );
};
