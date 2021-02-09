import React from "react";

export default function CardEvent() {
  return (
    <div className="shadow-xl">
      <div className="flex lg:flex-col">
        <div className="bg-blueSecondary max-h-80 overflow-hidden hidden lg:block">
          <img
            className="h-full w-full object-cover object-center"
            src="/pp.jpeg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-brown lg:bg-transparent text-sm lg:hidden">
          <div>FEB</div>
          <div>29</div>
        </div>
        <div className="bg-yellow-50 p-4 lg:px-8 lg:py-12  space-y-2 relative">
          <div className="hidden lg:flex flex-col items-center justify-center p-4 bg-gray-800 text-sm lg:absolute left-8 -top-8">
            <div>FEB</div>
            <div>29</div>
          </div>
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
