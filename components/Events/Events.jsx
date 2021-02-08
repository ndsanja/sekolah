import React from "react";
import CardEvent from "../Card/CardEvent";
import Spacer from "../Spacer";

export default function Events() {
  return (
    <div className="bg-brown w-full text-gray-100 py-8">
      <div className="container px-4">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-center">Smangat Events</h1>
          <p className="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex-col items-center space-y-4">
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <Spacer className="h-8" />
          <button className="py-2 bg-red-900 shadow-lg w-full text-center">
            Lihat Semua Events
          </button>
        </div>
      </div>
    </div>
  );
}