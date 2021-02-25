import CardDetail from "../Card/CardDetail";
import Spacer from "../Spacer";
import Link from "next/link";
import * as Icon from "../Icon";

export default function HeaderDetail() {
  return (
    <>
      <div className="bg-bluePrimary">
        <div className="bg-bluePrimary fixed top-0 left-0 right-0 z-10">
          <div className="container  px-4 sm:px-8 lg:px-24 flex items-center justify-between py-3">
            <div className="flex space-x-4 items-center">
              <div>
                <Icon.Menu width={3} className="h-8 w-8 text-white" />
              </div>
              <div className="hidden lg:inline-block px-4 py-4 border-2 border-white rounded focus:outline-none uppercase text-white text-xs">
                <Link href="/kursus">
                  <a>View All Courses</a>
                </Link>
              </div>
            </div>
            <div className="">Logo</div>
            <div className="flex space-x-4 items-center">
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="hidden lg:block p-3 w-44 rounded focus:outline-none"
                />
              </div>
              <div>
                <Icon.Search width={3} className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="container relative p-4 sm:px-8 lg:px-24">
          <Spacer className={" h-10 lg:h-20"} />
          <div className="flex">
            <div className="space-y-10 py-10 text-white lg:w-8/12">
              <h1 className="text-4xl">
                CS50: Introduction to Computer Science
              </h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore cupiditate, quas repellendus iste odit culpa in. Iusto
                accusamus natus tempora!
              </h4>
              <a
                href="https://siswa.vercel.app/sekolah/pelajaran/1"
                className="inline-block text-center px-4 py-2 bg-red-900 rounded focus:outline-none uppercase text-white font-medium"
              >
                Take Course
              </a>
            </div>
          </div>
          <CardDetail
            className={" hidden lg:block lg:absolute right-24 top-28"}
          />
        </div>
      </div>
      <div className="bg-white">
        <div className="container px-4 sm:px-8 lg:px-24">
          <div className="lg:w-8/12 flex py-2 text-gray-600 text-xl justify-between flex-wrap">
            <div className="lg:w-8/12">Runs April 15 - May 15, 2021</div>
            <div>Register by April 15</div>
            <div>Free</div>
          </div>
        </div>
      </div>
    </>
  );
}
