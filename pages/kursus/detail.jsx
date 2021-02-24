import React from "react";
import BannerEnroll from "../../components/Banner/BannerEnroll";
import DescriptionSection from "../../components/Course/DescriptionSection";
import GoalSection from "../../components/Course/GoalSection";
import Instructor from "../../components/Course/Instructor";
import HeaderDetail from "../../components/Header/HeaderDetail";
import Spacer from "../../components/Spacer";
import Card from "../../components/Card/Card";
import BannerFull from "../../components/Banner/BannerFull";
import Footer from "../../components/Footer/Footer";
import CardDetail from "../../components/Card/CardDetail";

export default function detail() {
  return (
    <div className="bg-gray-50 font-body">
      <HeaderDetail />
      <Spacer className={"h-4 lg:h-20"} />
      <div className="container px-4 sm:px-10 lg:hidden">
        <CardDetail />
      </div>
      <Spacer className={"h-12 lg:h-20"} />
      <div className="container px-4 sm:px-8 lg:px-24">
        <div className=" lg:w-8/12 text-gray-800">
          <h1 className="text-2xl lg:text-4xl text-gray-800">
            What You'll learn
          </h1>
          <Spacer className={"h-8"} />
          <GoalSection />
          <Spacer className={"h-8"} />
          <a
            href="https://siswa.vercel.app/sekolah/pelajaran/1"
            className="flex justify-between items-center px-4 py-2 bg-red-900 rounded focus:outline-none uppercase text-white font-medium"
          >
            Take Course
          </a>
          <Spacer className={"h-8"} />
          <h1 className="text-2xl lg:text-4xl text-gray-800">
            Course Descripion
          </h1>
          <Spacer className={"h-8"} />
          <DescriptionSection />
          <Spacer className={"h-8"} />
          <button className="px-4 py-2 bg-red-900 rounded focus:outline-none uppercase text-white font-medium">
            Take Course
          </button>
          <Spacer className={"h-16 lg:h-20"} />
        </div>
        <h1 className="text-2xl lg:text-4xl text-center text-gray-800 ">
          Instructor
        </h1>
        <Spacer className={"h-8"} />
        <div className="flex-col lg:flex-row lg:flex flex-wrap justify-center space-y-8 lg:space-y-0 lg:space-x-16">
          <Instructor
            image="data:image/jpeg;base64,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"
            name={"Nadiem Makarim"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, temporibus."
            }
          />
          <Instructor
            image="data:image/jpeg;base64,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"
            name={"Kiki Dwi Ratna"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, temporibus."
            }
          />
          <Instructor
            image="/pp.jpeg"
            name={"Nila Dwi Sanja"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, temporibus."
            }
          />
        </div>
      </div>
      <Spacer className={"h-12 lg:h-20"} />
      <BannerEnroll />
      <div className="container">
        <Spacer className={"h-8"} />
        <h1 className="text-2xl lg:text-3xl text-gray-800 ">
          You may also like
        </h1>
        <Spacer className={"h-8"} />
        <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Spacer className="h-12 lg:h-20" />
      <BannerFull />
      <Footer />
    </div>
  );
}
