import { useMediaQuery } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Dasboard from "../dashboard/dashboard";
import LeftBar from "../leftbar/leftbar";
import "./style.css";

export default function Layout(props) {
  const { isAsideOpen, setIsAsideOpen, isLeftBarOpen, setIsLeftBarOpen } =
    props;
  const matches = useMediaQuery("(min-width:1024px)");
  return (
    <div className="w-full layout relative">
      <LeftBar isLeftBarOpen={isLeftBarOpen} />
      {!matches ? (
        <div
          className={`md:hidden absolute w-screen h-screen z-30 bg-black opacity-20 ${
            isLeftBarOpen || isAsideOpen ? "block" : "hidden"
          }`}
          onClick={
            isLeftBarOpen || isAsideOpen
              ? () => {
                  setIsLeftBarOpen(false);
                  setIsAsideOpen(false);
                }
              : null
          }
        ></div>
      ) : (
        ""
      )}
      <Header
        isLeftBarOpen={isLeftBarOpen}
        setIsLeftBarOpen={setIsLeftBarOpen}
        setIsAsideOpen={setIsAsideOpen}
        isAsideOpen={isAsideOpen}
      />
      <Dasboard
        isLeftBarOpen={isLeftBarOpen}
        setIsLeftBarOpen={setIsLeftBarOpen}
        isAsideOpen={isAsideOpen}
        setIsAsideOpen={setIsAsideOpen}
      />
    </div>
  );
}
