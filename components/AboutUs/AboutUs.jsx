import React from "react";
import CardNonAkademik from "../Card/CardNonAkademik";
import Spacer from "../Spacer";

export default function AboutUs() {
  return (
    <div className="bg-gray-200 w-full text-gray-700 pt-14 pb-20">
      <div className="container px-4">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-semibold text-center">
            Tentang SMANGAT
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            deleniti error odit culpa quis cumque?
          </p>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit temporibus beatae explicabo autem odio necessitatibus
            dolor voluptas quae aperiam nemo maiores iure modi omnis, dolorum
            in, ab quaerat debitis dolores?
          </p>
        </div>
        <div className="flex-col items-center space-y-4 flex justify-center">
          <Spacer className="h-8" />
          <button className="py-4 bg-red-900 shadow-lg w-full sm:w-3/4 lg:w-2/6 text-center text-xl text-gray-100">
            Semua tentang SMANGAT
          </button>
        </div>
      </div>
    </div>
  );
}
