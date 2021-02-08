import React from "react";

export default function Instructor(props) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="h-32 w-32 ring-4 bg-blueSecondary ring-offset-bluePrimary rounded-full overflow-hidden">
        <img
          src={props.image}
          className="object-center object-cover h-full w-full"
        />
      </div>
      <div className="w-48 space-y-2">
        <h1 className="font-semibold text-red-900 text-center text-xl">
          {props.name}
        </h1>
        <p className="text-center text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}
