import { Outlet } from "react-router-dom";
import "../assets/styles/globals.scss";

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
