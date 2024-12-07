import { Title } from "../Components/Title";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

export const MyAppliedVisa = () => {
  const { user } = useContext(AuthContext);
  const [myAppliedVisas, setMyAppliedVisas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/appliedVisa/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAppliedVisas(data);
      });
  }, []);
  const handleCancel = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/cancelVisa/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Application has been canceled");
          const newData = myAppliedVisas.filter((item) => item._id !== _id);
          setMyAppliedVisas(newData);
        }
      });
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    fetch(`http://localhost:5000/appliedVisa?searchParams=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAppliedVisas(data);
      });
  };
  return (
    <div className="py-10 lg:min-h-[calc(100vh-404px)]">
      <div className="flex w-11/12 md:w-9/12 mx-auto mt-10 justify-between items-center">
        <div>
          <Title title={"My visa application"}></Title>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black">
                <th>Country Name</th>
                <th>Visa type</th>
                <th>Processing time</th>
                <th>Fee</th>
                <th>Validity</th>
                <th>Application method</th>
                <th>Applied date</th>
                <th>Applicant's name</th>
                <th>Applicant’s email</th>
              </tr>
            </thead>
            {myAppliedVisas.map((userAppliedInfo) => (
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            className="border-2 rounded-full border-primary"
                            src={userAppliedInfo.country_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {userAppliedInfo.country_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge border-none md:badge-ghost md:badge-sm">
                      {userAppliedInfo.visa_type}
                    </span>
                  </td>
                  <td>{userAppliedInfo.processing_time} days</td>
                  <td>{userAppliedInfo.fee} $</td>
                  <td>{userAppliedInfo.validity} </td>
                  <td>{userAppliedInfo.application_method}</td>
                  <td>{userAppliedInfo.date}</td>
                  <td>{userAppliedInfo.email}</td>
                  <td>{userAppliedInfo.fullName}</td>

                  <th>
                    <button
                      onClick={() => handleCancel(userAppliedInfo._id)}
                      className="btn bg-red-500 text-white  btn-sm"
                    >
                      Cancel
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
