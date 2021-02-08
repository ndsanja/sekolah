import Link from "next/link";

export default function BannerEnroll() {
  return (
    <div className="flex-col lg:flex lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-6 bg-bluePrimary py-12 lg:py-20 text-center">
      <h1 className="text-5xl text-white text-center ">Enroll Now.</h1>
      <div>
        <Link href="/dashboard">
          <a className="px-6 py-4  bg-red-900 rounded focus:outline-none uppercase text-white font-medium">
            Take Course
          </a>
        </Link>
      </div>
    </div>
  );
}
