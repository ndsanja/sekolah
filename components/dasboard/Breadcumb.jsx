export default function Breadcumb() {
  return (
    <div className="bg-gray-50 text-xs">
      <div className="flex items-center justify-between py-2 px-4 border-b  border-gray-300 sticky">
        <div className="flex items-center space-x-4">
          <div>Machine Learning /</div>
          <div>Weeks 1 /</div>
          <div>Welcome to Machine Learning</div>
        </div>
        <div className="flex items-center space-x-4">
          <div>Home</div>
          <div>|</div>
          <div>Next</div>
        </div>
      </div>
    </div>
  );
}
