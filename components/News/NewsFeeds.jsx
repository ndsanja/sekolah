import React from "react";
import CardNews from "../Card/CardNews";

export default function NewsFeeds() {
  return (
    <div className="bg-bluePrimary w-full text-gray-100">
      <div className="container px-4 pt-8">
        <div className="mb-12">
          <CardNews />
        </div>
        <div className="flex-col items-center space-y-4 px-5">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
    </div>
  );
}
