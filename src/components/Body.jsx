import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {menuToggle && <Sidebar />}
      <MainContainer />
    </div>
  );
};

export default Body;
