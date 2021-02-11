import React from "react";
import DropDown from "./DropDown";

export default function SideBar() {
  return (
    <div className="flex flex-col sm:w-3/12 px-4 h-screen w-full bg-blueDark space-y-8 sticky top-0 left-0 overflow-y-auto">
      <div className=" flex flex-col  items-center mt-8 space-y-2 ">
        <div className="h-24 w-24 overflow-hidden rounded-full">
          <img
            src="/pp.jpeg"
            alt=""
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div>
          <h1>44598</h1>
        </div>
        <div>
          <h1>Nila Dwi Sanja</h1>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
    </div>
  );
}
