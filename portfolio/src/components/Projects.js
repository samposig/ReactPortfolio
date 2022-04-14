import React from "react";

const Projects = () => {
    return (
        <div id="MyWork" className="row">
            <div className="column">
                <h2>Recent Projects</h2>
            </div>
            <div id="deployedWork" className="column">
                <div id="project1" className="card">
                    <div className="title">Weather Project</div>
                    <a href="https://paterma.github.io/Bug-Spray/" target="_blank">Deployed Page</a>
                    <a href="https://github.com/Paterma/Bug-Spray" target="_blank">Github Repo</a>
                    <img src={require("../weatherprojectScreenshot.png") }alt="Screenshot of Deployed Weather Project"></img>
                </div>

                <div id="weatherapp" className="card">
                    <div className="title">Storage CRM</div>
                    <a href="https://obscure-fortress-36199.herokuapp.com/" target="_blank">Deployed Page</a>
                    <a href="https://github.com/Capricious150/Storage-Company-CRM" target="_blank">Github Repo</a>
                    <img src={require("../storage-crm-pic.png")} alt="Screenshot of Storage-Company-CRM"></img>
                </div>

                <div id ="passwordGen"className="card">
                    <div className="title">Weather App</div>
                     <a href=" https://samposig.github.io/Weather-app/" target="_blank">Deployed Page</a>
                    <a href="https://github.com/samposig/Weather-app" target="_blank">Github Repo</a>
                    <img src={require("../weatherappScreenshot.png")} alt="Screenshot of Weather App"></img>
                </div>
            </div>
        </div>
    )
}
export default Projects;