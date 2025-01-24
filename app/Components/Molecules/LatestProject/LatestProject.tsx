import React from 'react'
import HeadLineText from '../../Atoms/HeadLineText/HeadLineText'
import Project from '../../Atoms/Project/Project'

const LatestProject = () => {
  return (
    <div>
        <HeadLineText
          hOneTitle='LATEST'
          pTitle = 'PROJECTS'
          strokeWidth = '570px'
        />
        <Project/>
    </div>
  )
}

export default LatestProject