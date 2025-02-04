// import { ButtonProps } from "@/app/types/types";
// import React from "react";

// const BurgerButton = ({ isOpen, toggleBtn }): ButtonProps => {
//   return (
//     <button
//       type="button"
//       className="flex md:hidden flex-col justify-between w-8 h-5 z-50"
//     >
//       <div
//         className={`${
//           isOpen && "transform translate-y-2 rotate-45"
//         } h-[15%] w-full rounded-2xl duration-500   bg-white`}
//       ></div>
//       <div
//         className={` ${
//           isOpen && "opacity-0"
//         } h-[15%] w-full rounded-2xl bg-white duration-500`}
//       ></div>
//       <div
//         className={`${
//           isOpen && "transform -translate-y-[9px] -rotate-45"
//         } duration-500 h-[15%] w-full rounded-2xl bg-white`}
//       ></div>
//     </button>
//   );
// };

// export default BurgerButton;

import React from "react";
import { ButtonProps } from "@/app/types/types";

const BurgerButton: React.FC<Pick<ButtonProps, "isOpen" | "toggleBtn">> = ({
  isOpen,
  toggleBtn,
}) => {
  return (
    <button
      type="button"
      onClick={toggleBtn}
      className="flex flex-col justify-between w-8 h-5"
    >
      <div
        className={`h-[15%] w-full duration-500 bg-white rounded-[16px] ${
          isOpen && "transform translate-y-2 rotate-45"
        }`}
      ></div>
      <div
        className={`h-[15%] w-full bg-white duration-300 rounded-[16px] ${
          isOpen && "opacity-0"
        }`}
      ></div>
      <div
        className={`duration-500 h-[15%] w-full bg-white rounded-[16px] ${
          isOpen && "transform -translate-y-[9px] -rotate-45"
        } `}
      ></div>
    </button>
  );
};

export default BurgerButton;
