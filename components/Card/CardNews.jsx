import React from "react";

export default function CardNews() {
  return (
    <div>
      <div className="bg-gray-100 shadow-xl">
        <div className="h-42 border-b-4 border-bluePrimary overflow-hidden">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1611273173182-e4165502fef2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="px-4 pt-5 pb-8 space-y-4">
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
