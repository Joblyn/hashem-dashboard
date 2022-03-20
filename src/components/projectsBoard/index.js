import React from "react";
import Avatars from "../avatars";
import ProjectCard from "../projectCard";
import { PercentageRange } from "../ranges";

export default function ProjectsBoard() {
  const horizontals = Array.from(new Array(4));
  const verticals = Array.from(new Array(12));
  return (
    <div className="p-2.5 h-56 bg-gray-600 rounded-xl">
      <div className="relative h-44 border-y border-x border-r-0 border-[rgb(0,0,0,0.03)]">
        {horizontals.map((item, id) => (<span className={`w-full border-t border-[rgb(0,0,0,0.03)] horizontal absolute`} style={{bottom:`calc(20% * ${id+1})`}} key={`horiz-${id+1}`}></span>))}
        {verticals.map((item, id) => (<span className={`h-full border-r border-[rgb(0,0,0,0.03)] vertical absolute`} style={{left:`calc(8.1% * ${id+1})`}} key={`vert-${id+1}`}></span>))}
        <div className="absolute w-full top-0 h-full bg-transparent flex">
          <div>
            <div><ProjectCard type="blue"/></div>
            <div className="pl-7"><ProjectCard type="red" /></div>
            <div><ProjectCard type="brown"/></div>
          </div>
          <Avatars />
          <PercentageRange />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="py-1 text-black text-opacity-50 text-sm capitalize font-medium flex items-center">
          <div className="w-5 h-1 rounded-md bg-blue-deep mr-1"></div> Todo
        </div>
        <div className="py-1 text-black text-opacity-50 text-sm capitalize font-medium flex items-center">
          <div className="w-5 h-1 rounded-md bg-red-deep mr-1"></div> Inprogress
        </div>
        <div className="py-1 text-black text-opacity-50 text-sm capitalize font-medium flex items-center">
          <div className="w-5 h-1 rounded-md bg-brown-deep mr-1"></div> Completed
        </div>
      </div>
    </div>
  );
  
}
