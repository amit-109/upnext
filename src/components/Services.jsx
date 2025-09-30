import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'Web Development', desc: 'Modern, accessible, SEO-friendly web apps using React, Next.js & Node.', icon: '🌐' },
  { title: 'Mobile Apps', desc: 'Cross-platform apps with React Native or Flutter delivering native experience.', icon: '📱' },
  { title: 'Automation', desc: 'Workflow automation & RPA to eliminate repetitive tasks and boost efficiency.', icon: '⚙️' },
  { title: 'AI / ML', desc: 'Machine learning pipelines, LLM integrations, chatbots, and vision/NLP solutions.', icon: '🧠' },
  { title: 'Cloud & DevOps', desc: 'CI/CD, Docker, Kubernetes, scalable APIs on AWS/Azure/GCP.', icon: '☁️' },
  { title: 'Data Engineering', desc: 'ETL, data lakes/warehouses, analytics dashboards, and observability.', icon: '📊' }
]

const Services = () => {
  return (
    <>
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
    </>
  )
}

export default Services
