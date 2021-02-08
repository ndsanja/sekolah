import HeaderWebsite from "../components/Header/HeaderWebsite";
import NewsFeeds from "../components/News/NewsFeeds";
import Spacer from "../components/Spacer";

export default function index() {
  return (
    <div className="bg-gray-100">
      <HeaderWebsite />
      <Spacer className="h-12" />
      <NewsFeeds />
    </div>
  );
}
