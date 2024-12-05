import { createBrowserRouter } from "react-router";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { AllVisa } from "../Pages/AllVisa";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { AddVisa } from "../Pages/AddVisa";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVisas",
        element: <AllVisa></AllVisa>,
        loader: () => fetch("http://localhost:5000/allVisa"),
      },
      {
        path: "/addVisa",
        element: <AddVisa></AddVisa>,
        loader: () => fetch("http://localhost:5000/allVisa"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
