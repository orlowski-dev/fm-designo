import { Outlet } from "react-router-dom";
import "../assets/styles/index.css";
import AppHeader from "../components/app-header";
import Footer from "../components/footer";

const RootLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
