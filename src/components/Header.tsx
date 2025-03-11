import { useContext } from "react";
import {
  BackgroundColorContext,
  TextColorContext,
  ThemeToggleContext,
} from "../App";
import Navbar from "./Navbar";
import { MdDarkMode, MdLightMode, MdOutlineMenu } from "react-icons/md";
import Menu from "./Menu";

const Header = () => {
  const bgColor = useContext(BackgroundColorContext);
  const textColor = useContext(TextColorContext);
  const toggleTheme = useContext(ThemeToggleContext);

  const isDarkTheme = bgColor === "#111111";

  let toggleMenuFunction: () => void = () => {};

  const setToggleFunction = (func: () => any) => {
    toggleMenuFunction = func;
  };

  return (
    <div
      className="w-full h-25 text-2xl py-6"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-full mx-auto max-w-[1200px] flex justify-between px-6">
        <a className="font-bold select-none" href="">
          Artem Havryliuk
        </a>
        <Navbar className="gap-10 hidden sm:flex" />
        <div>
          {isDarkTheme ? (
            <MdLightMode
              onClick={toggleTheme}
              className="text-4xl select-none"
            />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className="text-4xl select-none"
            />
          )}
        </div>
        <MdOutlineMenu
          onClick={() => toggleMenuFunction()}
          className="inline-block sm:hidden text-4xl"
        />
      </div>
      <Menu toggleFunction={setToggleFunction} />
    </div>
  );
};

export default Header;
