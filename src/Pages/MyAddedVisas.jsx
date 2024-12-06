import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Title } from "../Components/Title";
import { MyVisaCard } from "../Components/MyVisaCard";

export const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [userAddedVisas, setUserAddedVisas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allVisa?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAddedVisas(data);
      });
  }, [user.email]);
  return (
    <div className="w-9/12 mx-auto my-20 lato">
      <Title title={"My Added Visas"}></Title>
      <div className="space-y-6 mt-10">
        {userAddedVisas.map((myVisa, index) => (
          <MyVisaCard myVisa={myVisa} key={index}></MyVisaCard>
        ))}
      </div>
    </div>
  );
};
