import React, { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const services = [
  { title: 'Web Development', desc: 'Modern, accessible, SEO-friendly web apps using React, Next.js & Node.', icon: '🌐' },
  { title: 'Mobile Apps', desc: 'Cross-platform apps with React Native or Flutter delivering native experience.', icon: '📱' },
  { title: 'Automation', desc: 'Workflow automation & RPA to eliminate repetitive tasks and boost efficiency.', icon: '⚙️' },
  { title: 'AI / ML', desc: 'Machine learning pipelines, LLM integrations, chatbots, and vision/NLP solutions.', icon: '🧠' },
  { title: 'Cloud & DevOps', desc: 'CI/CD, Docker, Kubernetes, scalable APIs on AWS/Azure/GCP.', icon: '☁️' },
  { title: 'Data Engineering', desc: 'ETL, data lakes/warehouses, analytics dashboards, and observability.', icon: '📊' }
]

const techs = ['React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'LangChain', 'OpenAI', 'TensorFlow', 'PyTorch']

const testimonials = [
  { quote: "YourBrand.AI delivered beyond expectations. Our automation solution cut operational costs by 40% in the first quarter.", name: "Sarah Chen, CTO @ TechCorp", avatarText: "SC" },
  { quote: "The team's expertise in AI integration helped us build a chatbot that reduced support tickets by 60%. Highly recommend!", name: "Mike Johnson, CEO @ StartupX", avatarText: "MJ" },
  { quote: "From concept to deployment, professionally executed. The web app they built scales beautifully with our growing user base.", name: "Elena Rodriguez, Product Lead @ InnovateLab", avatarText: "ER" },
  { quote: "Outstanding cloud architecture. We now have 99.9% uptime and deployment pipelines that are a joy to use.", name: "Raj Patel, DevOps Engineer @ GlobalTech", avatarText: "RP" }
]

export default function App(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState('idle')
  const [theme, setTheme] = useState('dark')
  const [sliderIndex, setSliderIndex] = useState(0)
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const nextSlide = () => setSliderIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setSliderIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!form.name || !form.email || !form.message){
      setStatus('Please fill all fields.')
      return
    }
    setStatus('sending')
    try{
      // Default Formspree example: replace 'yourFormId' below with your actual ID (https://formspree.io)
      const res = await fetch('https://formspree.io/f/yourFormId', {
        method:'POST',
        headers:{ 'Accept':'application/json' },
        body: new FormData(e.target)
      })
      if(res.ok){
        setStatus('sent')
        setForm({ name:'', email:'', message:'' })
      }else{
        setStatus('There was an issue. Try again.')
      }
    }catch(err){
      setStatus('Network error. Try later.')
    }
  }

  return (
    <div>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}}>
            <img src="/src/assets/logo.svg" alt="logo" />
            <div>Your<span>Brand.AI</span></div>
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
          Build smarter with <span className="animated-gradient">YourBrand.AI</span>
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

      <motion.section
        id="services"
        className="section container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What we do</h2>
        <p className="small">Full‑stack product engineering and AI‑powered automation.</p>
        <div className="grid cards">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              className="card"
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,.4)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                whileHover: { type: 'spring', stiffness: 300 },
                duration: 0.5,
                delay: i * 0.1
              }}
            >
              <div style={{fontSize:28}}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p style={{color:'var(--muted)'}}>{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="automation"
        className="section container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Automation in Action</h2>
        <p className="small">Code that thinks and executes—efficient, scalable systems powered by AI.</p>
        <div className="automation-demo">
          <motion.div
            className="code-snippet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <pre><code>{`function automateTask(task) {
  let aiModel = loadAI();
  let result = aiModel.predict(task.data);
  return executeAutomation(result);
}
// Running on 100% uptime
// Serving 1M+ requests daily
// Reducing costs by 50%`}</code></pre>
          </motion.div>
        </div>
      </motion.section>

      <section id="tech" className="section container">
        <h2>Tech we love</h2>
        <p className="small">Battle‑tested tools for speed, quality, and scale.</p>
        <div className="tech-list">
          {techs.map(t => <span key={t} className="tech">{t}</span>)}
        </div>
      </section>

      <section id="projects" className="section container">
        <h2>Selected work</h2>
        <p className="small">Case studies you can customize. Replace with your own projects.</p>
        <div className="grid cards">
          {[
            {title:'HRMS Portal', body:'Role-based access, payroll, and attendance with React + FastAPI.'},
            {title:'Retail Analytics', body:'Data lake + dashboards + forecasting with Python & ML.'},
            {title:'Field App', body:'Offline-first mobile app for on-ground operations.'}
          ].map(p => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p style={{color:'var(--muted)'}}>{p.body}</p>
              <div className="small">→ Add link / screenshots</div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section container">
        <h2>Contact us</h2>
        <p className="small">Tell us about your project. We usually reply within 24 hours.</p>
        <form onSubmit={onSubmit} className="grid" style={{gap:12}}>
          <div className="form-row">
            <input className="input" name="name" placeholder="Your name" value={form.name} onChange={e=>setForm(v=>({...v, name:e.target.value}))} />
            <input className="input" name="email" placeholder="Email address" type="email" value={form.email} onChange={e=>setForm(v=>({...v, email:e.target.value}))} />
          </div>
          <textarea className="textarea" name="message" placeholder="Project details, timeline, budget…" value={form.message} onChange={e=>setForm(v=>({...v, message:e.target.value}))} />
          <div style={{display:'flex', gap:12, alignItems:'center', flexWrap:'wrap'}}>
            <button className="btn" type="submit" disabled={status==='sending'}>{status==='sending' ? 'Sending…' : 'Send message'}</button>
            {status!=='idle' && status!=='sending' && <span className="small">{status==='sent' ? 'Thanks! We will get back to you.' : status}</span>}
            <span className="small">Or email: <span className="kbd">hello@yourbrand.ai</span></span>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <img src="/src/assets/logo.svg" width="20" height="20" alt="logo" />
            <span className="small">© {year} YourBrand.AI • Build smarter.</span>
          </div>
          <div className="small">Gorakhpur • Lucknow • Deoria • Remote</div>
        </div>
      </footer>
    </div>
  )
}
