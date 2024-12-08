import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Lottie from "lottie-react";
import plane from "../../public/loading.json";
export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Lottie
          className="w-1/2 md:w-1/3 lg:w-60"
          animationData={plane}
          loop={true}
        />
        ;
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to={"/login"}></Navigate>
    );
  }
  return <div>{children}</div>;
};
