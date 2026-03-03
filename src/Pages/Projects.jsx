import React from 'react'
import Projects_Component from '../Components/Projects/Project_Component'
import "../Styles/Projects.css"



function Projects() {
  return (
    <div id='Projects'>
      <h1 id='Title'>Projects</h1>
      <div id='Projects_List'>

        {/* 
        <Projects_Component ProjectName='OTA' ID_Name='OTA'
          Description='Built a full-stack, role-based OTA Software Campaign Management System using React.js, Node.js, Express.js, and MySQL. Designed the system to securely deliver software updates to vehicle infotainment systems over wireless networks. Developed RESTful APIs with JWT authentication and role-based access control. Implemented secure file uploads, encryption/decryption, and wireless OTA software deployment. Created a responsive frontend with dynamic routing, search, filtering. Deployed the application using Docker and maintained code with Git/GitHub.'
          Tech_Stack={["React Js", "CSS", "Redux", "Node Js", "Express Js", "MYSQL", "Sequlize"]}
          Project_Domain='Full Stack Development'
          Source_Code_Backend="https://github.com/Paramesh-Kumar-2004/OTA"
          Backend_Name='Project Code'
        />
        */}

        <Projects_Component ProjectName='Task Management' ID_Name='Task_Management'
          Description='Built a full-stack Task Management System with secure authentication, role-based access, complete CRUD (assignment, sharing, commenting), a responsive React + Tailwind frontend, and RESTful APIs using Node.js, Express, and MongoDB, including search, filtering, and pagination for enhanced usability and performance.'
          Tech_Stack={["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Mongoose"]}
          Project_Domain='Full Stack Development'
          Source_Code_Frontend='https://github.com/Paramesh-Kumar-2004/Final_Project-Task_Management_Frontend'
          Source_Code_Backend="https://github.com/Paramesh-Kumar-2004/Final_Project-Task_Management_Backend"

          // Frontend_Deploy_Link="https://final-project-task-management-frontend-ddsyxqes5.vercel.app/"
          Frontend_Deploy_Link="https://final-project-task-management-front.vercel.app/"
          Backend_Deploy_Link="https://final-project-task-management-backend-1.onrender.com/"
        />

        <Projects_Component ProjectName='Student Management System' ID_Name='Student_Management_System'
          Description='Built a full-stack Student Management System using the MERN stack with JWT authentication, role-based access control, teacher role request/approval via an admin dashboard, and complete CRUD operations for managing students, teachers, classes, and profiles with scalable architecture and robust APIs.'
          Tech_Stack={["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Mongoose"]}
          Project_Domain='Full Stack'
          Source_Code_Frontend='https://github.com/Paramesh-Kumar-2004/Student_Management_System-Frotend'
          Source_Code_Backend="https://github.com/Paramesh-Kumar-2004/Student_Management_System-Backend"

          Frontend_Deploy_Link="https://student-management-system-frotend.vercel.app/"
          Backend_Deploy_Link="https://student-management-system-backend-xi.vercel.app/"
        />

        <Projects_Component ProjectName='AI Chat' ID_Name='AI_Chat'
          Description='Developed a modern AI Chat Application with real-time intelligent responses, persistent conversation flow, and a sleek dark-themed responsive UI, demonstrating scalable AI integration and interactive front-end design focused on performance and seamless user experience.'
          Tech_Stack={["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Mongoose"]}
          Project_Domain='Full Stack'
          Source_Code_Frontend='https://github.com/Paramesh-Kumar-2004/AI_Chat_Frontend'
          Source_Code_Backend="https://github.com/Paramesh-Kumar-2004/AI_Chat_Backend"

          Frontend_Deploy_Link="https://ai-chat-frontend-one-chi.vercel.app/"
          Backend_Deploy_Link="https://ai-chat-backend-rouge.vercel.app/"
        />

        <Projects_Component ProjectName='Movie Review Application' ID_Name='Movie_Review'
          Description='Developed a Movie Review Application using React.js, React Router, and Context API with OMDB API integration to fetch real-time movie data, enabling search, detailed views, user ratings, and a responsive Tailwind CSS interface optimized for cross-device performance.'
          Tech_Stack={["React Js", "Tailwind CSS"]}
          Project_Domain='Web Interface Development '
          Source_Code_Frontend="https://github.com/Paramesh-Kumar-2004/Movie_Review_Project-1"
          Frontend_Deploy_Link="https://paramesh-kumar-2004.github.io/Movie_Review_Project-1/"
        />

        {/* <Projects_Component ProjectName='SIL Automation' ID_Name='SIL_Automation'
          Description='Built a frontend interface using HTML that enables users to upload automation test script files and trigger their execution in a testing environment. The interface supports straightforward script file selection and initiation of automated tests, providing a simple and effective way to manage and run test scripts from the browser.'
          Tech_Stack={["HTML", "CSS", "Java Script"]}
          Project_Domain='Frontend Development'
        /> 

        <Projects_Component ProjectName='Text Based Game' ID_Name='Text_Based_Game'
          Description="As a Python Developer Intern, developed an interactive text-based adventure game demonstrating core programming concepts such as object-oriented programming, control flow, randomization, and user input handling. Implemented features like role-based character creation, dynamic weapon inventory, and real-time decision trees (e.g., attack, run, treasure) to enhance engagement. Utilized Python's random module for combat logic and custom classes/functions to simulate turn-based gameplay. Included mechanics like life tracking, scoring system, and win/lose conditions, strengthening both logic-building and problem-solving skills."
          Tech_Stack={["Python"]}
          Project_Domain='Game Development (Console Based)'
          Source_Code_Backend='https://github.com/Paramesh-Kumar-2004/Text_Based_Game-Python'
          Backend_Name='Project Code'
        />

       <Projects_Component ProjectName='Simple AI Voice Assistant' ID_Name='AI_Voice_Assistant'
          Description='Developed a voice-based personal assistant using Python, integrating pyttsx3, datetime, and pywhatkit libraries to simulate an AI named JARVIS. The assistant features user authentication via password input, time-based greetings, and the ability to search Google or play YouTube videos based on voice-triggered or typed input. Implemented role-based responses for different users and used pyttsx3 for text-to-speech interaction. Demonstrated core Python skills including input handling, conditional logic, function design, and real-time task automation.'
          Tech_Stack={["Python", "pyttsx3"]}
          Project_Domain='Python Automation'
          Source_Code_Backend='https://github.com/Paramesh-Kumar-2004/Voice_Assistant-Search-Tool'
          Backend_Name='Project Code'
        /> */}

      </div>
    </div>
  )
}

export default Projects