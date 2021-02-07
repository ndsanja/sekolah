import React from "react";

export default function Instructor(props) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <img
        src={props.image}
        className="h-32 w-32 ring-4 ring-offset-purple-700 rounded-full "
      />
      <div className="w-48 space-y-2">
        <h1 className="font-semibold text-red-900 text-center text-xl">
          {props.name}
        </h1>
        <p className="text-center text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}
