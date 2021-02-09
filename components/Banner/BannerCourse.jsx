import Link from "next/link";

export default function Banner() {
  return (
    <div className=" bg-bluePrimary pt-14 pb-20">
      <div className="flex flex-col space-y-16 items-center justify-center ">
        <h1 className="text-gray-100 text-4xl text-center">
          Explore SMANGAT Online Course and learning contents
        </h1>
        <div>
          <Link href="/kursus">
            <a className="px-6 py-5 border border-white rounded text-white uppercase text-xl focus:outline-none">
              View Courses
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
