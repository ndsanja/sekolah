import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Spacer from "../../components/Spacer";
import SectionTitle from "../../components/SectionTitle";

export default function index() {
  return (
    <div className="bg-gray-50">
      <Header />
      <div className="pt-10">
        <div className="container px-24">
          <SectionTitle title={"Featured"} btnTitle={"View All Course"} />
          <Spacer className={"h-10"} />
          <div className="flex space-x-8">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Spacer className={"h-20"} />
        <div className="container px-24">
          <SectionTitle title={"Recently Added"} btnTitle={"View All Course"} />
          <Spacer className={"h-10"} />
          <div className="flex space-x-8">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Spacer className={"h-20"} />
        <Banner />
        <Spacer className={"h-20"} />
        <div className="container px-24">
          <SectionTitle title={"Trending"} btnTitle={"View All Course"} />
          <Spacer className={"h-10"} />
          <div className="flex space-x-8">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Spacer className={"h-20"} />
        <div className="container px-24">
          <SectionTitle title={"Starting Soon"} btnTitle={"View All Course"} />
          <Spacer className={"h-10"} />
          <div className="flex space-x-8">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Spacer className={"h-20"} />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
