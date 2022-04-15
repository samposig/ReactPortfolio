import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { useState } from 'react';

function App() {
  const [AboutMeSec, setAboutMe] = useState(true);
  const [ProjectsSec, setProjects] = useState(false);
  const [ContactMeSec, setContactMe] = useState(false);
  return (
   <div>
     <Header
     setAboutMe = {setAboutMe}
     AboutMeSec = {AboutMeSec}
     setProjects ={setProjects}
     ProjectsSec = {ProjectsSec}
     setContactMe ={setContactMe}
     ContactMeSec = {ContactMeSec}
     />
     <div className="container">
       {
         !ProjectsSec && !ContactMeSec? (
           <>
           <AboutMe/>
           </>
         ): (
           <></>
         )
       }
       {
         !ContactMeSec && !AboutMeSec? (
           <>
           <Projects/>
           </>
         ): (
           <></>
         )
       }
       {
         !ProjectsSec && !AboutMeSec? (
           <>
           <ContactForm/>
           </>
         ): (
           <></>
         )
       }
     </div>
     <Footer/>
   </div>
  );
}

export default App;
