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
import { Error } from "../Pages/Error";
import { MyAppliedVisa } from "../Pages/MyAppliedVisa";

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
        loader: () => fetch("https://visa-ease-server-one.vercel.app/allVisa"),
      },
      {
        path: "/addVisa",
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
        loader: () => fetch("https://visa-ease-server-one.vercel.app/allVisa"),
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
        path: "/myAppliedVisa",
        element: (
          <PrivateRoute>
            <MyAppliedVisa></MyAppliedVisa>
          </PrivateRoute>
        ),
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://visa-ease-server-one.vercel.app/allVisa/${params.id}`),
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
  {
    path: "*",
    element: <Error></Error>,
  },
]);
