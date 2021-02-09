import React from "react";
import CardNonAkademik from "../Card/CardNonAkademik";
import Spacer from "../Spacer";

export default function SchoolLife() {
  return (
    <div className="bg-gray-50 w-full text-gray-700 pt-14 pb-20">
      <div className="container px-4">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-semibold text-center">School Life</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            deleniti error odit culpa quis cumque?
          </p>
        </div>
        <div className="flex-col items-center space-y-4">
          <CardNonAkademik />
          <CardNonAkademik />
          <CardNonAkademik />
          <Spacer className="h-8" />
          <button className="py-4 bg-red-900 shadow-lg w-full text-center text-xl text-gray-100">
            Semua Informasi ekosistem
          </button>
        </div>
      </div>
    </div>
  );
}
