import React from 'react'
import Icon1 from '../../images/svg-11.svg'
import Icon2 from '../../images/svg-10.svg'
import Icon3 from '../../images/svg-9.svg'
import {ProjContainer, ProjH1, ProjWrapper, ProjCard, ProjIcon, ProjH2, ProjP} from './ProjectElements'

const Proj = () => {
  return (
    <ProjContainer id='projects'>
      <ProjH1>Projects</ProjH1>
      <ProjWrapper>
        <ProjCard onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/Alok650/Covid-19-database-using-file-handling';
                    }}>
          <ProjIcon src={Icon1}/>
          <ProjH2>Shramik Seva NGO</ProjH2>
          <ProjP>Webpage designed using HTML,CSS,JS.</ProjP>
        </ProjCard>
        <ProjCard onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/Alok650/Dating-app';
                    }}>
        <ProjIcon src={Icon2}/>
          <ProjH2>Dating Site</ProjH2>
          <ProjP>Designed using MERN stack.</ProjP>
        </ProjCard>
        <ProjCard onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/Alok650/CNN--Model-for-Image-classification';
                    }}>
          <ProjIcon src={Icon3}/>
          <ProjH2>Data Science Project</ProjH2>
          <ProjP>Using Google collab, tensorflow.</ProjP>
        </ProjCard>
      </ProjWrapper>
    </ProjContainer>
  )
}

export default Proj
