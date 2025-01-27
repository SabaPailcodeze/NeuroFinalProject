// "use client";
// import React, { useState } from "react";
// import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";
// import Project from "../../Atoms/Project/Project";
// import ReadButton from "../../Atoms/ReadButton/ReadButton";

// const LatestProject = () => {
//   const [showMore, setShowMore] = useState<boolean>(true);

//   const handleButtonClick = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="flex flex-col gap-20">
//       <HeadLineText hOneTitle="LATEST" pTitle="PROJECTS" strokeWidth="570px" />
//       <div className="flex flex-col gap-[120px] pt-10">
//         <div className="flex gap-10">
//           <Project
//             numberCount="01"
//             hText="MAQUILADORA ARCHITECT"
//             pDescription="When art meet technology and nature, Maquiladora studio revamp their online presence."
//             pTitle="WEB DESIGN / WEB DEVELOPMENT"
//             pProfessio="ARCHITECTURE"
//           />
//           <Project
//             numberCount="02"
//             hText="CODEX CONSULTING"
//             pDescription="Codex brings new perspective in business consulting paradigm with their new identity."
//             pTitle="BRAND IDENTITY"
//             pProfessio="BUSINESS CONSULTING"
//           />
//         </div>
//         <div className="flex gap-10">
//           <Project
//             numberCount="03"
//             hText="RAUNG PACK"
//             pDescription="Our collaborations with latest outdoors gear for their website."
//             pTitle="WEB DESIGN / WEB DEVELOPMENT"
//             pProfessio="HIKING GEARS"
//           />
//           <Project
//             numberCount="04"
//             hText="OMBAX SURFBOARDS"
//             pDescription="Ombax new logo redefined."
//             pTitle="BRAND IDENTITY"
//             pProfessio="OUTDOOR"
//           />
//         </div>
//         {showMore && (
//           <div
//             className={`transition-all duration-700 ease-in-out

//             }`}
//           >
//             <div className="flex gap-10 ">
//               <Project
//                 numberCount="05"
//                 hText="HIKING"
//                 pDescription="latest  gear for their ski."
//                 pTitle="Ski DESIGN / Snow Board"
//                 pProfessio="HIKING GEARS"
//               />
//               <Project
//                 numberCount="06"
//                 hText="OMBAX SURFBOARDS"
//                 pDescription="Ombax new logo redefined."
//                 pTitle="BRAND IDENTITY"
//                 pProfessio="OUTDOOR"
//               />
//             </div>
//           </div>
//         )}
//         {/* make cards revealing smoother */}
//       </div>
//       <ReadButton text="more works" onClick={handleButtonClick} />
//     </div>
//   );
// };

// export default LatestProject;

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";
// import Project from "../../Atoms/Project/Project";
// import ReadButton from "../../Atoms/ReadButton/ReadButton";

// const LatestProject = () => {
//   const [showMore, setShowMore] = useState<boolean>(false);

//   const handleButtonClick = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="flex flex-col gap-20">
//       <HeadLineText hOneTitle="LATEST" pTitle="PROJECTS" strokeWidth="570px" />
//       <div className="flex flex-col pt-10">
//         <div className="flex gap-10 mt-32">
//           <Project
//             numberCount="01"
//             hText="MAQUILADORA ARCHITECT"
//             pDescription="When art meet technology and nature, Maquiladora studio revamp their online presence."
//             pTitle="WEB DESIGN / WEB DEVELOPMENT"
//             pProfessio="ARCHITECTURE"
//           />
//           <Project
//             numberCount="02"
//             hText="CODEX CONSULTING"
//             pDescription="Codex brings new perspective in business consulting paradigm with their new identity."
//             pTitle="BRAND IDENTITY"
//             pProfessio="BUSINESS CONSULTING"
//           />
//         </div>
//         <div className="flex gap-10 mt-32">
//           <Project
//             numberCount="03"
//             hText="RAUNG PACK"
//             pDescription="Our collaborations with latest outdoors gear for their website."
//             pTitle="WEB DESIGN / WEB DEVELOPMENT"
//             pProfessio="HIKING GEARS"
//           />
//           <Project
//             numberCount="04"
//             hText="OMBAX SURFBOARDS"
//             pDescription="Ombax new logo redefined."
//             pTitle="BRAND IDENTITY"
//             pProfessio="OUTDOOR"
//           />
//         </div>
//         {/* {showMore && (
//           <div
//             className={`transition-all duration-700 ease-in-out

