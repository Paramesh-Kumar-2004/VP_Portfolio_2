import React from 'react';
import "../../Styles/Projects.css";
import VP from "../../Images/VP.jpeg";



function Projects_Component({
    ProjectName = "Name None",
    ID_Name = "None",
    Description = "Summary None",
    Project_Domain = "None",
    Source_Code_Frontend = null,
    Source_Code_Backend = null,
    Frontend_Deploy_Link = null,
    Backend_Deploy_Link = null,
    Backend_Name = "Backend",
    Tech_Stack = []
}) {
    return (
        <div className="card">
            <div className="img" id={ID_Name}></div>
            <div id="ProjectNameDiv">
                <h2 className="text" id='Project_Title'>{ProjectName}</h2>
            </div>
            <p className="description" id='Project_Description'>
                &#160;&#160;&#160;{Description}
            </p>
            <p id='Tech_Stack'>
                {Tech_Stack.map((item, index) => (
                    <span key={index}>{item} </span>
                ))}
            </p>
            {/* <p>{Project_Domain}</p> */}

            <div className='All_Source'>

                <div>
                    <h4>Source Code :</h4>
                    <div className='ProjectLinks'>
                        {/* Frontend Source Code */}
                        {Source_Code_Frontend && (
                            <a
                                href={Source_Code_Frontend}
                                className="source"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Frontend
                            </a>
                        )}

                        {/* Backend Source Code */}
                        {Source_Code_Backend && (
                            <a
                                href={Source_Code_Backend}
                                className="source"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {Backend_Name}
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Deploy Link */}
                <div>
                    <h4>Live Links :</h4>
                    <div className='ProjectLinks'>
                        {Frontend_Deploy_Link && (
                            <a
                                href={Frontend_Deploy_Link}
                                className="source"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Frontend
                            </a>
                        )}

                        {Backend_Deploy_Link && (
                            <a
                                href={Backend_Deploy_Link}
                                className="source"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Link 2
                            </a>
                        )}
                    </div>

                </div>

            </div>

        </div >

    );
}

export default Projects_Component;