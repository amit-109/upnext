import React, { useState, useMemo } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState('idle')
  const year = useMemo(() => new Date().getFullYear(), [])

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
    <>
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
            <span className="small">Or email: <span className="kbd">hello@UpNext.ai</span></span>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <img src="/src/assets/logo.svg" width="20" height="20" alt="logo" />
            <span className="small">© {year} UpNext.AI • Build smarter.</span>
          </div>
          <div className="small">Lucknow</div>
        </div>
      </footer>
    </>
  )
}

export default Contact
