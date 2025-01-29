import React from 'react'
import HeadLineText from '../../Atoms/HeadLineText/HeadLineText'
import StudioServices from '../../Atoms/StudioServices/StudioServices'

const StudioServicesMarge = () => {
  return (
        <div>  
            <div className='my-20'>
                <HeadLineText 
                    hOneTitle='STUDIO'
                    pTitle='SERVICES'
                    strokeWidth='700px'
                />
            </div>
            <div className='pb-24'>
                <div>
                    <StudioServices 
                        pNumber='01'
                        hText='Website'
                        imgSrc='/images/image1.jpg'
                    />
                </div>
                <div>            
                    <StudioServices 
                        pNumber='02'
                        hText='UI/UX'
                        imgSrc='/images/image1.jpg'
                    />
                </div>
                <div>            
                    <StudioServices 
                        pNumber='03'
                        hText='Social Media Guideline'
                        imgSrc='/images/image1.jpg'
                    /> 
                </div>
                <div>
                    <StudioServices 
                        pNumber='04'
                        hText='Motion'
                        imgSrc='/images/image1.jpg'
                    />  
                </div>
                <div>                        
                    <StudioServices 
                        pNumber='05'
                        hText='BRAND STRATEGY'
                        imgSrc='/images/image1.jpg'
                    />  
                </div>
            </div>   
        </div>
    )
}

export default StudioServicesMarge