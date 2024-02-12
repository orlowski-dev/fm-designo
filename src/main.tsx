import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./pages/RootLayout";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import OurCompanyPage from "./pages/OurCompanyPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NoPage />,
    children: [
      { path: "/", element: <HomePage /> },
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
