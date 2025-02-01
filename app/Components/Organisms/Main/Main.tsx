import React from "react";
import WeBuilt from "../../Molecules/WeBuilt/WeBuilt";
import LatestProject from "../../Molecules/LatestProject/LatestProject";
import StudioServicesMarge from "../../Molecules/StudioServicesMarge/StudioServicesMarge";
import Slider from "../../Molecules/Slider/Slider";

const Main = () => {
  return (
    <div className="px-6 md:px-[75px] xl:px-[150px] bg-black">
      <WeBuilt
        WebkitTextStrokeWidth="2px"
        WebkitTextStrokeColor="#666"
        color="#E5E548"
        webkitSpanStroke="#E5E548"
        hTeaxt="WE BUILD IMMERSIVE DESIGN"
        pText="SOLUTIONS"
        lastHtext="FOR YOUR INNOVATIVE BRANDS"
      />
      <LatestProject />
      <StudioServicesMarge />
      <Slider />
    </div>
  );
};

export default Main;
