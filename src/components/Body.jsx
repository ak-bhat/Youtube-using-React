import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {menuToggle && <Sidebar />}
      <Outlet/>
    </div>
  );
};

export default Body;
