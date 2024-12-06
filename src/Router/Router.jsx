import { createBrowserRouter } from "react-router";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { AllVisa } from "../Pages/AllVisa";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { AddVisa } from "../Pages/AddVisa";
import { PrivateRoute } from "./PrivateRoute";
import { VisaDetails } from "../Pages/VisaDetails";
import { MyAddedVisas } from "../Pages/MyAddedVisas";

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
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allVisa"),
      },
      {
        path: "/myAddedVisa",
        element: (
          <PrivateRoute>
            <MyAddedVisas></MyAddedVisas>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allVisa/${params.id}`),
      },
    ],
  },
]);
