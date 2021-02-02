import React from "react";
import BannerEnroll from "../../components/Banner/BannerEnroll";
import DescriptionSection from "../../components/Course/DescriptionSection";
import GoalSection from "../../components/Course/GoalSection";
import Instructor from "../../components/Course/Instructor";
import HeaderDetail from "../../components/Header/HeaderDetail";
import Spacer from "../../components/Spacer";
import Card from "../../components/Card/Card";
import BannerFull from "../../components/Banner/BannerFull";
import FooterFull from "../../components/Footer/FooterFull";

export default function detail() {
  return (
    <div>
      <HeaderDetail />
      <Spacer className={"h-20"} />
      <div className="container px-24">
        <div className="w-8/12 text-gray-800">
          <h1 className="text-4xl text-gray-800">What You'll learn</h1>
          <Spacer className={"h-8"} />
          <GoalSection />
          <Spacer className={"h-8"} />
          <button className="px-4 py-2 bg-red-900 rounded focus:outline-none uppercase text-white font-medium">
            Take Course
          </button>
          <Spacer className={"h-8"} />
          <h1 className="text-4xl text-gray-800">Course Descripion</h1>
          <Spacer className={"h-8"} />
          <DescriptionSection />
          <Spacer className={"h-8"} />
          <button className="px-4 py-2 bg-red-900 rounded focus:outline-none uppercase text-white font-medium">
            Take Course
          </button>
          <Spacer className={"h-24"} />
        </div>
        <h1 className="text-4xl text-center text-gray-800 ">Instructor</h1>
        <Spacer className={"h-8"} />
        <div className="flex justify-center space-x-16">
          <Instructor
            name={"Nila Dwi Sanja"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, temporibus."
            }
          />
          <Instructor
            name={"Kiki Dwi Ratna"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, temporibus."
            }
          />
          <Instructor
            name={"Ajeng Tsani"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, temporibus."
            }
          />
        </div>
      </div>
      <Spacer className={"h-20"} />
      <BannerEnroll />
      <div className="container">
        <Spacer className={"h-8"} />
        <h1 className="text-3xl text-gray-800 ">You may also like</h1>
        <Spacer className={"h-8"} />
        <div className="flex space-x-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Spacer className="h-20" />
      <BannerFull />
      <FooterFull />
    </div>
  );
}
