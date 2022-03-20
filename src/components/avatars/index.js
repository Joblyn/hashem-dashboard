import React from "react";
import { ReactComponent as FirstAvatar } from "../../assets/avatars/avatar1.svg";
import { ReactComponent as SecondAvatar } from "../../assets/avatars/avatar2.svg";
import { ReactComponent as ThirdAvatar } from "../../assets/avatars/avatar3.svg";
import "./style.css";

export default function Avatars() {
  return (
    <div className="p-1 flex justify-center items-center border border-purple-avstart rounded-3xl border-gradient h-fit absolute top-[40%] left-[65%]">
      <span><FirstAvatar className="w-6 h-6 mx-1"/></span>
     <span><SecondAvatar className="w-6 h-6 mx-1"/></span>
      <span><ThirdAvatar className="w-6 h-6 mx-1"/></span> 
    </div>
  )
}