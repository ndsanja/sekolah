import * as Icon from "../Icon";
import Link from "next/link";

export default function Breadcumb({
  toogleOpen,
  open,
  selectTheme,
  dark,
  toogleDark,
}) {
  return (
    <div className="text-xs">
      <div className="flex items-center justify-between py-2 lg:py-1 sm:px-6 px-4 border-b  border-gray-300 dark:border-gray-700 sticky">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Link href="/">
            <a className="cursor-pointer focus:outline-none">
              <Icon.Menu className="text-gray-700 h-6 w-6 lg:hidden dark:text-white ring-1 ring-gray-700 dark:ring-white" />
            </a>
          </Link>
          <a
            href="#"
            className="hidden sm:block text-blue-800 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-200 font-semibold"
          >
            Machine Learning /
          </a>
          <a
            href="#"
            className="hidden sm:block text-blue-800 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-200 font-semibold"
          >
            Weeks 1 /
          </a>
          <div className="font-medium text-gray-700 dark:text-white">
            Welcome to Machine Learning
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-700 font-bold">
          <div onClick={toogleDark}>
            {dark ? (
              <button
                onClick={() => selectTheme("dark")}
                className="lg:hidden flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <Icon.Dark className="h-6 w-6 text-gray-600  dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300" />
              </button>
            ) : (
              <button
                onClick={() => selectTheme("light")}
                className="lg:hidden flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <Icon.Light className="h-6 w-6 text-gray-600  dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300" />
              </button>
            )}
          </div>

          <div className="flex lg:hidden cursor-pointer">
            <img
              src="data:image/jpeg;base64,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"
              className="h-7 w-7 rounded-full ring-2 ring-blue-300"
            />
          </div>

          <div
            onClick={toogleOpen}
            className="hidden lg:block cursor-pointer rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 bg-blue-50 p-1 dark:bg-blue-900"
          >
            {open ? (
              <Icon.Up className="h-4 w-4 text-gray-700 dark:text-blue-100" />
            ) : (
              <Icon.Down className="h-4 w-4 text-gray-700 dark:text-blue-100" />
            )}
          </div>
          <a
            href="#"
            className="hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-200 hidden lg:block"
          >
            Home
          </a>
          <div className="hidden lg:block dark:text-blue-500">|</div>
          <a
            href="#"
            className="hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-200 hidden lg:block"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
