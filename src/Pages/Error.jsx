import Lottie from "lottie-react";
import error404 from "../../public/404.json";
import { Link } from "react-router";
export const Error = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Lottie
        className="w-full md:w-1/2 lg:w-1/3"
        animationData={error404}
        loop={true}
      />
      <Link to={"/"}>
        <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-xl overflow-hidden group">
          <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10">Go back to home screen</span>
        </button>
      </Link>
    </div>
  );
};
