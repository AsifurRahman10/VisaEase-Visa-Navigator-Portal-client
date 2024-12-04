import { useEffect, useState } from "react";
import { Title } from "./Title";
import { VisaCard } from "./VisaCard";
import { Link } from "react-router";

export const LatestVisa = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/latestVisa")
      .then((res) => res.json())
      .then((data) => {
        setLatestVisas(data);
      });
  }, []);
  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-10 md:my-20">
      <div className="my-10">
        <Title
          title={"Our Latest Visas"}
          para={
            "Discover the latest visa opportunities we've added to help you explore new destinations and unlock global possibilities."
          }
        ></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 md:mt-20 ">
        {latestVisas.map((singleVisa) => (
          <VisaCard key={singleVisa._id} singleVisa={singleVisa}></VisaCard>
        ))}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Link to={"/login"} className="">
          <button className=" relative btn bg-primary text-white font-bold text-lg lato rounded-lg w-full md:w-96 h-12 overflow-hidden group">
            <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10">See all visas</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
