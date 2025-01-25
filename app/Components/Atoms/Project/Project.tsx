import React from "react";
interface ProjectProps {
  numberCount: string;
  hText: string;
  pDescription: string;
  pTitle: string;
  pProfessio: string;
}

const Project = ({
  numberCount,
  hText,
  pDescription,
  pTitle,
  pProfessio,
}: ProjectProps) => {
  return (
    <div className="font-supreme">
      <div
        className="w-[550px] h-[408px] relative bg-image3 bg-cover grayscale group hover:grayscale-0 font-supreme transition-all duration-300 ease-out cursor-pointer"
        style={{
          clipPath: "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          className="absolute bottom-0 left-0 w-full h-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 1) 80%, rgba(229, 229, 72, 0.3) 80%, rgba(229, 229, 72, 0.2) 100%)",
          }}
        >
          <div className="absolute bg-black rounded-full bottom-5 right-8 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="22"
              viewBox="0 0 26 22"
              fill="none"
            >
              <path d="M16 21L24 11L16 1" stroke="white" strokeWidth="1.6" />
              <path d="M0 11L16 11" stroke="white" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
        <p
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#ffffff",
            color: "transparent",
          }}
          className="text-white absolute bottom-0 left-0 -rotate-90 text-[168px]"
        >
          {numberCount}
        </p>
      </div>
      <div className="text-white ml-10 tracking-wide font-medium leading-[160%]">
        <h3 className="mt-8 mb-4 text-[#E5E548] text-2xl">{hText}</h3>
        <p className="text-lg w-[440px] mt-4 mb-2">{pDescription}</p>
        <p className="opacity-[0.3] uppercase">{pTitle}</p>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#E5E548" />
          </svg>
          <p className="uppercase">{pProfessio}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
