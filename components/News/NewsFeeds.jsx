import React from "react";
import CardNews from "../Card/CardNews";
import Spacer from "../Spacer";

export default function NewsFeeds() {
  return (
    <div className="bg-bluePrimary w-full text-gray-100 py-8">
      <div className="container px-4">
        <div className="mb-14">
          <CardNews />
        </div>
        <div className="flex-col items-center space-y-4 px-5">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <Spacer className="h-8" />
          <button className="py-4 bg-red-900 shadow-lg w-full text-center text-xl">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </div>
  );
}
