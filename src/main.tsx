import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./pages/RootLayout";
import NoPage from "./pages/NoPage";
import LandingPage from "./pages/LandingPage";
import OurCompanyPage from "./pages/OurCompanyPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NoPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "our-company", element: <OurCompanyPage /> },
      { path: "locations", element: <LocationsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
