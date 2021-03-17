import profile from "../../images/Alok.png";
import resume from "../../images/resume.jpg";
import contact from "../../images/contact.svg"

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'About Me',
  headline: "I assume I don't need an introduction, but still...",
  description: 'My aspiration to live creativity and meet people’s actual needs when it comes to reliance on technology led me to persue Bachelor’s in Compter science and Engineering. My aim is always to combine a pragmatic approach with aesthetics, while improving communication between people. As a Fulbright scholar, I have completed my high school studies from Embassy of India school, Moscow with satisfactory results, which ultimately helped me to get my foot into the world of techology. Currently I am in second year of my BTECH, which I am persuing from the prestigious National Institute of Technology, Surat.',
  buttonLabel: 'Read more',
  imgStart: false,
  img: profile,
  alt: 'Alok Prasad',
  dark: true,
  primary: true,
  darkText: false
  
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Resume',
  headline: 'Download a copy of my resume',
  description: 'Get access to my latest work in the field of software development and Aerial Robotics.',
  buttonLabel: 'Download',
  imgStart: true,
  img: resume,
  alt: 'Resume',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Connect with me',
  headline: 'Drop a call and message and receive a reply within 24 hours.',
  description: 'Personal Email address: alokp650@gmail.com Contact Number : +91-7428640792',
  buttonLabel: 'Arrange a meeting',
  imgStart: false,
  img: contact,
  alt: 'Contact',
  primary: false,
  darkText: true
};

