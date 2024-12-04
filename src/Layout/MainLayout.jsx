import { Outlet } from "react-router";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-395px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
