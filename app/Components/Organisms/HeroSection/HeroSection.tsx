// "use client";
// import React, { useState } from "react";
// import SideBar from "../../Atoms/SideBar/SideBar";
// import HeroMain from "../../Molecules/HeroMain/HeroMain";

// const HeroSection = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="md:h-[100vh] w-[100%] flex bg-image1 bg-cover bg-no-repeat bg-center font-supreme">
//       <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
//       <HeroMain isOpen={isOpen} />
//     </div>
//   );
// };

// export default HeroSection;

"use client";
import React, { useState } from "react";
import SideBar from "../../Atoms/SideBar/SideBar";
import HeroMain from "../../Molecules/HeroMain/HeroMain";
import HeroSectionTxt from "../../Atoms/HeroSectionTxt/HeroSectionTxt";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[1050px] md:h-[100vh] w-[100%]">
      <div className="w-full h-[408px] md:h-full flex bg-image1 bg-cover bg-no-repeat bg-center font-supreme relative">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeroMain isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex md:hidden absolute top-80 w-full">
        <HeroSectionTxt isOpen={isOpen} />
      </div>
    </div>
  );
};

export default HeroSection;

// სქროლი არი გასაკეთებელი ტელეფონებზე არ ისქროლება ბაგი აქვს,
// ასევე ტელეფონებზე ზევიდან უნდა ჩაოიშალოს მენიუ
