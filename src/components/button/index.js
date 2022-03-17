import React from "react";
import { ReactComponent as Meter } from "../../assets/icons/meter-white.svg";

export default function Button({ type }) {
  return (
    <div
      className={`btn rounded-md px-3 md:px-6 ${type ==="storage" ? "py-1.5 md:py-1.5":"py-2 md:py-2"}  m-0 bg-blue-btn hover:bg-blue-deep text-xs md:text-sm cursor-pointer transition-all inline-flex items-center justify-center select-none text-center ${
        type === "storage" ? "font-semibold" : "font-medium"
      } text-white`}
      href="#"
    >
      {type === "storage" ? (
        "Buy Now"
      ) : (
        <>
          <Meter className="mr-3" />
          Become a Pro
        </>
      )}
    </div>
  );
}
