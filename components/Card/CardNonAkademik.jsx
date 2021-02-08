import React from "react";

export default function CardNonAkademik() {
  return (
    <div className="shadow-xl bg-gray-50">
      <div className="flex flex-col">
        <div className="bg-blueSecondary overflow-hidden h-42">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1611273173182-e4165502fef2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="flex-col flex p-4 text-gray-700 space-y-4">
          <div className="font-semibold text-xl">Ini adalah Judul</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            dolorem nemo adipisci placeat repellat neque.
          </div>
          <div className="text-red-900 underline font-medium">
            Baca Selengkapnya
          </div>
        </div>
      </div>
    </div>
  );
}
