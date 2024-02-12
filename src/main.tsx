import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./pages/RootLayout";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import DesignPage from "./pages/DesignPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NoPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "design", element: <DesignPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
