import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-secondary/15">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-9 h-9 rounded-md flex items-center justify-center bg-surface-container-lowest border border-outline">
            <span className="font-label-mono font-bold text-primary text-sm">MJ</span>
          </div>
          <span className="font-label-mono text-body-lg font-bold text-primary tracking-tighter">MANAN JAIN</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#about">About</a>
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#skills">Skills</a>
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#projects">Projects</a>
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
