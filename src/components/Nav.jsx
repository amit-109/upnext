import React from 'react'

const Nav = ({ theme, toggleTheme }) => {
  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}}>
          <img src="/src/assets/logo.svg" alt="logo" />
          <div>UpNext<span>.AI</span></div>
        </a>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <a className="link" href="#services" onClick={e=>{e.preventDefault(); scrollToId('services')}}>Services</a>
          <a className="link" href="#tech" onClick={e=>{e.preventDefault(); scrollToId('tech')}}>Tech</a>
          <a className="link" href="#projects" onClick={e=>{e.preventDefault(); scrollToId('projects')}}>Projects</a>
          <a className="link" href="#contact" onClick={e=>{e.preventDefault(); scrollToId('contact')}}>Contact</a>
          <button className="btn" onClick={()=>scrollToId('contact')}>Get a Quote →</button>
          <button className="theme-toggle" onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
