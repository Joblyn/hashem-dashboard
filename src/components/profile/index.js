import React from "react";
import { ReactComponent as Avatar} from "../../assets/avatars/profile.svg";

export default function Profile() {
  return <div className="p-2">
    <span className="sr-only">Profile</span>
    <div className="flex justify-center items-center">
      <Avatar className=""/>
    </div>
    <p className="text-black text-md text-center mx-0 mt-2 p-0 font-semibold">Prabhatsinh Rathod</p>
    <p className="text-black opacity-50 text-sm text-center font-medium p-0 mx-0 my-1">UI UX Designer</p>
  </div>  
}