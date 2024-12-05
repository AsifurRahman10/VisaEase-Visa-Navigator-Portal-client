import { Outlet } from "react-router";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { HashLoader } from "react-spinners";

export const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        {" "}
        <HashLoader size={100} />
      </div>
    );
  }
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
