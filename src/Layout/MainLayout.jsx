import { Outlet } from "react-router";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const MainLayout = () => {
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
