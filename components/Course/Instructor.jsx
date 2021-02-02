import React from "react";

export default function Instructor(props) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="h-24 w-24 bg-pink-600 rounded-full"></div>
      <div className="w-36 space-y-2">
        <h1 className="font-semibold text-red-900 text-center">{props.name}</h1>
        <p className="text-center text-sm">{props.description}</p>
      </div>
    </div>
  );
}
