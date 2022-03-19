import React, { useState } from "react";
import ProjectsBoard from "../projectsBoard";

export default function OngoingProjects() {
  const [current, setCurrent] = useState("remaining");
  return (
    <div>
      <div className="flex justify-between items-center py-2">
        <span className="capitalise text-black font-medium text-base md:text-lg">
          Ongoing Projects
        </span>
        <div className="inline-flex gap-3 relative">
          <div
            className={`w-5 h-1 rounded-md bottom-0 bg-blue-btn absolute ${
              current === "remaining"
                ? "left-[1.5rem]"
                : current === "ongoing"
                ? "left-[6.25rem]"
                : "left-[11.0rem]"
            }`}
          ></div>
          <span
            className={`py-2 w-16 ${
              current === "remaining"
                ? "text-blue-btn text-opacity-100"
                : "text-black"
            } text-opacity-50 text-xs text-center cursor-pointer hover:text-opacity-100`}
            onClick={() => setCurrent("remaining")}
          >
            Remaining
          </span>
          <span
            className={`py-2 w-16 ${
              current === "ongoing"
                ? "text-blue-btn text-opacity-100"
                : "text-black"
            } text-opacity-50 text-center text-xs cursor-pointer hover:text-opacity-100`}
            onClick={() => setCurrent("ongoing")}
          >
            Ongoing
          </span>
          <span
            className={`py-2 w-16 ${
              current === "completed"
                ? "text-blue-btn text-opacity-100"
                : "text-black"
            } text-opacity-50 text-xs text-center cursor-pointer hover:text-opacity-100`}
            onClick={() => setCurrent("completed")}
          >
            Completed
          </span>
        </div>
      </div>
      <ProjectsBoard />
    </div>
  );
}
