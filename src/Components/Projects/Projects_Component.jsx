import React from 'react';
import "../../Styles/Projects.css";
import VP from "../../Images/VP.jpeg";



function Projects_Component({ ProjectName = "Name None", ID_Name = "None", Description = "Summary None", Project_Domain = "None", Source_Code_Frontend = null, Source_Code_Backend = null, Deploy_Link = null, Backend_Name = "Backend" }) {
    return (
        <div className="card">
            <div className="img" id={ID_Name}></div>
            <div id="ProjectNameDiv">
                <h2 className="text" id='Project_Title'>{ProjectName}</h2>
            </div>
            <p className="description" id='Project_Description'>
                &#160;&#160;&#160;{Description}
            </p>
            <p>{Project_Domain}</p>
            {/* <a href={Source_Code_Frontend} className="source" target='_b'>
                Source Code
            </a> */}


            <div className='All_Source'>
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

                {/* Project Deploy Link */}
                {Deploy_Link && (
                    <a
                        href={Deploy_Link}
                        className="source"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Link
                    </a>
                )}
            </div>

        </div >

    );
}

export default Projects_Component;