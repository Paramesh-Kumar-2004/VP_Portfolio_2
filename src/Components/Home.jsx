import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

import LinkedIn from './Social_Media/LinkedIn'
import Github from './Social_Media/GitHub'
import "../Styles/Home.css"
import Resume from "../Images/VP_Resume.pdf"


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
      <div id='Main_Home_Div'>

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


        <div class="tooltip-container-resume">
          <span class="text">
            Resume
          </span>

          <span class="tooltip2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="bi bi-tiktok"
              viewBox="0 0 16 16"
            >
              <path
                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
              ></path>
            </svg>
          </span>
          {/* <span class="tooltip3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="bi bi-tiktok"
              viewBox="0 0 16 16"
            >
              <path
                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
              ></path>
            </svg>
          </span> */}

        </div>


      </div >
    </>
  )
}

export default Home