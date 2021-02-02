import CardDetail from "../Card/CardDetail";
import Spacer from "../Spacer";

export default function HeaderDetail() {
  return (
    <>
      <div className="bg-blue-900">
        <div className="container relative px-24">
          <div className="flex items-center bg-red-300 h-10">
            <div>menu</div>
            <div>View All</div>
            <div className="flex-1 text-center">Logo</div>
            <div>Search</div>
            <div>icons</div>
          </div>
          <Spacer className={"h-4"} />
          <div className="flex">
            <div className="space-y-10 py-10 text-white w-8/12">
              <h1 className="text-4xl">
                CS50: Introduction to Computer Science
              </h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore cupiditate, quas repellendus iste odit culpa in. Iusto
                accusamus natus tempora!
              </h4>
              <button className="px-4 py-2 bg-red-900 rounded focus:outline-none uppercase text-white font-medium">
                Take Course
              </button>
            </div>
          </div>
          <CardDetail className={"absolute right-24 top-20"} />
        </div>
      </div>
      <div className="bg-white">
        <div className="container px-24">
          <div className="w-8/12 flex py-2">
            <div className="w-8/12">tangaal dimulai kursus</div>
            <div>free</div>
          </div>
        </div>
      </div>
    </>
  );
}
