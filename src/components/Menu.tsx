import { MdOutlineClose } from "react-icons/md";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { BackgroundColorContext } from "../App";

interface props {
  toggleFunction: (func: () => void) => void;
}

const Menu = ({ toggleFunction }: props) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const bgColor = useContext(BackgroundColorContext);
  const isDark = bgColor === "#111111";
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  toggleFunction(toggleMenu);

  return (
    <>
      <div
        className={`${
          menuOpened ? "w-full" : "w-0"
        } duration-500 fixed flex justify-center items-center top-0 right-0 bottom-0 overflow-hidden ${
          isDark ? "bg-[#333333]" : "bg-[#dddddd]"
        } z-10 sm:hidden`}
      >
        <MdOutlineClose
          onClick={() => toggleMenu()}
          className="absolute top-10 right-10 text-4xl select-none"
        />
        <Navbar className="flex-col items-center gap-10" />
      </div>
    </>
  );
};
export default Menu;
