import Breadcumb from "../dasboard/Breadcumb";
import MainDashboard from "../dasboard/MainDashboard";

export default function HeaderDashboard() {
  return (
    <div clasName="fixed top-0 right-0 left-0 ">
      <div className=" fixed top-0 right-0 left-0 ">
        <div className="container px-4 relative">
          <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
            <div className="flex items-center space-x-4">
              <h1 className="font-semibold text-blue-800 text-xl">
                SMA NEGERI 1 SRENGAT
              </h1>
              <button className="px-2.5 py-1.5 bg-blue-800 focus:outline-none text-white text-sm rounded">
                Explore
              </button>
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2 py-1 focus:outline-none rounded-l border border-opacity-50 border-gray-500"
                />
                <button className="px-1 py-1 bg-blue-800 text-white border border-gray-500 focus:outline-none rounded rounded-l-none">
                  O
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <a href="#">
                <svg
                  className="h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-pink-500 ring ring-pink-300"></div>
                <h1 className="font-semibold text-gray-700 text-sm">
                  Nila Dwi Sanja
                </h1>
              </div>
            </div>
          </div>
          <Breadcumb />
        </div>
        <MainDashboard />
      </div>
    </div>
  );
}
