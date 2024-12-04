import { useEffect, useState } from "react";
import { Title } from "./Title";
import { VisaCard } from "./VisaCard";

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
    <div className="w-11/12 md:w-9/12 mx-auto my-20">
      <div className="my-10">
        <Title
          title={"Our Latest Visas"}
          para={
            "Discover the latest visa opportunities we've added to help you explore new destinations and unlock global possibilities."
          }
        ></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {latestVisas.map((singleVisa) => (
          <VisaCard key={singleVisa._id} singleVisa={singleVisa}></VisaCard>
        ))}
      </div>
    </div>
  );
};
