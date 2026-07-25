import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BlurBlob from './BlurBlob'

function App() {

  return (
    <div className='min-h-screen bg-slate-600 dark:bg-[#050414] text-zinc-900 dark:text-zinc-50 transition-colors duration-300 relative overflow-hidden'>
      <BlurBlob position = {{ top: '35%', left: '20%'}} size={{ width: '30%', height: '40%'}}className="opacity-40 dark:opacity-100 transition-opacity duration-300" />
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4ff2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <div className='relative pt-12 '>
        <Navbar/>
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
