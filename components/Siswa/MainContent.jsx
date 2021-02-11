import React from "react";
import CardMini from "./CardMini";
import BigCard from "./BigCard";

export default function MainContent() {
  return (
    <div className="hidden sm:flex flex-col items-center p-8 mt-8 w-9/12 space-y-8">
      <div className="flex justify-between space-x-8">
        <CardMini />
        <CardMini />
      </div>
      <div className="flex justify-between space-x-8">
        <BigCard />
      </div>
    </div>
  );
}
