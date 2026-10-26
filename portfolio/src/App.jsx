import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
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

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-6xl mx-auto px-4">
        <section id="hero" className="py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-muted mb-2">Hi, I'm {content.profile.fullName.split(' ')[1]}, also known as {content.profile.brand}</p>
            <h1 className="font-display text-5xl font-bold">{content.profile.brand}</h1>
            <p className="text-accent2 text-xl mt-2">{content.profile.title}</p>
            <p className="mt-4 text-muted">{content.profile.summary[0]}</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-5 py-3 rounded-full bg-accent text-black font-medium">View my work</a>
              <a href="#contact" className="px-5 py-3 rounded-full border border-border">Contact me</a>
            </div>
            <div className="mt-6 flex gap-2 flex-wrap">
              {['React','Node.js','Three.js','Supabase'].map(c=> <span key={c} className="px-3 py-1 rounded-full border border-border text-sm">{c}</span>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent2/20 blur-3xl rounded-full" />
            <img src="/images/profile.jpg" alt={`Portrait of ${content.profile.fullName}`} className="relative w-full max-w-sm mx-auto rounded-3xl object-cover aspect-[4/5] ring-4 ring-accent/40" loading="eager" onError={(e)=>{e.target.style.display='none'}} />
          </div>
        </section>

        <section id="about" className="py-16">
          <h2 className="font-display text-3xl font-bold mb-4">About</h2>
          <p className="mb-3">I'm {content.profile.fullName} ({content.profile.brand}), a {content.profile.title}.</p>
          {content.profile.summary.map((p,i)=><p key={i} className="text-muted mb-3">{p}</p>)}
          <div className="mt-6 flex gap-6">
            {content.profile.stats.map(s=> <div key={s.label}><div className="text-2xl font-bold text-accent">{s.value}</div><div className="text-sm text-muted">{s.label}</div></div>)}
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="font-display text-3xl font-bold mb-4">Skills</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(content.skills).map(([k,v])=>(
              <GlassCard key={k}>
                <h3 className="font-semibold mb-2">{k}</h3>
                <div className="flex flex-wrap gap-2">{v.map(t=> <span key={t} className="px-2 py-1 rounded-lg bg-surface text-sm border border-border">{t}</span>)}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="font-display text-3xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {content.projects.map(p=>(
              <GlassCard key={p.title}>
                <div className="h-32 rounded-xl bg-gradient-to-br from-accent2/30 to-accent/30 mb-3 flex items-center justify-center text-sm text-muted">{p.title}</div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted mt-1">{p.description}</p>
                <ul className="mt-2 text-sm text-muted list-disc pl-5">{p.highlights.map(h=><li key={h}>{h}</li>)}</ul>
                <div className="flex flex-wrap gap-2 mt-2">{p.tags.map(t=> <span key={t} className="px-2 py-1 rounded text-xs border border-border">{t}</span>)}</div>
                <div className="mt-3 flex gap-2">
                  {p.demo && <a href={p.demo} className="text-accent2 text-sm">Live demo</a>}
                  {p.repo && <a href={p.repo} className="text-accent2 text-sm">GitHub</a>}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="education" className="py-16">
          <h2 className="font-display text-3xl font-bold mb-4">Education</h2>
          <GlassCard>
            <h3 className="font-semibold">{content.education.school}</h3>
            <p className="text-muted">{content.education.degree} — {content.education.status}</p>
            <div className="flex flex-wrap gap-2 mt-3">{content.education.areas.map(a=> <span key={a} className="px-2 py-1 rounded-lg border border-border text-sm">{a}</span>)}</div>
          </GlassCard>
        </section>

        <section id="competencies" className="py-16">
          <h2 className="font-display text-3xl font-bold mb-4">Core Competencies</h2>
          <GlassCard>
            <div className="flex flex-wrap gap-2">{content.competencies.map(c=> <span key={c} className="px-2 py-1 rounded-full border border-border text-sm">{c}</span>)}</div>
            <h3 className="font-semibold mt-4">Interests</h3>
            <div className="flex flex-wrap gap-2 mt-2">{content.interests.map(c=> <span key={c} className="px-2 py-1 rounded-full border border-border text-sm">{c}</span>)}</div>
          </GlassCard>
        </section>

        <section id="contact" className="py-16">
          <h2 className="font-display text-3xl font-bold mb-4">Contact</h2>
          <GlassCard>
            {(() => {
              const [copied, setCopied] = React.useState(false);
              const [revealed, setRevealed] = React.useState(false);
              const email = content.contact.emailParts.join('@');
              const phone = content.contact.phoneParts.join('');
              return (
                <>
                  <form onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.target); const name=f.get('name')||'Visitor'; window.location.href=`mailto:${email}?subject=${encodeURIComponent('Portfolio enquiry from '+name)}&body=${encodeURIComponent(f.get('message'))}`;}} className="flex flex-col gap-3">
                    <input name="name" placeholder="Name" required className="px-4 py-2 rounded-xl border border-border bg-surface" />
                    <input name="email" type="email" placeholder="Email" required className="px-4 py-2 rounded-xl border border-border bg-surface" />
                    <textarea name="message" placeholder="Message" required className="px-4 py-2 rounded-xl border border-border bg-surface" rows={4} />
                    <button type="submit" className="px-5 py-3 rounded-full bg-accent text-black font-medium w-fit">Send</button>
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
          </GlassCard>
        </section>
      </main>
      <footer className="text-center py-8 text-muted text-sm">© {new Date().getFullYear()} {content.profile.brand} by {content.profile.fullName}.</footer>
    </div>
  );
}
