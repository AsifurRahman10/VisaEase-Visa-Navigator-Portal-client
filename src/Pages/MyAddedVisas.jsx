import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Title } from "../Components/Title";
import { MyVisaCard } from "../Components/MyVisaCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [userAddedVisas, setUserAddedVisas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allVisa?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAddedVisas(data);
      });
  }, [user.email, userAddedVisas]);
  return (
    <div className="w-11/12 md:w-9/12 mx-auto py-10 lg:my-20 lato lg:min-h-[calc(100vh-564px)]">
      <HelmetProvider>
        <Helmet>
          <title>My added visa - VisaEase</title>
        </Helmet>
      </HelmetProvider>
      <Title title={"My Added Visas"}></Title>
      <div className="space-y-6 mt-10">
        {userAddedVisas.map((myVisa, index) => (
          <MyVisaCard
            setUserAddedVisas={setUserAddedVisas}
            myVisa={myVisa}
            key={index}
          ></MyVisaCard>
        ))}
      </div>
    </div>
  );
};
