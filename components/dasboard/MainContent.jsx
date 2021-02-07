import * as Icon from "../Icon";

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
        className={
          "hidden lg:block sticky top-0 text-xs p-1 h-6 w-6 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none"
        }
      >
        {leftOpen ? (
          <Icon.Left className="h-4 w-4 text-gray-700 dark:text-white" />
        ) : (
          <Icon.Right className="h-4 w-4 text-gray-700 dark:text-white" />
        )}
      </button>
      <div
        className={`
        ${leftOpen ? "w-12/12 lg:w-7/12" : "lg:w-10/12"} 
        ${rightOpen ? "w-12/12 sm:w-9/12 lg:w-7/12" : "lg:w-10/12"} 
        space-y-4 text-gray-700 dark:text-gray-300 font-light text-justify  p-4 sm:p-6 lg:p-8 lg:shadow-2xl transition-all duration-75`}
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
        className={`hidden lg:block sticky top-0 text-xs p-1 h-6 w-6 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none`}
      >
        {rightOpen ? (
          <Icon.Right className="h-4 w-4 text-gray-700 dark:text-white" />
        ) : (
          <Icon.Left className="h-4 w-4 text-gray-700 dark:text-white" />
        )}
      </button>
    </>
  );
}
