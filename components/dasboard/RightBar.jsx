import React from "react";

export default function RightBar({ rightOpen }) {
  return (
    <div
      className={`${
        rightOpen ? "w-3/12" : "hidden"
      } sticky top-0 h-screen p-4 text-sm leading-relaxed overflow-y-auto space-y-4`}
    >
      <div>
        <h1 className="uppercase font-medium text-gray-900 text-sm mb-3 tracking-wide">
          On This Page
        </h1>
        <ul className="text-sm font-medium text-gray-500 space-y-4 tracking-normal">
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Lorem, ipsum.</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
