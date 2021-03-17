import React, {useState, Suspense} from 'react'
import Video from '../../videos/video.mov'
import { HeadContainer, HeadBg, VideoBg, HeadContent, HeadH1, HeadP, HeadBtnWrapper, ArrowForward, ArrowRight } from './HeadElements'
import { Button } from '../ButtonElements'
const Header = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeadContainer id='home'>
      <HeadBg>
        <Suspense fallback ={<h1>Loading...</h1>}>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </Suspense>
      </HeadBg>
      <HeadContent>
        <HeadH1> Hey {prompt("Enter your name : ")}!</HeadH1>
        <HeadP>I am Alok. Computer science & Engg. undergraduate, Web Designer, Aerial robotics enthusiat, Data Science Learner.</HeadP>
        <HeadBtnWrapper>
          <Button to='projects' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Explore my work {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeadBtnWrapper>
      </HeadContent>
    </HeadContainer>
  )
}

export default Header;
