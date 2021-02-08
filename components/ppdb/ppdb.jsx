import React from "react";
import CardNonAkademik from "../Card/CardNonAkademik";
import Spacer from "../Spacer";

export default function Ppdb() {
  return (
    <div className="bg-gray-200 w-full text-gray-700 py-8">
      <div className="container px-4">
        <div className="mb-12 space-y-4">
          <h1 className="text-2xl font-semibold text-center">PPDB</h1>
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
          <button className="py-2 bg-red-900 shadow-lg w-full text-center text-gray-100">
            Semua Informasi PPDB
          </button>
        </div>
      </div>
    </div>
  );
}
