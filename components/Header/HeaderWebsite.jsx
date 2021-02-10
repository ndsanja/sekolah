import { useState } from "react";
import * as Icon from "../Icon";

export default function HeaderWebsite() {
  const [navbar, setNavbar] = useState(false);

  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-40 ">
        <div className="bg-blueDark">
          <div className="container px-4 flex justify-end items-center relativ lg:hidden ">
            <div className="absolute left-2 top-0 shadow-2xl lg:hidden">
              <img src="/logo.png" alt="logo" className="w-11" />
            </div>
            <div className="flex items-center justify-between text-gray-50 space-x-4">
              <div className="flex items-center space-x-2 px-2 py-2 border-gray-600 border-l border-r">
                <h1 className="uppercase">Menu</h1>
                <div>
                  <Icon.Menu width={2} className="h-7 w-7 bg-contain" />
                </div>
              </div>
              <div>
                <Icon.Search width={2} className="w-7 h-7 bg-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blueDark hidden lg:block">
          <div className="container px-8 lg:flex items-center justify-center text-gray-100 py-2 space-x-8 hidden font-sans">
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
            <input
              type="text"
              placeholder="Apa yang bisa kami carikan"
              className="bg-black absolute top-0 right-0 h-10 placeholder-gray-600 px-4 focus:outline-none hidden lg:block"
            />
          </div>
        </div>
        <div className="bg-gray-50 lg:block">
          <div
            className={`container px-8 lg:flex items-center  text-red-900  hidden ${
              navbar
                ? "text-base justify-center space-x-24 py-1"
                : "text-xl justify-evenly py-2"
            } `}
          >
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div className={`${navbar ? "hidden" : "block"}`}>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
          </div>

          <div className="absolute bg-transparent right-1/2 transform translate-x-1/2 top-10 hidden lg:block z-50">
            <div
              className={`${
                navbar
                  ? ""
                  : "flex-col items-center justify-center space-y-0 pt-2 pb-1 px-4"
              }`}
            >
              <h1
                className={`text-center text-2xl font-semibold text-blueDark ${
                  navbar ? "hidden" : "block"
                }`}
              >
                SMA Negeri 1
              </h1>
              <h1
                className={`text-center text-xl font-semibold text-blueDark ${
                  navbar ? "hidden" : "block"
                }`}
              >
                Srengat
              </h1>
            </div>
            <img
              src="/logo.png"
              alt=""
              className={`${
                navbar ? "h-10 top-1" : "h-14"
              } relative left-1/2 -translate-x-1/2 transform`}
            />
          </div>
          <div className="absolute top-10 z-40 right-1/2 transform translate-x-1/2 bg-blueSecondary hidden lg:block">
            <div
              className={`${
                navbar
                  ? "base-mini transform rotate-180 h-7 w-20"
                  : "base transform rotate-180 h-20 w-48"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mt-20 hidden lg:block">
        <div className="container px-8 lg:flex items-center justify-evenly text-red-900 py-2 hidden">
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
        </div>
      </div>
    </div>
  );
}
