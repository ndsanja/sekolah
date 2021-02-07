import * as Icon from "../Icon";

export default function Header() {
  return (
    <div className="  h-60 sm:h-96 relative overflow-hidden items-center flex justify-center">
      <div className="container p-4 sm:p-8 lg:px-24 flex items-center justify-between py-4 fixed top-0 left-0 right-0 z-10">
        <div className="flex space-x-4 items-center">
          <div>
            <Icon.Menu className="h-8 w-8 text-white" />
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
              className="hidden lg:block p-3 w-44 rounded focus:outline-none"
            />
          </div>
          <div>
            <Icon.Search className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <div className="flex-col space-y-4">
        <h1 className="text-center relative z-10 text-white text-3xl sm:text-5xl lg:text-6xl">
          SMA Negeri 1 Srengat
        </h1>
        <h1 className="text-center relative z-10 text-white text-3xl sm:text-5xl lg:text-6xl">
          Online Courses
        </h1>
      </div>
      <img
        src="https://online-learning.harvard.edu/sites/all/themes/hoc/static/images/gates.jpg"
        alt=""
        className="top-0 left-0 right-0 absolute w-screen opacity-80"
      />
    </div>
  );
}
