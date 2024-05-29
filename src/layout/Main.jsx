import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
const Main = () => {
  const location = useLocation();
  const noNavbarFoooter =
    location.pathname.includes("login") || location.pathname.includes("singUp");
  return (
    <div>
      {noNavbarFoooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavbarFoooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
