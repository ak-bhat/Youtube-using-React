import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex mt-20">
      {menuToggle && <Sidebar />}
      <Outlet/>
    </div>
  );
};

export default Body;
