import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { quote: "UpNext.AI delivered beyond expectations. Our automation solution cut operational costs by 40% in the first quarter.", name: "Sarah Chen, CTO @ TechCorp", avatarText: "SC" },
  { quote: "The team's expertise in AI integration helped us build a chatbot that reduced support tickets by 60%. Highly recommend!", name: "Mike Johnson, CEO @ StartupX", avatarText: "MJ" },
  { quote: "From concept to deployment, professionally executed. The web app they built scales beautifully with our growing user base.", name: "Elena Rodriguez, Product Lead @ InnovateLab", avatarText: "ER" },
  { quote: "Outstanding cloud architecture. We now have 99.9% uptime and deployment pipelines that are a joy to use.", name: "Raj Patel, DevOps Engineer @ GlobalTech", avatarText: "RP" }
]

const Testimonials = () => {
  const [sliderIndex, setSliderIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setSliderIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setSliderIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <motion.section
      className="section container testimonials-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>What Clients Say</h2>
      <p className="small">Trusted by businesses to deliver results.</p>
      <div className="testimonials-slider">
        <div className="slider-buttons">
          <button onClick={prevSlide} className="slider-btn">‹</button>
          <AnimatePresence mode="wait">
            <motion.div
              key={sliderIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="testimonial-card"
            >
              <div className="avatar">{testimonials[sliderIndex].avatarText}</div>
              <p className="quote">"{testimonials[sliderIndex].quote}"</p>
              <p className="author">- {testimonials[sliderIndex].name}</p>
            </motion.div>
          </AnimatePresence>
          <button onClick={nextSlide} className="slider-btn">›</button>
        </div>
        <div className="slider-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === sliderIndex ? 'active' : ''}`}
              onClick={() => setSliderIndex(i)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials
