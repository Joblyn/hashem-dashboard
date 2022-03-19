import React from "react";

export default function ProjectCard({ type }) {
  let colorGrad;
  let bar;
  if (type === "blue") {
    colorGrad = "from-blue-sky to-blue-light";
    bar = "bg-blue-deep";
  } else if (type === "red") {
    colorGrad = "from-red-tomato to-red-light";
    bar = "bg-red-deep";
  } else if (type === "brown") {
    colorGrad = "from-brown-light to-brown-orange";
    bar = "bg-brown-deep";
  }

  return (
    <div className="h-12 md:h-12 flex mb-2.5">
      <div className={`w-2 h-full ${bar}`}></div>
      <div className={`bg-gradient-to-r ${colorGrad} p-1 pl-2 flex flex-col w-36 md:w-56 h-full`}>
        <span className="font-medium text-white text-base">
          App Design
        </span>
        <span className="font-light text-white text-[0.65rem]">17 August, 2021</span>
      </div>
    </div>
  );
}
