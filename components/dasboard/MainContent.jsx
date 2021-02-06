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
          <svg
            className="h-4 w-4 text-gray-700 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-gray-700 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
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
          <svg
            className="h-4 w-4 text-gray- dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-gray-700 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </button>
    </>
  );
}
