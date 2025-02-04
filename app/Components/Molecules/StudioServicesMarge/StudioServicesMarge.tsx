import React from 'react'
import HeadLineText from '../../Atoms/HeadLineText/HeadLineText'
import StudioServices from '../../Atoms/StudioServices/StudioServices'
import CircleButton from '../../Atoms/CircleButton/CircleButton'

const StudioServicesMarge = () => {
  return (
        <div className='relative'>  
            <div className='py-20'>
                <HeadLineText 
                    hOneTitle='STUDIO'
                    pTitle='SERVICES'
                />
            </div>
            <div className='pb-24'>
                <div>
                    <StudioServices 
                        pNumber='01'
                        hText='Website'
                        top='112'
                        imageSrc='/Images/image5.jpg'
                    />
                </div>
                <div>            
                    <StudioServices 
                        pNumber='02'
                        hText='UI/UX'
                        top='9'
                        imageSrc='/Images/image1.jpg'
                    />
                </div>
                <div>            
                    <StudioServices 
                        pNumber='03'
                        hText='Social Media Guide'
                        top='-94'
                        imageSrc='/Images/image2.jpg'
                    /> 
                </div>
                <div>
                    <StudioServices 
                        pNumber='04'
                        hText='Motion'
                        top='-197'
                        imageSrc='/Images/image3.jpg'
                    />  
                </div>
                <div>                        
                    <StudioServices 
                        pNumber='05'
                        hText='BRAND STRATEGY'
                        top='-300'
                        imageSrc='/Images/image4.jpg'
                    />  
                </div>
            </div>
            <div className='absolute top-[48.1%] left-[70%] lg:left-[75%] lg:flex justify-center align-middle hidden'>
                <div 
                    className="w-72 h-96 bg-gray-700  left-[10%]"
                    style={{
                        clipPath: "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}>
                </div>
                <div className="absolute z-50 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-full h-ful pointer-events-none">
                    <CircleButton text="VIEW WORK" color="#E5E548" />
                </div>
            </div>
        </div>
    )
}

export default StudioServicesMarge