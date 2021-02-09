import React from "react";
import CardEvent from "../Card/CardEvent";
import Spacer from "../Spacer";

export default function Events() {
  return (
    <div className="bg-blueDark w-full text-gray-100 pt-14 pb-20">
      <div className="container px-4 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-center">Smangat Events</h1>
          <p className="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex-col  items-center space-y-4 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <CardEvent />
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </div>

          <Spacer className="h-8" />
          <button className="py-4 bg-red-900 shadow-lg w-full sm:w-3/4 lg:w-2/6 text-center text-xl">
            Lihat Semua Events
          </button>
        </div>
      </div>
    </div>
  );
}
