import React from 'react'

import "../Styles/Experience.css"



function Experience() {
    const experienceData = [
        {
            id: 1,
            projectname: "OTA - Over The Air",
            position: 'Full Stack Developer Intern',
            company: 'Expleo Technologies',
            duration: 'Oct 2024 - May 2025',
            description: "An OTA (Over-The-Air) Full Stack Application for automotive use enables manufacturers to deliver software updates directly to a vehicle's infotainment system wirelessly, eliminating the need for physical servicing or manual intervention. This solution ensures that vehicle systems remain secure, up-to-date, and enriched with the latest features.",
        },
        {
            id: 2,
            projectname: "Text-Based Adventure Game",
            position: 'Python Developer Intern',
            company: 'NovaNectar Services Pvt. Ltd.',
            duration: ' August 10, 2024 to September 10, 2024',
            description: `Developed an interactive text-based adventure game using Python. Implemented core game mechanics: player progression, score/ life tracking, and weapon collection. Applied object - oriented programming and random event generation to enhance gameplay. Focused on user - driven decision loops to encourage strategic thinking.`
        },
    ];
    return (
        <div id='Main_Experience_Div'>
            <div>
                <h1 id='Title'>Experience</h1>

                {experienceData.map((experience) => (
                    <div key={experience.id} className="experience-item">
                        <h3>{experience.position}</h3>
                        <p className="company">{experience.company}</p>
                        <p className='projectname'><b>Project : </b> {experience.projectname}</p>
                        <p className="duration">{experience.duration}</p>
                        <p className="description">{experience.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience
