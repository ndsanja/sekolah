import * as Icon from "../Icon";

export default function HeaderWebsite() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50 ">
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
          <div className="container px-8 lg:flex items-center justify-center text-gray-100 py-2 space-x-8 hidden">
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
          <div className="container px-8 lg:flex items-center justify-evenly text-red-900 py-2 text-xl hidden">
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
          </div>
          <div className="absolute h-32 bg-gray-50 right-1/2 transform translate-x-1/2 top-10 hidden lg:block border border-gray-300">
            <div className="flex-col items-center justify-center space-y-0 pt-2 pb-1 px-4">
              <h1 className="text-center text-2xl font-semibold text-blueDark">
                SMA Negeri 1 Srengat
              </h1>
            </div>
            <img
              src="/logo.png"
              alt=""
              className="h-16 relative left-1/2 -translate-x-1/2 transform"
            />
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
{
  /* <div className="container px-4 flex justify-end items-center relative">
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
        </div> */
}
