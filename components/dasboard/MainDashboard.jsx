import React from "react";
import LeftBar from "./LeftBar";
import MainContent from "./MainContent";
import RightBar from "./RightBar";

export default function MainDashboard() {
  return (
    <div>
      <div className="flex justify-between h-screen bg-gray-200">
        <LeftBar />
        <button className="text-xs bg-gray-100 p-1 h-8 w-8 focus:outline-none">
          |||
        </button>
        <MainContent />
        <button className="text-xs bg-gray-100 p-1 h-8 w-8 focus:outline-none">
          |||
        </button>
        <RightBar />
      </div>
    </div>
  );
}
