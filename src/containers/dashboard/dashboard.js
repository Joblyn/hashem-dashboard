import React from "react";
import Aside from "../aside/aside";
import ProjectsAndStats from "../projs&stats/projs&stats";
import "./style.css";

export default function Dasboard(props) {
  const { isAsideOpen } = props;
  return (
    <div className="w-screen py-2 lg:w-[calc(100vw-16rem)] bg-white min-h-screen lg:ml-68">
      <main className="md-inner-grid relative mt-16.5">
        <ProjectsAndStats />
        <Aside isAsideOpen={isAsideOpen} />
      </main>
    </div>
  );
}
