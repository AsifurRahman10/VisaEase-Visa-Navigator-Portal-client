import { useLoaderData } from "react-router";
import { CardSmall } from "../Components/CardSmall";
import { Title } from "../Components/Title";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

export const AllVisa = () => {
  const data = useLoaderData();
  const [allVisa, setAllVisa] = useState(data);
  const handleFilter = () => {
    const filteredData = allVisa.filter((visa) =>
      visa.visa_type.includes("Student visa")
    );
    setAllVisa(filteredData);
  };
  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-10 md:my-20 lato">
      <div className="mb-10 md:mb-20">
        <Title
          title={"Explore Visa Options"}
          para={
            "Find the right visa for travel, study, work, or business. Get essential details and apply with ease through our VisaEase"
          }
        ></Title>
        <div className="flex justify-end">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-primary text-white px-10 text-lg rounded-none"
            >
              Filter By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#f5f5f7] z-[1] w-full p-2 shadow text-black rounded-none"
            >
              <button onClick={handleFilter}>
                <li>
                  <a>
                    <FaFilter /> Student Visa
                  </a>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allVisa.map((singleVisa) => (
          <CardSmall key={singleVisa._id} singleVisa={singleVisa}></CardSmall>
        ))}
      </div>
    </div>
  );
};
