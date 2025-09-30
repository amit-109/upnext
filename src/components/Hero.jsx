import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="hero container">
      <motion.span
        className="badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        🚀 Shipping ideas to production
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Build smarter with <span className="animated-gradient">UpNext.AI</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        We craft high‑performing web & mobile apps, automate your operations with AI, and deploy cloud‑native systems that scale. From MVP to enterprise—partner with a team that owns outcomes.
      </motion.p>
      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <button className="btn" onClick={()=>scrollToId('services')}>Explore Services</button>
        <button className="btn ghost" onClick={()=>scrollToId('projects')}>See Work</button>
      </motion.div>
    </header>
  )
}

export default Hero
