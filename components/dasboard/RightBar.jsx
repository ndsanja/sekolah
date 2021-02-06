import React from "react";

export default function RightBar({ rightOpen }) {
  return (
    <div
      className={`${
        rightOpen ? "hidden w-3/12 sm:block" : "hidden"
      } sticky top-0 h-screen p-4 text-sm leading-relaxed overflow-y-auto space-y-4`}
    >
      <div>
        <h1 className="uppercase lg:font-medium dark:text-white text-gray-900 text-sm mb-3 tracking-wide">
          On This Page
        </h1>
        <ul className="text-xs lg:text-sm lg:font-medium dark:text-gray-400 text-gray-500 space-y-4 tracking-normal">
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-white">
            <a href="#">Lorem, ipsum.</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
