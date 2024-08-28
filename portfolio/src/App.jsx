import React from 'react'
import './App.css'
import './index.css'
import Navbar from './component/Navbar'
import Education from './component/Education'
import Home from './component/Home'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Skills from './component/Skills'

const App = () => {
  return (
     <div>
       <Navbar />
      <Home />
 
      <Education /> 
      <Skills />
      {/* <About /> */}
      <Projects />
      <Contact />

 

     </div>
  )
}

export default App