import { Title } from "../Components/Title";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";

export const MyAppliedVisa = () => {
  const { user } = useContext(AuthContext);
  const [myAppliedVisas, setMyAppliedVisas] = useState([]);
  console.log(myAppliedVisas);
  useEffect(() => {
    fetch(`http://localhost:5000/appliedVisa/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAppliedVisas(data);
      });
  }, []);
  return (
    <div className="py-20">
      <Title title={"My visa application"}></Title>
      <div className="w-9/12 mx-auto mt-10">
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
                    <span className="badge badge-ghost badge-sm">
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
                    <button className="btn bg-red-500 text-white  btn-sm">
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
