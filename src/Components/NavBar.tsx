import { useContext } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { DarkModeContext } from "../App";
import { slide } from "../util/slide";
import { Btn } from "./Btn";

export const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="fixed left-full -translate-x-full z-20 hidden lg:block">
      <div className="flex flex-col justify-between items-center h-screen p-4">
        <Btn onClick={() => slide("up")} rounded>
          <AiOutlineArrowUp />
        </Btn>
        {/*  <ul className="flex flex-col items-center gap-4">
          <Btn rounded>
            <AiOutlineHome />
          </Btn>
          {darkMode ? (
            <Btn rounded onClick={() => toggleDarkMode(false)}>
              <BsSun />
            </Btn>
          ) : (
            <Btn rounded onClick={() => toggleDarkMode(true)}>
              <BsMoon />
            </Btn>
          )}
        </ul> */}
        <Btn rounded onClick={() => slide("down")}>
          <AiOutlineArrowDown />
        </Btn>
      </div>
    </nav>
  );
};