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
            description: "An OTA (Over-The-Air) Full Stack Application for automotive use enables manufacturers to deliver software updates directly to a vehicle's infotainment system wirelessly, eliminating the need for physical servicing or manual intervention. This solution ensures that vehicle systems remain secure, up-to-date, and enriched with the latest featgiures.",
        },
        {
            id: 2,
            projectname: "Text-Based Adventure Game",
            position: 'Python Developer Intern',
            company: 'NovaNectar Services Pvt. Ltd.',
            duration: ' August 10, 2024 to September 10, 2024',
            description: `This is a Python-based text adventure game where the player plays as a "Shooter" navigating random paths, collecting weapons, and battling dragons. Players must make choices to attack, run, or open treasures, all while managing score and lives. The game uses OOP concepts and random events for an engaging experience. It's fully console-driven and allows replay after game over or win.`
        },
    ];
    return (
        <div id='Experience'>
            <div>
                <h1 id='Title'>Experience</h1>

                {experienceData.map((experience) => (
                    <div key={experience.id} className="Experience-Item">
                        <div id='ExperienceDetails'>
                            <h3 className='JobTitle'>{experience.position}</h3>
                            <p className="Company">{experience.company}</p>
                            <p className='Projectname'><b>Project : </b> {experience.projectname}</p>
                            <p className="Duration"><b>Duration :</b> {experience.duration}</p>
                            <p className="Description">{experience.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience
