import React from "react";

export default function BannerEnroll() {
  return (
    <div className="flex items-center justify-center space-x-6 bg-blue-900 py-20">
      <h1 className="text-5xl text-white">Enroll Now.</h1>
      <button className="px-4 py-2 bg-red-900 rounded focus:outline-none uppercase text-white font-medium">
        Take Course
      </button>
    </div>
  );
}
