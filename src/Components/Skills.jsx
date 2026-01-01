import React from 'react'
import Skills_Animation from './Skills/Skills_Animation'
import "../Styles/Skills.css"



function Skills() {
  return (
    <div id='Skills'>

      <h1 id='Title'>Skills</h1>

      <div id='Skills_Card'>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"Python"} />
          <span><h3>Python</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Basic"} IdName={"Java"} />
          <span><h3>Java</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"HTML_CSS"} />
          <span><h3>HTML & CSS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"Java_Script"} />
          <span><h3>Java Script</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"React"} />
          <span><h3>React JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"NodeJs"} />
          <span><h3>Node JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"ExpressJs"} />
          <span><h3>Express JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"Git"} />
          <span><h3>Git & Github</h3> </span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"MYSQL"} />
          <span><h3>MYSQL</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Advanced"} IdName={"MongoDB"} />
          <span><h3>Mongo DB</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Basic"} IdName={"Selenium"} />
          <span><h3>Selenium</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Basic"} IdName={"Pytest"} />
          <span><h3>Pytest</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Name={"Basic"} IdName={"Docker"} />
          <span><h3>Docker</h3></span>
        </div>

      </div>

    </div>
  )
}

export default Skills