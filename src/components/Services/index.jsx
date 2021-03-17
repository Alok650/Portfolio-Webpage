import React from 'react'
import Icon1 from '../../images/svg-11.svg'
import Icon2 from '../../images/svg-10.svg'
import Icon3 from '../../images/svg-9.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/Alok650/Covid-19-database-using-file-handling';
                    }}>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Shramik Seva NGO</ServicesH2>
          <ServicesP>Webpage designed using HTML,CSS,JS.</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/Alok650/Dating-app';
                    }}>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Dating Site</ServicesH2>
          <ServicesP>Designed using MERN stack.</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/Alok650/CNN--Model-for-Image-classification';
                    }}>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Data Science Project</ServicesH2>
          <ServicesP>Using Google collab, tensorflow.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
