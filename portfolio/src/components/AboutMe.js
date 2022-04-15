import React from "react";

const AboutMe = ()=> {
    return (
        <div id="AboutMe" className="row">
            <div id="AboutME" className="col-3 col-">
                <h2>About Me</h2>
            </div>
            <div>
                <img src={require("../portfolio-pic.jpeg")}></img>
            </div>
            <div id="aboutme" className="column-6">
                <p> stuff about me
                </p>
                <p>info</p>
            </div>
        </div>
    )
}


export default AboutMe