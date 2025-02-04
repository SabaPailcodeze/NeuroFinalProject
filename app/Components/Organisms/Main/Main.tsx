import React from "react";
import WeBuilt from "../../Molecules/WeBuilt/WeBuilt";
import LatestProject from "../../Molecules/LatestProject/LatestProject";
import StudioServicesMarge from "../../Molecules/StudioServicesMarge/StudioServicesMarge";
import SliderMarge from "../../Molecules/SliderMarge/SliderMarge";

const Main = () => {
  return (
    <div className="pl-6 md:px-[75px] xl:px-[150px] bg-black">
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
      <SliderMarge/>
    </div>
  );
};

export default Main;
