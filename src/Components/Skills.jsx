import React from 'react'
import Skills_Animation from './Skills/Skills_Animation'
import "../Styles/Skills.css"



function Skills() {
  return (
    <div id='Main_Skill_Div'>

      <h1 id='Title'>Skills</h1>

      <div id='Skills_Card'>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"Python"} />
          <span><h3>Python</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"Python"} />
          <span><h3>Python</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"Pytest"} />
          <span><h3>Pytest & Selenium</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"HTML_CSS"} />
          <span><h3>HTML & CSS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"Java_Script"} />
          <span><h3>Java Script</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"React"} />
          <span><h3>React JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"NodeJs"} />
          <span><h3>Node JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Intermediate "} IdName={"ExpressJs"} />
          <span><h3>Express JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Basic"} IdName={"Git_Docker"} />
          <span><h3>Git & Docker</h3> </span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Basic"} IdName={"MYSQL"} />
          <span><h3>MYSQL</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"Basic"} IdName={"MongoDB"} />
          <span><h3>Mongo DB</h3></span>
        </div>

      </div>

    </div>
  )
}

export default Skills
