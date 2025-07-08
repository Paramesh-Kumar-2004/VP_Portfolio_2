import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from "./Components/About"
import Footer from "./Components/Footer"
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

import "./Styles/App.css"



function App() {

  alert("Hamburger Not Closing While Clicking a Tags.")

  return (
    <div id='App_Main'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
