"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderContent from "../SliderContent/SliderContent";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full text-white"
      >
        <SwiperSlide>
          <SliderContent
            pageNumber="01"
            hTitle="RAUNG PACK REBRANDING, Beyond the Office, Out of the Landfill"
            pDescription="Our collaborations with latest outdoors gear for their website."
            Pdate="JUNE 12, 2022"
            pProf="ARCHITECTURE"
            imgSrc="/Images/image4.jpg"
          />
        </SwiperSlide> 
        <SwiperSlide>
          <SliderContent
            pageNumber="02"
            hTitle="CODEX CONSULTING"
            pDescription="Codex brings new perspective in business consulting paradigm with their new identity."
            Pdate="JUNE 14, 2023"
            pProf="BUSINESS CONSULTING"
            imgSrc="/Images/image5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            pageNumber="03"
            hTitle="RAUNG PACK"
            pDescription="Our collaborations with latest outdoors gear for their website."
            Pdate="JUNE 20, 1996"
            pProf="OUTDOOR"
            imgSrc="/Images/image2.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;