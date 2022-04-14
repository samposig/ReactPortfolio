import React from "react";

const Header = () => {
    return(
        <header>
        <h1>Samantha Posig</h1>
        <nav>
            <ul>
                <li>
                    <a href="#AboutMe">About Me</a>
                </li>
                <li>
                    <a href="#MyWork">Recent Projects</a>
                </li>
                <li>
                    <a href="#ContactMe">Contact Me</a>
                </li>
            </ul>
        </nav>
       <div className="pic"></div> 
    </header>
    )
}

export default Header