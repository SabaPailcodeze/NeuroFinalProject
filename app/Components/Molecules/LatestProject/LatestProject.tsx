"use client"
import React, {useState} from 'react'
import HeadLineText from '../../Atoms/HeadLineText/HeadLineText'
import Project from '../../Atoms/Project/Project'
import ReadButton from '../../Atoms/ReadButton/ReadButton'

const LatestProject = () => {
  const [showMore, setShowMore] = useState<boolean>(true);

  const handleButtonClick = (): any => {
    setTimeout(() => {
      setShowMore((prev) => !prev); 
    }, 300); 
  };

  return (
    <div>
        <HeadLineText
          hOneTitle='LATEST'
          pTitle = 'PROJECTS'
          strokeWidth = '570px'
        />
        <div className='mt-32'>
          <div className='flex gap-10 mt-32'>
            <Project
              numberCount= '01'
              hText='Maquiladora ARCHITECT'
              pDescription='When art meet technology and nature, Maquiladora studio revamp their online presence.'
              pTitle='WEB DESIGN / WEB DEVELOPMENT'
              pProfessio='ARCHITECTURE'
            />
            <Project
              numberCount= '02'
              hText='Codex CONSULTING'
              pDescription='Codex brings new perspective in business consulting paradigm with their new identity.'
              pTitle='BRAND IDENTITY'
              pProfessio='BUSINESS CONSULTING'
            />
          </div>
          <div className='flex gap-10 mt-32'>
            <Project
                numberCount= '03'
                hText='RAUNG PACK'
                pDescription='Our collaborations with latest outdoors gear for their website.'
                pTitle='WEB DESIGN / WEB DEVELOPMENT'
                pProfessio='HIKING GEARS'
              />
              <Project
                numberCount= '04'
                hText='OMBAX SURFBOARDS'
                pDescription='Ombax new logo redefined.'
                pTitle='BRAND IDENTITY'
                pProfessio='OUTDOOR'
              />
          </div>
          <div
            className={`mt-32 transition-all duration-700 ease-in-out overflow-hidden ${
              showMore ? 'h-0 ' : 'h-[700px]' 
            }`}
          >
            <div className='flex gap-10 '>
              <Project
                    numberCount= '05'
                    hText='Hiking'
                    pDescription='latest  gear for their ski.'
                    pTitle='Ski DESIGN / Snow Board'
                    pProfessio='HIKING GEARS'
                  />
                  <Project
                    numberCount= '06'
                    hText='OMBAX SURFBOARDS'
                    pDescription='Ombax new logo redefined.'
                    pTitle='BRAND IDENTITY'
                    pProfessio='OUTDOOR'
                />
            </div>  
          </div>
        </div>
        <div>
          <ReadButton 
            text='More workS'
            onClick={handleButtonClick}
          />
        </div>
    </div>
  )
}

export default LatestProject