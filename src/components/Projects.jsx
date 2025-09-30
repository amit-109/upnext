import React from 'react'

const projects = [
  {title:'HRMS Portal', body:'Role-based access, payroll, and attendance with React + FastAPI.'},
  {title:'Retail Analytics', body:'Data lake + dashboards + forecasting with Python & ML.'},
  {title:'Field App', body:'Offline-first mobile app for on-ground operations.'}
]

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2>Selected work</h2>
      <p className="small">Case studies you can customize. Replace with your own projects.</p>
      <div className="grid cards">
        {projects.map(p => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p style={{color:'var(--muted)'}}>{p.body}</p>
            <div className="small">→ Add link / screenshots</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
