import React, {useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Projects';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Header />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Services />
      <Info {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home
