import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Profile from "../../components/profile";
import Button from "../../components/button";
import Nav from "../../components/nav";

export default function LeftBar({ isLeftBarOpen }) {
  const matches = useMediaQuery("(min-width:1024px)");
  return (
    <div
      className={`p-3 h-screen bg-gray-600 absolute top-0 z-50 ${
        !matches ? (isLeftBarOpen ? "left-0" : "-left-68") : "left-0"
      } lg:fixed lg:left-0 lg:top-0 w-68 transition-all`}
    >
      <Profile />
      <div className="md:mt-1 flex justify-center">
        <Button />
      </div>
      <Nav />
    </div>
  );
}
