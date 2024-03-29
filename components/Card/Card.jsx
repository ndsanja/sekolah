import Link from "next/link";

export default function Card() {
  return (
    <div className="rounded shadow-lg overflow-hidden text-gray-700">
      <div className="h-52 bg-blueSecondary overflow-hidden bg-cover bg-center">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1611273173182-e4165502fef2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="space-y-6 p-6 bg-white">
        <h4 className="uppercase text-gray-600 font-medium hover:underline cursor-pointer">
          Nature
        </h4>
        <div>
          <Link href="/kursus/detail">
            <a className="text-red-800 text-xl lg:text-2xl font-medium underline lg:no-underline lg:hover:underline cursor-pointer">
              Principles of Biochemistry
            </a>
          </Link>
        </div>

        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ea dolores
          error magni labore tenetur tempora beatae veniam consequatur corrupti?
        </p>
        <div className="flex items-center justify-between text-gray-600 font-semibold text-xs lg:text-sm uppercase">
          <div>Free</div>
          <div>12 Wekks Long</div>
          <div>Starts Feb 8</div>
        </div>
      </div>
    </div>
  );
}
