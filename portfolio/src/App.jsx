import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import content from './data/content.js';
import Navbar from './components/Navbar.jsx';
import './index.css';

function GlassCard({children, className=''}) {
  return <div className={`glass rounded-card p-6 ${className}`}>{children}</div>;
}

export default function App() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme==='dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50" style={{ scaleX }} />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-6xl mx-auto px-4">
        <section className="reveal relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0a0a] via-[#0B1220] to-[#0a1a2a] py-16" id="hero">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 blur-3xl rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center min-h-screen">
            <div>
              <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Creative Developer</motion.p>
              <motion.h1 initial={{opacity:0, y:60}} animate={{opacity:1, y:0}} transition={{duration:1, delay:0.2}} className="font-display text-[12vw] md:text-[8vw] font-black leading-none text-white">
                SOFT<br/><span className="text-accent">TECH</span>
              </motion.h1>
              <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="mt-6 text-lg text-gray-300 max-w-md">{content.profile.summary[0]}</motion.p>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} className="mt-8 flex gap-4">
                <a href="#projects" className="px-6 py-3 bg-accent text-black font-bold rounded-full">View Work</a>
                <a href="#contact" className="px-6 py-3 border border-white/30 text-white rounded-full">Contact</a>
              </motion.div>
            </div>
            <div className="relative flex items-center justify-center">
              <img src="/images/profile.jpg" alt={`Portrait of ${content.profile.fullName}`} className="relative w-full max-w-sm mx-auto rounded-3xl object-cover aspect-[4/5] ring-4 ring-accent/40 z-10" loading="eager" />
              <motion.div animate={{ rotateY: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute w-72 h-72 border-4 border-accent rounded-full" style={{ transformStyle: 'preserve-3d' }} />
            </div>
          </div>
        </section>

        <section className="reveal relative py-24 overflow-hidden bg-gradient-to-br from-[#2a0a0a] via-[#0B1220] to-[#0a1a2a]" id="about">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <motion.h2 initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:1}} className="font-display text-[10vw] font-black text-white leading-none mb-12">
              ABOUT<br/><span className="text-accent">ME</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute -inset-4 border-2 border-accent/30 rounded-3xl" />
                <img src="/images/profile.jpg" alt={`Portrait of ${content.profile.fullName}`} className="relative w-full max-w-md rounded-3xl object-cover aspect-[4/5] ring-4 ring-accent/40" />
              </div>
              <div>
                <p className="text-2xl text-gray-200 font-light mb-6">{content.profile.fullName}</p>
                <p className="text-lg text-gray-400 mb-4">{content.profile.summary[0]}</p>
                <p className="text-gray-500">{content.profile.summary[1]}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal relative py-24 overflow-hidden bg-gradient-to-b from-[#0B1220] to-[#1a0a0a]" id="skills">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 blur-3xl rounded-full" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <motion.h2 initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:1}} className="font-display text-[8vw] font-black text-white leading-none mb-12">
              SKILLS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(content.skills).map(([k,v])=>(
                <div key={k} className="p-6 rounded-2xl border border-border bg-surface/50 backdrop-blur">
                  <h3 className="font-display text-xl font-bold text-accent mb-4">{k}</h3>
                  <div className="flex flex-wrap gap-2">
                    {v.map(t=> <span key={t} className="px-3 py-1 rounded-full bg-accent/10 text-sm border border-accent/30">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal relative py-24 overflow-hidden bg-gradient-to-br from-[#2a0a0a] via-[#0B1220] to-[#0a1a2a]" id="projects">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/20 blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <motion.h2 initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:1}} className="font-display text-[8vw] font-black text-white leading-none mb-12">
              PROJECTS
            </motion.h2>
            <div className="space-y-12">
              {content.projects.map((p,i)=>(
                <div key={p.title} className={`grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl ${i%2===0 ? 'bg-gradient-to-br from-red-900/30 to-blue-900/30' : 'bg-gradient-to-br from-orange-900/30 to-purple-900/30'}`}>
                  <img src={p.image} alt={`${p.title} mockup`} className="h-64 w-full rounded-2xl object-cover hover:scale-105 transition" />
                  <div>
                    <h3 className="font-display text-3xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-300 mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">{p.tags.map(t=> <span key={t} className="px-3 py-1 rounded-full border border-accent/40 text-sm text-white">{t}</span>)}</div>
                    <div className="flex gap-3">
                      {p.demo && <a href={p.demo} className="px-4 py-2 bg-accent text-black rounded-full font-medium">Live demo</a>}
                      {p.repo && <a href={p.repo} className="px-4 py-2 border border-white/30 text-white rounded-full">GitHub</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal relative py-24 overflow-hidden bg-gradient-to-b from-[#1a0a0a] to-[#0B1220]" id="education">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-3xl rounded-full" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <motion.h2 initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:1}} className="font-display text-[8vw] font-black text-white leading-none mb-12">
              EDUCATION
            </motion.h2>
            <div className="relative pl-8 border-l-4 border-accent">
              <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="mb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent" />
                <h3 className="font-display text-2xl font-bold text-white">{content.education.school}</h3>
                <p className="text-gray-300">{content.education.degree}</p>
                <p className="text-gray-400">{content.education.status}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {content.education.areas.map(a=> <span key={a} className="px-3 py-1 rounded-full border border-border text-sm">{a}</span>)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="reveal relative py-24 overflow-hidden bg-gradient-to-br from-[#2a0a0a] via-[#0B1220] to-[#0a1a2a]" id="hire">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 blur-3xl rounded-full" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.h2 initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:1}} className="font-display text-[10vw] font-black text-white leading-none mb-8">
              LET'S<br/><span className="text-accent">BUILD</span>
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8">I'm available for web development projects.</p>
            <a href="#contact" className="inline-block px-8 py-4 bg-accent text-black font-bold rounded-full text-lg">Start a Project</a>
          </div>
        </section>

        <section className="reveal relative py-24 overflow-hidden bg-gradient-to-b from-[#0B1220] to-[#1a0a0a]" id="contact">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-display text-6xl font-black text-white mb-8">Contact</motion.h2>
            {(() => {
              const [copied, setCopied] = React.useState(false);
              const [revealed, setRevealed] = React.useState(false);
              const [sending, setSending] = React.useState(false);
              const [formStatus, setFormStatus] = React.useState('');
              const email = content.contact.emailParts.join('@');
              const phone = content.contact.phoneParts.join('');
              return (
                <>
                  <form onSubmit={async (e)=>{e.preventDefault(); const f=new FormData(e.target); const name=f.get('name')||'Visitor'; setSending(true); setFormStatus(''); try { const r=await fetch(`${import.meta.env.VITE_API_URL||'http://localhost:5000'}/api/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email:f.get('email'),subject:'Portfolio enquiry',message:f.get('message')})}); const d=await r.json(); if(!r.ok) throw new Error(d.error||'Failed'); setFormStatus('success'); e.target.reset(); } catch(err){ setFormStatus('error'); } finally { setSending(false); } }} className="flex flex-col gap-3">
                    <input name="name" placeholder="Name" required className="px-4 py-2 rounded-xl border border-border bg-surface" />
                    <input name="email" type="email" placeholder="Email" required className="px-4 py-2 rounded-xl border border-border bg-surface" />
                    <textarea name="message" placeholder="Message" required className="px-4 py-2 rounded-xl border border-border bg-surface" rows={4} />
                    <button type="submit" className="px-5 py-3 rounded-full bg-accent text-black font-medium w-fit" disabled={sending}>{sending?'Sending...':'Send'}</button>
                    {formStatus==='success' && <p className="text-green-500 text-sm">Message sent successfully.</p>}
                    {formStatus==='error' && <p className="text-red-500 text-sm">Failed to send. Try again.</p>}
                  </form>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={`mailto:${email}?subject=Portfolio%20enquiry`} aria-label="Email Nnamdi Hephzibah" className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-accent transition" target="_blank" rel="noopener noreferrer"><MdEmail size={20}/></a>
                    <a href={content.contact.github} target="_blank" rel="noopener noreferrer" aria-label="Nnamdi Hephzibah on GitHub (opens in a new tab)" className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-accent transition"><FaGithub size={18}/></a>
                    <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Nnamdi Hephzibah on LinkedIn (opens in a new tab)" className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-accent transition"><FaLinkedinIn size={18}/></a>
                    <a href={content.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Nnamdi Hephzibah on WhatsApp (opens in a new tab)" className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-accent transition"><FaWhatsapp size={18}/></a>
                    <button onClick={()=>{navigator.clipboard.writeText(email); setCopied(true); setTimeout(()=>setCopied(false),1500);}} className="px-3 py-1 rounded-full border border-border">{copied?'Copied':'Copy email'}</button>
                    {!revealed ? (
                      <button onClick={()=>setRevealed(true)} className="px-3 py-1 rounded-full border border-border">Reveal number</button>
                    ) : (
                      <>
                        <a href={`tel:${content.contact.intlPhone}`} className="px-3 py-1 rounded-full border border-border">{phone}</a>
                        <button onClick={()=>navigator.clipboard.writeText(phone)} className="px-3 py-1 rounded-full border border-border">Copy</button>
                        <a href={content.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full border border-border">Chat on WhatsApp</a>
                      </>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </section>
      </main>
      <footer className="text-center py-8 text-muted text-sm">© {new Date().getFullYear()} {content.profile.brand} by {content.profile.fullName}.</footer>
    </div>
  );
}
