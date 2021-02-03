export default function Breadcumb() {
  return (
    <div className="bg-gray-50 text-xs">
      <div className="flex items-center justify-between py-2 px-4 border-b  border-gray-300 sticky">
        <div className="flex items-center space-x-4">
          <div className="text-blue-800 font-medium">Machine Learning /</div>
          <div className="text-blue-800 font-medium">Weeks 1 /</div>
          <div className="font-medium text-gray-700">
            Welcome to Machine Learning
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-700 font-medium">
          <div>Home</div>
          <div>|</div>
          <div>Next</div>
        </div>
      </div>
    </div>
  );
}
