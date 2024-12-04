import { createBrowserRouter } from "react-router";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { AllVisa } from "../Pages/AllVisa";

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
      },
    ],
  },
]);
