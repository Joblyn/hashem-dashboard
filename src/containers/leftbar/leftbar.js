import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function LeftBar({ isLeftBarOpen }) {
  const matches = useMediaQuery("(min-width:768px)");
  return (
    <div
      className={`p-3 h-full bg-gray-600 absolute top-0 z-50 ${
        !matches ? (isLeftBarOpen ? "left-0" : "-left-64") : "left-0"
      } md:relative md:left-0 md:top-0 w-64 transition-all`}
    >

    </div>
  );
}
