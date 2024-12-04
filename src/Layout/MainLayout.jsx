import { Outlet } from "react-router";
import { Navbar } from "../Components/Navbar";

export const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
