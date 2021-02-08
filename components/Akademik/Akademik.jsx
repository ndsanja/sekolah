import React from "react";
import CardAkademik from "../Card/CardAkademik";
import Spacer from "../Spacer";

export default function Akademik() {
  return (
    <div className="bg-gray-50 w-full text-gray-700 py-8">
      <div className="container px-4">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-semibold text-center">Akademik</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            deleniti error odit culpa quis cumque?
          </p>
        </div>
        <div className="flex-col items-center space-y-4">
          <CardAkademik />
          <CardAkademik />
          <CardAkademik />
          <Spacer className="h-8" />
          <button className="py-4 bg-red-900 shadow-lg w-full text-center text-xl text-gray-100">
            Semua Informasi Akademik
          </button>
        </div>
      </div>
    </div>
  );
}
