import React from "react";
import { ReactComponent as Avatar} from "../../assets/avatars/profile.svg";

export default function Profile() {
  return <div className="p-2">
    <span className="sr-only">Profile</span>
    <div className="flex justify-center items-center">
      <Avatar className="w-8 h-8 md:w-11 md:h-11"/>
    </div>
    <p className="text-black text-xs md:text-sm text-center mx-0 mt-2 p-0 font-semibold">Prabhatsinh Rathod</p>
    <p className="text-black opacity-50 text-xs text-center font-medium p-0 mx-0 my-1">UI UX Designer</p>
  </div>  
}