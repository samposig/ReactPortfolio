import React from "react";
import { useState } from 'react';
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

const Header = ({setAboutMe, setProjects, setContactMe, ProjectsSec, AboutMeSec, ContactMeSec}) => {
    const [active, setActive] = useState('AboutMe');
    return(
        <header>
        <h1>Samantha Posig</h1>
        <nav>
           <button onClick = {() => {
               setAboutMe(true)
               setProjects(false)
               setContactMe(false)
           }}>About Me</button>
           <button onClick = {() =>{
               setAboutMe(false)
               setProjects(true)
               setContactMe(false)
           }}>Portfolio</button>
           <button onClick = {() => {
               setAboutMe(false)
               setProjects(false)
               setContactMe(true)
           }}>Contact</button>
           <a href="https://onedrive.live.com/?cid=A123896E0CE5A18F&id=A123896E0CE5A18F%214915&parId=A123896E0CE5A18F%21262&o=OneUp">Resume</a>
        </nav>
       <div className="pic"></div> 
    </header>
    )
}

export default Header