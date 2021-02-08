import AboutUs from "../components/AboutUs/AboutUs";
import Akademik from "../components/Akademik/Akademik";
import BannerCourse from "../components/Banner/BannerCourse";
import BannerVideo from "../components/Banner/BannerVideo";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import HeaderWebsite from "../components/Header/HeaderWebsite";
import NewsFeeds from "../components/News/NewsFeeds";
import NonAkademik from "../components/NonAkademik/NonAkademik";
import Ppdb from "../components/ppdb/ppdb";
import SchoolLife from "../components/SchoolLife/SchoolLife";
import Spacer from "../components/Spacer";

export default function index() {
  return (
    <div className="bg-gray-50">
      <HeaderWebsite />
      <Spacer className="h-10" />
      <NewsFeeds />
      <BannerVideo />
      <Events />
      <Akademik />
      <BannerCourse />
      <NonAkademik />
      <SchoolLife />
      <Ppdb />
      <AboutUs />
      <Footer />
    </div>
  );
}
