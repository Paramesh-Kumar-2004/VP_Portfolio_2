import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

import LinkedIn from './Social_Media/LinkedIn'
import Github from './Social_Media/GitHub'
import "../Styles/Home.css"



function Home() {

  const el = useRef(null);
  const typed = useRef(null);
  const [showResume, setShowResume] = useState(true)

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

  const pdfPath = 'public\VP_Resume.pdf';

  const handleShow = () => {
    console.log('PDF Path:', pdfPath);
    alert('PDF Path: ' + pdfPath);
    window.open(pdfPath, '_blank');
  };

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

        <button onClick={handleShow}>Show</button>

      </div>
    </>
  )
}

export default Home