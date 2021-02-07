import React from "react";

export default function SectionTitle(props) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl sm:text-4xl font-medium text-gray-800">
        {props.title}
      </h1>
      <button className="hidden sm:block px-4 py-2 border border-red-900 rounded focus:outline-none uppercase text-red-900 font-semibold">
        {props.btnTitle}
      </button>
    </div>
  );
}
