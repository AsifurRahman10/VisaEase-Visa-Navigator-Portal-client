import { useLoaderData } from "react-router";
import { CardSmall } from "../Components/CardSmall";
import { Title } from "../Components/Title";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const AllVisa = () => {
  const data = useLoaderData();
  const [allVisa, setAllVisa] = useState(data);
  const handleFilter = (visaType) => {
    const filteredData = data.filter((visa) =>
      visa.visa_type.includes(visaType)
    );
    setAllVisa(filteredData);
  };

  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-10 md:my-20 lato">
      <HelmetProvider>
        <Helmet>
          <title>All Visa - VisaEase</title>
        </Helmet>
      </HelmetProvider>
      <div className="mb-10 md:mb-20">
        <Title
          title={"Explore Visa Options"}
          para={
            "Find the right visa for travel, study, work, or business. Get essential details and apply with ease through our VisaEase"
          }
        ></Title>
        <div className="flex justify-end mt-6">
          <select
            id="visaType"
            name="visaType"
            className="h-10 border-2 border-primary focus:outline-none focus:border-primary text-primary rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            onChange={(e) => {
              const selectedType = e.target.value;
              if (selectedType === "All") {
                setAllVisa(data);
              } else {
                handleFilter(selectedType);
              }
            }}
          >
            <option defaultValue="All">All</option>
            <option value="Student visa">Student Visa</option>
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Official visa">Official Visa</option>
          </select>
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
