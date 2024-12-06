import { FaDollarSign } from "react-icons/fa";
import logo from "../../public/logo-2.png";
import Swal from "sweetalert2";
export const VisaApplyModal = ({
  isModalOpen,
  modalRef,
  user,
  handleCloseModal,
  visaDetail,
}) => {
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
  const date = new Date().toLocaleDateString() + "";
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.fName.value;
    const lastName = form.lName.value;
    const fullName = firstName + " " + lastName;
    const email = user.email;

    const applyInfo = {
      fullName,
      date,
      email,
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
    };
    fetch("http://localhost:5000/applyForVisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Congress",
            text: "You application has been send",
            icon: "success",
          });
          handleCloseModal();
        }
      });
  };
  return (
    isModalOpen &&
    user?.email && (
      <dialog ref={modalRef} className="modal w-full">
        <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg modal-box">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3">
              <img className="w-20" src={logo} alt="" />
            </div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Enter your details for apply
            </h1>
            <form onSubmit={handleApply}>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Email
              </label>
              <input
                name="email"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                defaultValue={user.email}
                readOnly
              />
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                First Name
              </label>
              <input
                name="fName"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="First Name"
                required
              />
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Last Name
              </label>
              <input
                name="lName"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="First Name"
                required
              />
              <label
                for="expiry"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Applied date
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-calendar-event"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                </div>
                <input
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  readOnly
                  defaultValue={date}
                />
              </div>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Fee
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <FaDollarSign className="mr-1" />
                </div>
                <input
                  className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  defaultValue={fee}
                  readOnly
                />
              </div>
              <div className="flex items-center justify-start w-full">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-secondary bg-primary rounded text-white px-8 py-2 text-sm">
                  Submit
                </button>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>

            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onClick={handleCloseModal}
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </dialog>
    )
  );
};
