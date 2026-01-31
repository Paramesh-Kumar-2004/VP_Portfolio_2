import React from 'react'

import Home from './Pages/Home'
import Header from './Components/Header'
import About from "./Pages/About"
import Footer from "./Components/Footer"
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'

import "./Styles/App.css"
import Certificates from './Pages/Certificates'



function App() {

  return (
    <div id='App_Main'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App