export default function CardNewsBig() {
  return (
    <div className="shadow-2xl">
      <div className="bg-gray-100 ">
        <div className="overflow-hidden relative h-screen sm:h-4/5 lg:h-screen">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1529267058270-341cfc713052?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGRpanBidzk5a1FRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="bg-gray-900 top-0 bottom-0 right-0 sm:right-1/2 left-0 absolute z-10 opacity-70 "></div>
          <div className=" top-0 bottom-0 right-0 sm:right-1/2 left-0 absolute z-20 flex flex-col justify-center items-center text-gray-50 space-y-8 px-8 py-24 leading-relaxed">
            <h1 className=" text-4xl text-center">Ini Adalah judul</h1>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto numquam quam, magnam deleniti inventore laborum
              voluptatem ipsa itaque nobis illo?
            </p>

            <a href="#" className=" px-4 py-3 text-2xl ring ring-gray-200">
              Selengkapnya
            </a>
          </div>
        </div>
        <div className="hidden px-4 pt-5 pb-8 space-y-4">
          <h1 className="text-red-900 font-semibold uppercase text-sm">
            subject
          </h1>
          <h1 className="text-gray-700 font-medium text-2xl">Judul Artikel</h1>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            velit quae reiciendis voluptatum accusantium debitis eaque totam
            esse non quos?
          </p>
          <div>
            <a href="" className="text-red-900 underline text-xl">
              Baca Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
