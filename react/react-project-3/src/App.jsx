//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,Link}from 'react-router-dom';
import Index from './pages/Index.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'
function App() {
  return (
    <>
    <nav className='navbar'>
      <div className='header'>
        <Link className='logo' to={'/'}>Ashish.dev</Link>
      <div className='links'>
        <Link className='link' to={'/about'}>About Me</Link>
        {/*<a href="" className='link'>About Me</a>*/}
        <Link className='link' to={'/contact'}>Contact me</Link>
        <Link className='link'to={'/project'}>Discuss Projects</Link>
      </div>
      </div>
    </nav>
    
    <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App
