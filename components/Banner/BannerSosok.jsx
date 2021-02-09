export default function BannerSosol() {
  return (
    <div className=" bg-bluePrimary">
      <div className="overflow-hidden relative lg:h-screen">
        <img
          className="object-cover object-center h-full w-full"
          src="https://images.unsplash.com/photo-1529267058270-341cfc713052?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGRpanBidzk5a1FRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="bg-gray-900 top-0 bottom-0 right-0 left-0 absolute z-10 opacity-50 flex justify-center items-center">
          <a href="#" className="text-gray-200 p-4 text-4xl ring ring-gray-200">
            VIEW MORE
          </a>
        </div>
      </div>
    </div>
  );
}
