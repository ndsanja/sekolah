import * as Icon from "../Icon";

export default function HeaderWebsite() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 bg-blueDark z-50">
        <div className="container px-4 flex justify-end items-center relative">
          <div className="absolute left-2 top-0 shadow-2xl">
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
    </div>
  );
}
