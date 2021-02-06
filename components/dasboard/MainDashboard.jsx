import LeftBar from "./LeftBar";
import MainContent from "./MainContent";
import RightBar from "./RightBar";
import { useState } from "react";

export default function MainDashboard() {
  const [leftOpen, isLeftOpen] = useState(true);
  const [rightOpen, isRightOpen] = useState(true);

  const toogleLeft = () => isLeftOpen(!leftOpen);
  const toogleRight = () => isRightOpen(!rightOpen);

  return (
    <div className="h-screen overflow-y-scroll">
      <div className="relative flex justify-between lg:container lg:px-4">
        <LeftBar leftOpen={leftOpen} />
        <MainContent
          toogleLeft={toogleLeft}
          leftOpen={leftOpen}
          toogleRight={toogleRight}
          rightOpen={rightOpen}
        />
        <RightBar rightOpen={rightOpen} />
      </div>
    </div>
  );
}
