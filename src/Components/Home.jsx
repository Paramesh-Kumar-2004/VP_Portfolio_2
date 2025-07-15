import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

import LinkedIn from './Social_Media/LinkedIn'
import Github from './Social_Media/GitHub'
import "../Styles/Home.css"
import Resume from "../../src/Images/VP.jpeg"



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

      </div>
    </>
  )
}

export default Home