import React, { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex-col flex">
      <div className="flex items-center justify-between bg-gray-200 px-4">
        <div>MENU</div>
        <div onClick={toogleOpen} className="cursor-pointer sm:hidden">
          Icons
        </div>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-200">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatibus, natus incidunt perferendis quae id delectus? Quasi,
            possimus similique. Blanditiis.
          </p>
        </div>
      )}
    </div>
  );
}
