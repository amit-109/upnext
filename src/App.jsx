import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App(){
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Testimonials />
      <Services />
      <Tech />
      <Projects />
      <Contact />
    </div>
  )
}
