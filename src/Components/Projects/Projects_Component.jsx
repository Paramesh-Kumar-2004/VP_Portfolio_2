import React from 'react';
import "../../Styles/Projects.css";
import VP from "../../Images/VP.jpeg";



function Projects_Component({ ProjectName = "Name None", ID_Name = "None", Description = "Summary None", Project_Domain = "None", Project_Link = "#" }) {
    return (
        <div className="card">
            <div className="img" id={ID_Name}></div>
            <div id="ProjectNameDiv">
                <h2 className="text" id='Project_Title'>{ProjectName}</h2>
            </div>
            <p className="description" id='Project_Description'>&#160;&#160;&#160;{Description}</p>
            <p>{Project_Domain}</p>
            <p>Click For Source Code</p>
            <p className="source">Click For Source Code</p>
        </div >

    );
}

export default Projects_Component;