import React from "react";
import WeBuilt from "../../Molecules/WeBuilt/WeBuilt";
import LatestProject from "../../Molecules/LatestProject/LatestProject";
import StudioServicesMarge from "../../Molecules/StudioServicesMarge/StudioServicesMarge";
import Slider from "../../Molecules/Slider/Slider";

const Main = () => {
  return (
    <div className="px-[150px] bg-black">
      <WeBuilt />
      <LatestProject />
      <StudioServicesMarge />
      <Slider />
    </div>
  );
};

export default Main;
