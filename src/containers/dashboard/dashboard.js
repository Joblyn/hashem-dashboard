import React from "react";
import Header from "../../components/header";
import Aside from "../aside/aside";
import ProjectsAndStats from "../projs&stats/projs&stats";
import "./style.css";

export default function Dasboard(props) {
  const { isAsideOpen, setIsAsideOpen, isLeftBarOpen, setIsLeftBarOpen } = props;
  return (
    <div className="w-full min-h-screen bg-white">
      <Header
        isLeftBarOpen={isLeftBarOpen}
        setIsLeftBarOpen={setIsLeftBarOpen}
        setIsAsideOpen={setIsAsideOpen}
      />
      <main className="md-inner-grid relative">
        <ProjectsAndStats />
        <Aside isAsideOpen={isAsideOpen} />
      </main>
    </div>
  );
}