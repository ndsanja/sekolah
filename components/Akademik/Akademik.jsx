import React from "react";
import CardAkademik from "../Card/CardAkademik";
import Spacer from "../Spacer";

export default function Akademik() {
  return (
    <div className="bg-gray-50 w-full text-gray-700 pt-14 pb-20">
      <div className="container px-4 lg:px-8">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-semibold text-center">Akademik</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            deleniti error odit culpa quis cumque?
          </p>
        </div>
        <div className="flex-col items-center space-y-4 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-8 place-items-center">
            <CardAkademik />
            <CardAkademik />
            <CardAkademik />
          </div>

          <Spacer className="h-8" />
          <button className="py-4 bg-red-900 shadow-lg w-full sm:w-3/4 lg:w-2/6 text-center text-xl text-gray-100">
            Semua Informasi Akademik
          </button>
        </div>
      </div>
    </div>
  );
}
