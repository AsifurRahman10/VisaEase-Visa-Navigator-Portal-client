import { Outlet } from "react-router";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import plane from "../../public/loading.json";

export const MainLayout = () => {
  const { loading, user } = useContext(AuthContext);
  // if (user && user.photoURL) {
  //   return (
  //     <div className="w-full min-h-screen flex justify-center items-center">
  //       {" "}
  //       <Lottie
  //         className="w-1/2 md:w-1/3 lg:w-60"
  //         animationData={plane}
  //         loop={true}
  //       />
  //       ;
  //     </div>
  //   );
  // }
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      {/* min-h-[calc(100vh-395px)] */}
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
