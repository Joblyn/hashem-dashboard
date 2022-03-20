import React from "react";
import { ReactComponent as Avatar } from "../../assets/avatars/profile.svg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Search from "../search";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import "./style.css";

export default function Header(props) {
  const {  isLeftBarOpen, setIsAsideOpen, setIsLeftBarOpen } = props;
  return (
    <header
      className={`h-16.5 px-3 py-2 bg-white md:pl-6 lg:pl-6 flex flex-row items-center fixed top-0 ${isLeftBarOpen ? "z-20" : "z-40"} w-screen lg:w-[calc(100vw-16rem)] lg:ml-68`}
    >
      <span className="lg:hidden flex justify-center items-center">
        <Avatar onClick={() => setIsLeftBarOpen(true)} className="w-7 h-7" />
      </span>
      <div className="flex flex-row gap-6 sm:gap-6 md:gap-10 lg:gap-16 items-center ml-3 lg:ml-0">
        <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl capitalise text-black">
          Dashboard
        </span>
        <div className="flex gap-4 h-8 md:h-11">
          <Search />
          <div className="w-8 md:w-11 h-full text-sm text-black text-opacity-20 flex justify-center items-center border-dashed border rounded-md border-[rgba(0,0,0,0.2)] text-center cursor-pointer">
            +
          </div>
        </div>
      </div>
      <div className="ml-auto">
        {/* {!matches ? ( */}
        <span className="sm:hidden">
          <MenuOpenIcon
            onClick={() => setIsAsideOpen((prevState) => !prevState)}
          />
        </span>
        {/* ) : ( */}
        <div className="flex-row gap-6 items-center w-fit hidden sm:flex pr-6">
          <span className="p-3 shadow-2.5xl rounded-sm cursor-pointer">
            <span className="relative">
              <span
                className="indicator bg-[#DF0000] w-2.5 h-2.5 rounded-full absolute -top-[0.0795rem] -right-[1.4rem] border-white border-2"
              ></span>
              <Bell className="w-6 h-6 ring_animation" />
            </span>
          </span>
          <span className="p-3 shadow-2.5xl rounded-sm cursor-pointer">
            <span>
              <Settings className="w-6 h-6" />
            </span>
          </span>
        </div>
        {/* )} */}
      </div>
    </header>
  );
}
