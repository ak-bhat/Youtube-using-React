import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  
  const dispatch = useDispatch()
  
  const menuToggle = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={()=>menuToggle()}
          className="h-8 mt-3 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
        <img
          className="h-14 mx-4"
          alt="logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="mt-4 col-span-10 ml-36">
        <input
          className="w-1/2 rounded-l-full border border-gray-500 p-1"
          type="text"
        />
        <button className="bg-gray-300 rounded-r-full border border-gray-500 px-5 py-1">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="mt-2 h-10"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
