"use client";
import { useState } from "react";
import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";
import Slider from "../../Atoms/Slider/Slider";
import ReadButton from "../../Atoms/ReadButton/ReadButton";
import SliderContent from "../../Atoms/SliderContent/SliderContent";

const SliderMarge = () => {
  const [show, setShow] = useState<boolean>(true);

  const handlerButton = () => {
    setShow(!show);
  };
  return (
    <div className="w-full flex flex-col gap-8 md:gap-20 pb-28">
      <HeadLineText hOneTitle="Latest" pTitle="thoughts" />
      {!show ? (
        <div>
          <div>
            <SliderContent
              pageNumber="01"
              hTitle="RAUNG PACK REBRANDING, Beyond the Office, Out of the Landfill"
              pDescription="Our collaborations with latest outdoors gear for their website."
              Pdate="JUNE 12, 2022"
              pProf="ARCHITECTURE"
              imgSrc="/Images/image4.jpg"
            />
          </div>
          <div className="py-10">
            <SliderContent
              pageNumber="02"
              hTitle="CODEX CONSULTING"
              pDescription="Codex brings new perspective in business consulting paradigm with their new identity."
              Pdate="JUNE 14, 2023"
              pProf="BUSINESS CONSULTING"
              imgSrc="/Images/image5.jpg"
            />
          </div>
          <div>
            <SliderContent
              pageNumber="03"
              hTitle="RAUNG PACK"
              pDescription="Our collaborations with latest outdoors gear for their website."
              Pdate="JUNE 20, 1996"
              pProf="OUTDOOR"
              imgSrc="/Images/image2.jpg"
            />
          </div>
        </div>
      ) : (
        <Slider />
      )}

      <div className="flex pr-6 flex-col md:flex-row justify-between">
        <ReadButton
          onClick={handlerButton}
          text={show ? "more stories" : "slider"}
          width="w-full"
        />
        {show && (
          <div className="hidden md:block">
            <div className="custom-pagination"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderMarge;
