export default function Footer() {
  return (
    <div className="bg-gray-800 ">
      <div className="container flex items-start justify-around py-12">
        <div className="flex w-4/12 justify-center">
          <button className="px-12 py-2 border border-white rounded text-white focus:outline-none">
            DONATE
          </button>
        </div>
        <div className="flex flex-col w-4/12 text-white ">
          <h1>Menu 1</h1>
          <h1>Menu 2</h1>
          <h1>Menu 3</h1>
          <h1>Menu 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            illo.
          </p>
        </div>
        <div className="flex flex-col w-4/12 text-white space-y items-center">
          <div className="text-2xl font-bold">LOGO</div>
          <div className="flex space-x-4">
            <div className="text-2xl font-bold">FB</div>
            <div className="text-2xl font-bold">TW</div>
            <div className="text-2xl font-bold">IG</div>
          </div>
        </div>
      </div>
    </div>
  );
}