//             }`}
//           >
//             <div className="flex gap-10 ">
//               <Project
//                 numberCount="05"
//                 hText="HIKING"
//                 pDescription="latest  gear for their ski."
//                 pTitle="Ski DESIGN / Snow Board"
//                 pProfessio="HIKING GEARS"
//               />
//               <Project
//                 numberCount="06"
//                 hText="OMBAX SURFBOARDS"
//                 pDescription="Ombax new logo redefined."
//                 pTitle="BRAND IDENTITY"
//                 pProfessio="OUTDOOR"
//               />
//             </div>
//           </div>
//         )} */}
//         {/* <div
//           className={` transition-all duration-700 ease-in-out overflow-hidden ${
//             showMore ? "h-0 " : "h-[700px]"
//           }`}
//         >
//           <div className="flex gap-10 ">
//             <Project
//               numberCount="05"
//               hText="Hiking"
//               pDescription="latest  gear for their ski."
//               pTitle="Ski DESIGN / Snow Board"
//               pProfessio="HIKING GEARS"
//             />
//             <Project
//               numberCount="06"
//               hText="OMBAX SURFBOARDS"
//               pDescription="Ombax new logo redefined."
//               pTitle="BRAND IDENTITY"
//               pProfessio="OUTDOOR"
//             />
//           </div>
//         </div> */}
//         <div
//           className={`mt-32 transition-all duration-700 ease-in-out overflow-hidden ${
//             showMore ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="flex gap-10">
//             <Project
//               numberCount="05"
//               hText="HIKING"
//               pDescription="latest gear for their ski."
//               pTitle="Ski DESIGN / Snow Board"
//               pProfessio="HIKING GEARS"
//             />
//             <Project
//               numberCount="06"
//               hText="OMBAX SURFBOARDS"
//               pDescription="Ombax new logo redefined."
//               pTitle="BRAND IDENTITY"
//               pProfessio="OUTDOOR"
//             />
//           </div>
//         </div>
//       </div>
//       <ReadButton
//         text={showMore ? "show less" : "more works"}
//         onClick={handleButtonClick}
//       />
//     </div>
//   );
// };

// export default LatestProject;

"use client";
import React, { useState } from "react";
import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";
import Project from "../../Atoms/Project/Project";
import ReadButton from "../../Atoms/ReadButton/ReadButton";

const LatestProject = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleButtonClick = (): any => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-30">
      <HeadLineText hOneTitle="LATEST" pTitle="PROJECTS" strokeWidth="570px" />
      <div>
        <div className="flex gap-10 mt-32">
          <Project
            numberCount="01"
            hText="MAQUILADORA ARCHITECT"
            pDescription="When art meet technology and nature, Maquiladora studio revamp their online presence."
            pTitle="WEB DESIGN / WEB DEVELOPMENT"
            pProfessio="ARCHITECTURE"
          />
          <Project
            numberCount="02"
            hText="CODEX CONSULTING"
            pDescription="Codex brings new perspective in business consulting paradigm with their new identity."
            pTitle="BRAND IDENTITY"
            pProfessio="BUSINESS CONSULTING"
          />
        </div>
        <div className="flex gap-10 mt-32">
          <Project
            numberCount="03"
            hText="RAUNG PACK"
            pDescription="Our collaborations with latest outdoors gear for their website."
            pTitle="WEB DESIGN / WEB DEVELOPMENT"
            pProfessio="HIKING GEARS"
          />
          <Project
            numberCount="04"
            hText="OMBAX SURFBOARDS"
            pDescription="Ombax new logo redefined."
            pTitle="BRAND IDENTITY"
            pProfessio="OUTDOOR"
          />
        </div>
        <div
          className={`mt-32 transition-all duration-700 ease-in-out overflow-hidden ${
            showMore ? "h-[700px]" : "h-0"
          }`}
        >
          <div className="flex gap-10 ">
            <Project
              numberCount="05"
              hText="Hiking"
              pDescription="latest  gear for their ski."
              pTitle="Ski DESIGN / Snow Board"
              pProfessio="HIKING GEARS"
            />
            <Project
              numberCount="06"
              hText="OMBAX SURFBOARDS"
              pDescription="Ombax new logo redefined."
              pTitle="BRAND IDENTITY"
              pProfessio="OUTDOOR"
            />
          </div>
        </div>
      </div>
      <div>
        <ReadButton text="More workS" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default LatestProject;
