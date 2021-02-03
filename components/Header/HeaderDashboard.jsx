import Breadcumb from "../dasboard/Breadcumb";
import MainDashboard from "../dasboard/MainDashboard";

export default function HeaderDashboard() {
  return (
    <div>
      <div className="container fixed top-0 right-0 left-0">
        <div className="flex items-center justify-between py-2 px-4 border-b bg-gray-50 border-gray-300">
          <div className="flex items-center space-x-4">
            <h1>SMA NEGERI 1 SRENGAT</h1>
            <button className="px-2 py-1 bg-blue-800 focus:outline-none text-white text-xs rounded">
              Explore
            </button>
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 focus:outline-none rounded-l border border-gray-500"
              />
              <button className="px-1 py-1 bg-blue-800 text-white border border-gray-500 focus:outline-none rounded rounded-l-none">
                O
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>notificasi</div>
            <div>avatar</div>
          </div>
        </div>
        <Breadcumb />
        <MainDashboard />
      </div>
    </div>
  );
}
