import React from "react";
import WeBuilt from "../../Molecules/WeBuilt/WeBuilt";
import LatestProject from "../../Molecules/LatestProject/LatestProject";
import StudioServicesMarge from "../../Molecules/StudioServicesMarge/StudioServicesMarge";

const Main = () => {
  return (
    <div className="px-[150px] bg-black">
      <WeBuilt />
      <LatestProject/>
      <StudioServicesMarge/>
    </div>
  );
};

export default Main;
