import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { HashLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        {" "}
        <HashLoader size={50} />
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
