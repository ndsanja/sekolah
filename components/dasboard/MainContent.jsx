export default function MainContent({
  toogleLeft,
  toogleRight,
  leftOpen,
  rightOpen,
}) {
  return (
    <>
      <button
        onClick={toogleLeft}
        className="sticky top-0 text-xs bg-gray-100 p-1 h-8 w-8 focus:outline-none"
      >
        |||
      </button>
      <div
        className={`
        ${leftOpen ? "w-7/12" : "w-10/12"} 
        ${rightOpen ? "w-7/12" : "w-10/12"} 
        space-y-4 text-gray-700 font-light text-justify  p-8 shadow-2xl transition-all duration-75`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          officiis, eligendi possimus consequatur neque exercitationem eaque
          dolore ut eius quis sint, adipisci dolorem illo harum tempore.
          Corrupti eligendi voluptatibus ut?
        </p>
      </div>
      <button
        onClick={toogleRight}
        className="sticky top-0 text-xs bg-gray-100 p-1 h-8 w-8 focus:outline-none"
      >
        |||
      </button>
    </>
  );
}
