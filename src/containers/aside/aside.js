import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Aside({ isAsideOpen }) {
  const matches = useMediaQuery("(min-width:640px)");
  return (
    <aside
      className={`p-3 h-full absolute top-0 sm:relative sm:right-0 sm:top-0 min-w-98 z-50 transition-all ${
        !matches ? (isAsideOpen ? "right-0" : "-right-98") : "right-0"
      } bg-blue-deep`}
    ></aside>
  );
}
