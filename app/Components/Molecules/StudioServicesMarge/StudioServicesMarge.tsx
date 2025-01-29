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
                        top='112'
                    />
                </div>
                <div>            
                    <StudioServices 
                        pNumber='02'
                        hText='UI/UX'
                        top='9'
                    />
                </div>
                <div>            
                    <StudioServices 
                        pNumber='03'
                        hText='Social Media Guideline'
                        top='-94'
                    /> 
                </div>
                <div>
                    <StudioServices 
                        pNumber='04'
                        hText='Motion'
                        top='-197'
                    />  
                </div>
                <div>                        
                    <StudioServices 
                        pNumber='05'
                        hText='BRAND STRATEGY'
                        top='-300'
                    />  
                </div>
            </div>   
        </div>
    )
}

export default StudioServicesMarge