import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { FaList } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin.jsx";
const Dashboard = () => {
  // TODO: get isadmin value from the database
   
  const [isAdmin]= useAdmin()
  return (
    <div className="flex">
      {/* Dahboard side bar */}
      <div className="w-64 min-h-screen bg-[#d1a054]">
        <ul className="menu text-base-content">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <IoMdMenu />
                  MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBooking">
                  <FaBook></FaBook>
                  MANAGE BOOKING
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <TiShoppingCart></TiShoppingCart>MY CART
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <VscPreview />
                  REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaList />
                  MY BOOKING
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">
              <IoMdMenu />
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 px-12 py-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
