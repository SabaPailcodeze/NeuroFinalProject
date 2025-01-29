"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";
import ReadButton from "../../Atoms/ReadButton/ReadButton";

const Slider = () => {
  return (
    <div className=" w-full flex flex-col gap-20">
      <HeadLineText hOneTitle="Latest" pTitle="thoughts" />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Navigation, Pagination]}
        className="w-full text-white"
      >
        <SwiperSlide>
          <div className="flex gap-x-28 cursor-pointer">
            <div
              className="w-[440px] h-[408px] bg-image4 bg-cover bg-center flex-[2] font-supreme cursor-pointer"
              style={{
                clipPath:
                  "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#ffffff",
                  color: "transparent",
                }}
                className="text-white absolute bottom-1 left-0 -rotate-90 text-[168px]"
              >
                01
              </p>
            </div>
            <div className="flex flex-col flex-[3] gap-4 justify-end">
              <h3 className="text-[32px] text-c-yellow font-medium leading-[120%] tracking-[4px] uppercase">
                RAUNG PACK REBRANDING, Beyond the Office, Out of the Landfill{" "}
              </h3>
              <p className="text-[20px] font-light leading-[160%]">
                Our collaborations with latest outdoors gear for their website.
              </p>
              <p className="text-[14px] tracking-[1px] font-normal opacity-[0.4]">
                JUNE 12, 2022
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-x-28 cursor-pointer">
            <div
              className="w-[440px] h-[408px] bg-image5 bg-cover flex-[2] font-supreme cursor-pointer"
              style={{
                clipPath:
                  "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#ffffff",
                  color: "transparent",
                }}
                className="text-white absolute bottom-1 left-0 -rotate-90 text-[168px]"
              >
                02
              </p>
            </div>
            <div className="flex flex-col flex-[3] gap-4 justify-end">
              <h3 className="text-[32px] text-c-yellow font-medium leading-[120%] tracking-[4px] uppercase">
                CODEX CONSULTING
              </h3>
              <p className="text-[20px] font-light leading-[160%]">
                Codex brings new perspective in business consulting paradigm
                with their new identity.
              </p>
              <p className="text-[14px] tracking-[1px] font-normal opacity-[0.4]">
                JUNE 14, 2022
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-x-28 cursor-pointer">
            <div
              className="w-[440px] h-[408px] bg-image2 bg-cover flex-[2] font-supreme cursor-pointer"
              style={{
                clipPath:
                  "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#ffffff",
                  color: "transparent",
                }}
                className="text-white absolute bottom-1 left-0 -rotate-90 text-[168px]"
              >
                03
              </p>
            </div>
            <div className="flex flex-col flex-[3] gap-4 justify-end">
              <h3 className="text-[32px] text-c-yellow font-medium leading-[120%] tracking-[4px] uppercase">
                RAUNG PACK
              </h3>
              <p className="text-[20px] font-light leading-[160%]">
                Our collaborations with latest outdoors gear for their website.
              </p>
              <p className="text-[14px] tracking-[1px] font-normal opacity-[0.4]">
                JUNE 16, 2022
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-between">
        <ReadButton text="more stories" />
        <div>
          <div className="custom-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
