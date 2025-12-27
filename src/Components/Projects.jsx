import React from 'react'
import Projects_Component from './Projects/Projects_Component'
import "../Styles/Projects.css"



function Projects() {
  return (
    <div id='Projects'>
      <h1 id='Title'>Projects</h1>
      <div id='Projects_List'>

        <Projects_Component ProjectName='OTA' ID_Name='OTA'
          Description='Developed a full-stack role-based web application using React.js, Node.js, and Express.js, enabling dynamic routing and conditional rendering for Admin, Campaign Manager, and Normal users. Integrated RESTful APIs for modules like Campaign, Software, User, and Vehicle Management, and secured the application with JWT-based authentication and role-based authorization. Implemented file upload using Multer, managed frontend state with React Hooks, and designed a responsive UI with custom themes, interactive sidebars, and error-handling routes. Deployed the application using Docker, maintained version control with Git/GitHub, and ensured reliability through asyncHandler utilities and basic automation testing with Selenium.'
          Project_Domain='Full Stack Development'
          Project_Link='https://github.com/Paramesh-Kumar-2004/OTA'
        />

        <Projects_Component ProjectName='SIL Automation' ID_Name='SIL_Automation'
          Description='Built a frontend interface using HTML that enables users to upload automation test script files and trigger their execution in a testing environment. The interface supports straightforward script file selection and initiation of automated tests, providing a simple and effective way to manage and run test scripts from the browser.'
          Project_Domain='Frontend Development'
          Project_Link='https://www.google.com'
        />

        {/* <Projects_Component ProjectName='Pyro Patrol' ID_Name='Pyro_Patrol'
          Description='Designed and developed a fire-detecting autonomous robot using IR sensors and actuators to identify and extinguish fire without human intervention. Programmed using Embedded C/C++ on microcontroller-based hardware, the robot continuously scans its environment, detects heat or flame sources, and activates an extinguishing mechanism, demonstrating intelligent response and automation in fire safety applications.'
          Project_Domain='IOT'
          Project_Link='https://www.google.com'
        />

        <Projects_Component ProjectName='Brain Friendly' ID_Name='Brain_Friendly'
          Description='Brain Friendly Is A E-Learning Website Using VR'
          Project_Domain='Web Interface Development '
          Project_Link='https://www.google.com'
        />

        <Projects_Component ProjectName='Text Based Game' ID_Name='Text_Based_Game'
          Description="As a Python Developer Intern, developed an interactive text-based adventure game demonstrating core programming concepts such as object-oriented programming, control flow, randomization, and user input handling. Implemented features like role-based character creation, dynamic weapon inventory, and real-time decision trees (e.g., attack, run, treasure) to enhance engagement. Utilized Python's random module for combat logic and custom classes/functions to simulate turn-based gameplay. Included mechanics like life tracking, scoring system, and win/lose conditions, strengthening both logic-building and problem-solving skills."
          Project_Domain='Game Development (Console Based)'
          Project_Link='https://github.com/Paramesh-Kumar-2004/Text_Based_Game-Python'
        />

        <Projects_Component ProjectName='Simple AI Voice Assistant' ID_Name='AI_Voice_Assistant'
          Description='Developed a voice-based personal assistant using Python, integrating pyttsx3, datetime, and pywhatkit libraries to simulate an AI named JARVIS. The assistant features user authentication via password input, time-based greetings, and the ability to search Google or play YouTube videos based on voice-triggered or typed input. Implemented role-based responses for different users and used pyttsx3 for text-to-speech interaction. Demonstrated core Python skills including input handling, conditional logic, function design, and real-time task automation.'
          Project_Domain='Python Automation'
          Project_Link='https://github.com/Paramesh-Kumar-2004/Voice_Assistant-Search-Tool'
        /> */}

      </div>
    </div>
  )
}

export default Projects