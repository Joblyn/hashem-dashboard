import React from "react";
import OngoingProjects from "../../components/ongoingProjects";
import ProgressStats from "../../components/progressStats";
import Tasks from "../../components/tasks";

export default function ProjectsAndStats() {
  return (
    <section className="p-2 px-3 bg-white h-[calc(100vh-4rem)] flex flex-col">
      <OngoingProjects />
      <Tasks />
      <ProgressStats />   
    </section>
  );
}
