import { useLoaderData } from "react-router";
import { CardSmall } from "../Components/CardSmall";
import { Title } from "../Components/Title";

export const AllVisa = () => {
  const data = useLoaderData();
  return (
    <div className="w-9/12 mx-auto my-20">
      <div className="mb-20">
        <Title
          title={"Explore Visa Options"}
          para={
            "Find the right visa for travel, study, work, or business. Get essential details and apply with ease through our VisaEase"
          }
        ></Title>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {data.map((singleVisa) => (
          <CardSmall key={singleVisa._id} singleVisa={singleVisa}></CardSmall>
        ))}
      </div>
    </div>
  );
};
