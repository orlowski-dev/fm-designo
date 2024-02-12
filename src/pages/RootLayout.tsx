import { Outlet } from "react-router-dom";
import "../assets/styles/index.css";
import AppHeader from "../components/app-header";

const RootLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
