import React from "react";
import CardNews from "../Card/CardNews";
import CardNewsBig from "../Card/CardNewsBig";
import Spacer from "../Spacer";

export default function NewsFeeds() {
  return (
    <div className="bg-bluePrimary w-full text-gray-100 pt-10 pb-20">
      <div className="container px-4 lg:px-8">
        <div className="mb-14">
          <CardNewsBig />
        </div>
        <div className="flex-col items-center justify-center space-y-4 px-5 flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
          <Spacer className="h-8" />
          <button className="py-4 bg-red-900 shadow-lg w-full sm:w-3/4 lg:w-2/6 text-center text-xl">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </div>
  );
}
