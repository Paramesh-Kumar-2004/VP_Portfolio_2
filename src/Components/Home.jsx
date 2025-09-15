import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

import LinkedIn from './Social_Media/LinkedIn'
import Github from './Social_Media/GitHub'
import "../Styles/Home.css"
import Resume from "../Images/VP_Resume.pdf"
import Title from './Utils/Title'


function Home() {

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "Web Developer", "Full Stack Developer", "Automation Tester With Selenium"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <div id='Home'>

        <div id='Home_Content'>
          <h1>Hi, It's <b>Paramesh Kumar S</b></h1>

          <h4 id='Role'>
            &#160;&#160;&#160;I Am <span ref={el} />
          </h4>

        </div>

        <div id='Social_Medias'>
          <LinkedIn />
          <Github />
        </div>


        <div className="tooltip-container-resume">
          <span className="text-Resume">
            Resume
          </span>

          <a href={Resume} target='-b'>
            <span className="tooltip3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM8 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
              </svg>
            </span>
          </a>

          <a href={Resume} download>
            <span className="tooltip2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                className="bi bi-arrow-down-circle"
                viewBox="0 0 16 16"
                style={{ transform: "rotate(180deg)" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
            </span>
          </a>

        </div>


      </div >
    </>
  )
}

export default Home