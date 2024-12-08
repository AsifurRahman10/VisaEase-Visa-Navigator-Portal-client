import { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [visaType, setVisaType] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
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
  const handleFormSubmit = (e) => {
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
    if (selectedValues.length < 3) {
      return Swal.fire({
        title: "Error!",
        text: "You must select at least 3 required documents",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#025cb5",
      });
    }

    const visaData = {
      country_name: countryName,
      country_image: CountryPhoto,
      visa_type: visaType,
      processing_time: processTime,
      fee: fee,
      validity: validity,
      application_method: applicationMethod,
      description: description,
      age_restriction: ageLimit,
      user_email: user?.email,
      required_documents: selectedValues,
    };
    fetch("https://visa-ease-server-one.vercel.app/addVisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Done",
            text: "You visa has been added successfully",
            icon: "success",
          });
          form.reset();
          setVisaType("");
        }
      });
  };
  return (
    <div className="py-10 lg:py-14">
      <HelmetProvider>
        <Helmet>
          <title>Add visa - VisaEase</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex box-border justify-center items-center">
        <div className="rounded-2xl flex w-11/12 md:max-w-5xl md:p-5 items-center">
          <div className="mx-auto px-8">
            <h2 className="font-bold text-xl md:text-3xl text-primary mb-6">
              Please fill the form with correct information
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="font-medium">Country name</label>
                <input
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
                  type="text"
                  name="cPhoto"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Country image"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex-1">
                  <label className="font-medium">Processing time (day) </label>
                  <input
                    type="number"
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
                    value={visaType}
                    onChange={handleChange}
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
                    onChange={handleCheckbox}
                  />
                  <span>Valid passport</span>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value="Visa application form"
                    onChange={handleCheckbox}
                  />
                  <span>Visa application form</span>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value="Recent passport-sized photograph"
                    onChange={handleCheckbox}
                  />
                  <span>Recent passport-sized photograph</span>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value="Proof of financial means"
                    onChange={handleCheckbox}
                  />
                  <span>Proof of financial means</span>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value="Proof of accommodation"
                    onChange={handleCheckbox}
                  />
                  <span>Proof of accommodation</span>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value="Travel itinerary"
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
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                <div className="flex-1">
                  <label className="font-medium">
                    Age_restriction (keep blank for N/A)
                  </label>
                  <input
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
                  type="text"
                  name="applicationMethod"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Ex - online, offline, embassy"
                />
              </div>

              <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-xl w-full overflow-hidden group">
                <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Add Visa</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
