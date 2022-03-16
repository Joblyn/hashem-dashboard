import React from "react";
import { ReactComponent as Avatar } from "../../assets/avatars/profile.svg";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Header(props) {
  const { setIsAsideOpen, setIsLeftBarOpen } = props;
  return (
    <header className="w-full h-14 p-3 flex">
      <span className="md:hidden flex justify-center items-center">
        <Avatar onClick={() => setIsLeftBarOpen(true)} className="w-8 h-8"/>
      </span>
      <span className="sm:hidden ml-auto">
        <MenuOpenIcon onClick={() => setIsAsideOpen(true)}/>
      </span>
    </header>
  );
}
