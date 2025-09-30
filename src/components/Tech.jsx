import React from 'react'

const techs = ['React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'LangChain', 'OpenAI', 'TensorFlow', 'PyTorch']

const Tech = () => {
  return (
    <section id="tech" className="section container">
      <h2>Tech we love</h2>
      <p className="small">Battle‑tested tools for speed, quality, and scale.</p>
      <div className="tech-list">
        {techs.map(t => <span key={t} className="tech">{t}</span>)}
      </div>
    </section>
  )
}

export default Tech
