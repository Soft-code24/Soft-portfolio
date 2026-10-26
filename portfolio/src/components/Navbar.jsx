import React from 'react';
import { content } from '../data/content.js';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = React.useState(false);
  const links = ['About','Skills','Projects','Education','Contact'];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border bg-glass">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="glass rounded-xl w-9 h-9 flex items-center justify-center font-display font-bold text-accent border border-accent/40">ST</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold text-base">{content.profile.brand}</span>
            <span className="text-xs text-muted">{content.profile.fullName}</span>
          </span>
        </a>
        <div className="hidden md:flex gap-6">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-muted hover:text-text">{l}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setTheme(t=>t==='dark'?'light':'dark')} aria-label="toggle theme" className="p-2 rounded-full border border-border">
            {theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}
          </button>
          <a href={`mailto:${content.contact.emailParts.join('@')}?subject=Portfolio%20enquiry`} className="hidden md:inline-block px-4 py-2 rounded-full bg-accent text-black font-medium">Hire me</a>
          <button className="md:hidden p-2" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)} className="py-2">{l}</a>)}
        </div>
      )}
    </header>
  );
}
