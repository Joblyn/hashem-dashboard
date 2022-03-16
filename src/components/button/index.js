import React from "react";
import { ReactComponent as Meter } from "../../assets/icons/meter-white.svg";

export default function Button() {
  return (
    <a
      className="btn rounded-md px-6 py-3 m-0 bg-blue-btn hover:bg-blue-deep text-sm cursor-pointer transition-all inline-flex items-center justify-center select-none text-center font-medium text-white"
      href="#"
    >
      <Meter className="mr-2"/>
      Become a Pro
    </a>
  );
}
