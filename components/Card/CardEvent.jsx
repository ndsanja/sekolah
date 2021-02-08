import React from "react";

export default function CardEvent() {
  return (
    <div className="shadow-xl">
      <div className="flex">
        <div className="flex flex-col items-center justify-center p-4 bg-gray-800 text-sm">
          <div>FEB</div>
          <div>29</div>
        </div>
        <div className="bg-yellow-50 py-4 px-4 space-y-2">
          <div className="text-red-900 font-medium uppercase">subjeck</div>
          <div className="text-gray-900 font-semibold text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-gray-800">5:00 PM</div>
        </div>
      </div>
    </div>
  );
}
