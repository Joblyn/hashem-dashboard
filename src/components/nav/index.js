import React from "react";
import NavList from "../../fixtures/navlist";
import { ReactComponent as Storage } from "../../assets/icons/storage.svg";
import { ReactComponent as Employee } from "../../assets/icons/employee.svg";
import Button from "../button";

export default function Nav() {
  return (
    <nav className="pt-3 lg:pt-4 md:pt-4 px-2">
      <ul className="list-none">
        {NavList.map((item) => (
          <li
            key={`navlist-${item.text}`}
            className="list-none text-center flex flex-row justify-start items-center py-2 pl-12 pr-3 cursor-pointer hover:bg-gray-800 text-gray-700  hover:text-black hover:text-opacity-70 transition-all"
          >
            <item.icon className="align-middle mr-4" />
            <span className="capitalize font-medium text-xs md:text-sm">
              {item.text}
            </span>
          </li>
        ))}
        <li className="flex justify-center">
          <div className="bg-white flex flex-col justify-center items-center mt-3 p-5 text-center shadow-3xl rounded-lg">
            <Storage className="w-10 h-10 md:w-12 md:h-12"/>
            <p className="font-bold capitalize text-black my-3 text-base md:text-sm">
              Buy More Storage
            </p>
            <Button type="storage" />
          </div>
        </li>
        <li className="list-none text-center flex flex-row justify-start items-center py-2 pl-12 cursor-pointer hover:bg-gray-800 transition-all mt-2">
          <Employee className="align-middle mr-4" /> <span className="capitalize text-red-deep font-medium text-xs md:text-sm">Log out</span>
        </li>
      </ul>
    </nav>
  );
}
