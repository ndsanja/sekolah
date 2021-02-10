import { useState } from "react";
import * as Icon from "../Icon";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY >= 200) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }

  return (
    <div className="h-60 sm:h-96 relative overflow-hidden items-center flex justify-center pt-14">
      <div
        className={`fixed top-0 left-0 right-0 z-20 ${
          navbar && "bg-bluePrimary"
        }`}
      >
        <div className="container  px-4 sm:px-8 lg:px-24 flex items-center justify-between py-3 ">
          <div className="flex space-x-4 items-center">
            <div>
              <Icon.Menu width={3} className="h-8 w-8 text-gray-200" />
            </div>
            <div>
              <button className="hidden lg:block px-4 py-4 border-2 border-white rounded focus:outline-none uppercase text-white text-xs">
                View All Courses
              </button>
            </div>
          </div>
          <div className="">Logo</div>
          <div className="flex space-x-4 items-center">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="hidden lg:block p-3 w-44 rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <Icon.Search width={3} className="h-8 w-8 text-gray-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col space-y-4">
        <h1 className="text-center relative z-10 text-gray-200 text-3xl sm:text-5xl lg:text-6xl">
          SMA Negeri 1 Srengat
        </h1>
        <h1 className="text-center relative z-10 text-gray-200 text-3xl sm:text-5xl lg:text-6xl">
          Online Courses
        </h1>
      </div>
      <div className="top-0 left-0 right-0 absolute w-screen overflow-hidden  bg-blueSecondary">
        <div className="w-full h-full relative">
          <img
            className="object-cover object-center w-full h-full"
            src="https://online-learning.harvard.edu/sites/all/themes/hoc/static/images/gates.jpg"
            alt=""
          />
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-900 opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
