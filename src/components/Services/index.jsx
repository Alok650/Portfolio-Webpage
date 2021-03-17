import React from 'react'
import Icon1 from '../../images/svg-11.svg'
import Icon2 from '../../images/svg-10.svg'
import Icon3 from '../../images/svg-9.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Shramik Seva NGO</ServicesH2>
          <ServicesP>Webpage designed using HTML,CSS,JS.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Dating Site</ServicesH2>
          <ServicesP>Designed using MERN stack.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Data Science Project</ServicesH2>
          <ServicesP>Using Google collab, tensorflow.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
