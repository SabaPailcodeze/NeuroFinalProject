"use client";
import React, { useState } from "react";
import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";
import Project from "../../Atoms/Project/Project";
import ReadButton from "../../Atoms/ReadButton/ReadButton";

const LatestProject = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col">
      <HeadLineText hOneTitle="LATEST" pTitle="PROJECTS"  />
      <div className="flex overflow-x-auto w-full lg:block lg:overflow-x-hidden lg:flex-none lg:w-auto lg:pt-0 pt-16"
          style={{
            paddingBottom: '32px',
            scrollbarWidth: 'thin', 
            scrollbarColor: 'white black' 
          }}
      >
        <div className="flex gap-6 justify-between lg:pt-28 pt-0 pr-6">
          <Project
            numberCount="01"
            hText="MAQUILADORA ARCHITECT"
            pDescription="When art meet technology  Maquiladora studio revamp their online presence."
            pTitle="WEB DESIGN / WEB DEVELOPMENT"
            pProfessio="ARCHITECTURE"
            image="/Images/image2.jpg"
          />
          <Project
            numberCount="02"
            hText="CODEX CONSULTING"
            pDescription="Codex brings new perspective in business consulting paradigm with their new identity."
            pTitle="BRAND IDENTITY"
            pProfessio="BUSINESS CONSULTING"
            image="/Images/image8.jpg"
          />
        </div>
        <div className="flex gap-6 justify-between lg:pt-28 pt-0 pr-6">
          <Project
            numberCount="03"
            hText="RAUNG PACK"
            pDescription="Our collaborations with latest outdoors gear for their website."
            pTitle="WEB DESIGN / WEB DEVELOPMENT"
            pProfessio="HIKING GEARS"
            image="/Images/image5.jpg"
          />
          <Project
            numberCount="04"
            hText="OMBAX SURFBOARDS"
            pDescription="Ombax new logo redefined."
            pTitle="BRAND IDENTITY"
            pProfessio="OUTDOOR"
            image="/Images/image7.jpg"
          />
        </div>
        <div
          className={`lg:pt-28 pt-0 transition-all duration-700 ease-in-out lg:overflow-hidden overflow-visible ${
            showMore ? "h-[750px]" : "h-0"
          }`}
        >
          <div className="flex gap-6 justify-between pr-6">
            <Project
              numberCount="05"
              hText="Hiking"
              pDescription="latest  gear for their ski."
              pTitle="Ski DESIGN / Snow Board"
              pProfessio="HIKING GEARS"
              image="/Images/image3.jpg"
            />
            <Project
              numberCount="06"
              hText="OMBAX SURFBOARDS"
              pDescription="Ombax new logo redefined."
              pTitle="BRAND IDENTITY"
              pProfessio="OUTDOOR"
              image="/Images/image6.jpg"
            />
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <ReadButton
          text={showMore ? "Show Less" : "more works"}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default LatestProject;
