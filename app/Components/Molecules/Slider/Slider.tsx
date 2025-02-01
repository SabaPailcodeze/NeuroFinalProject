"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";
import ReadButton from "../../Atoms/ReadButton/ReadButton";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-20 pb-28">
      <HeadLineText hOneTitle="Latest" pTitle="thoughts" />
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
          <div className="flex flex-col md:flex-row gap-16 lg:gap-28 cursor-pointer">
            <div
              className="relative md:w-[440px] justify-center h-[408px] bg-image4 bg-cover bg-center md:flex-[2] font-supreme cursor-pointer"
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
                className="text-white absolute bottom-2 md:bottom-1 md:left-0 -rotate-90 text-[90px] xsm:text-[120px] lg:text-[168px]"
              >
                01
              </p>
            </div>
            <div className="flex flex-col  md:flex-[3] gap-4 justify-end">
              <h3 className="text-[24px] md:text-[32px] text-c-yellow font-medium leading-[120%] tracking-[4px] uppercase">
                RAUNG PACK REBRANDING, Beyond the Office, Out of the Landfill{" "}
              </h3>
              <p className="text-[18px] md:text-[20px] font-light leading-[160%]">
                Our collaborations with latest outdoors gear for their website.
              </p>
              <p className="text-[14px] tracking-[1px] font-normal opacity-[0.4]">
                JUNE 12, 2022
              </p>
              <span className="flex md:hidden items-center gap-2">
                <Image
                  src="/Svgs/circle.svg"
                  alt="circle"
                  width={4}
                  height={4}
                />
                <p className="uppercase text-[14px] font-normal tracking-[1px]">
                  ARCHITECTURE
                </p>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-16 lg:gap-28 cursor-pointer">
            <div
              className="relative  md:w-[440px] justify-center h-[408px] bg-image5 bg-cover bg-center md:flex-[2] font-supreme cursor-pointer"
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
                className="text-white absolute bottom-2 md:bottom-1 md:left-0 -rotate-90 text-[90px] xsm:text-[120px] lg:text-[168px]"
              >
                02
              </p>
            </div>
            <div className="flex flex-col  md:flex-[3] gap-4 justify-end">
              <h3 className="text-[24px] md:text-[32px] text-c-yellow font-medium leading-[120%] tracking-[4px] uppercase">
                CODEX CONSULTING
              </h3>
              <p className="text-[18px] md:text-[20px] font-light leading-[160%]">
                Codex brings new perspective in business consulting paradigm
                with their new identity.
              </p>
              <p className="text-[14px] tracking-[1px] font-normal opacity-[0.4]">
                JUNE 14, 2022
              </p>
              <span className="flex md:hidden items-center gap-2">
                <Image
                  src="/Svgs/circle.svg"
                  alt="circle"
                  width={4}
                  height={4}
                />
                <p className="uppercase text-[14px] font-normal tracking-[1px]">
                  BUSINESS CONSULTING
                </p>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-16 lg:gap-28 cursor-pointer">
            <div
              className="relative md:w-[440px] justify-center h-[408px] bg-image2 bg-cover bg-center md:flex-[2] font-supreme cursor-pointer"
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
                className="text-white absolute bottom-2 md:bottom-1 md:left-0 -rotate-90 text-[90px] xsm:text-[120px] lg:text-[168px]"
              >
                03
              </p>
            </div>
            <div className="flex flex-col  md:flex-[3] gap-4 justify-end">
              <h3 className="text-[24px] md:text-[32px] text-c-yellow font-medium leading-[120%] tracking-[4px] uppercase">
                RAUNG PACK
              </h3>
              <p className="text-[18px] md:text-[20px] font-light leading-[160%]">
                Our collaborations with latest outdoors gear for their website.
              </p>
              <p className="text-[14px] tracking-[1px] font-normal opacity-[0.4]">
                JUNE 16, 2022
              </p>
              <span className="flex md:hidden items-center gap-2">
                <Image
                  src="/Svgs/circle.svg"
                  alt="circle"
                  width={4}
                  height={4}
                />
                <p className="uppercase text-[14px] font-normal tracking-[1px]">
                  OUTDOOR
                </p>
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col md:flex-row justify-between">
        <ReadButton text="more stories" width="w-full" />
        <div className="hidden md:block">
          <div className="custom-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
