export default function Breadcumb() {
  return (
    <div className="text-xs">
      <div className="flex items-center justify-between py-2 px-4 border-b  border-gray-300 sticky">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-blue-800 hover:text-blue-600 font-semibold"
          >
            Machine Learning /
          </a>
          <a
            href="#"
            className="text-blue-800 hover:text-blue-600 font-semibold"
          >
            Weeks 1 /
          </a>
          <div className="font-medium text-gray-700">
            Welcome to Machine Learning
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-700 font-bold">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <div>|</div>
          <a href="#" className="hover:text-blue-500">
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
