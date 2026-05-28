import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-secondary/10">
      <div className="flex flex-col md:flex-row justify-between items-center py-stack-md px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-stack-sm">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-label-mono text-label-mono text-primary uppercase font-bold"></span>
          <p className="font-label-mono text-label-mono uppercase text-secondary/40 mt-1">MANAN JAIN. BUILT FOR THE VIRTUAL VOID.</p>
        </div>
          <div className="flex gap-6">
          <a className="font-label-mono text-label-mono uppercase text-secondary hover:text-primary transition-opacity inline-block hover:-translate-y-1 transition-transform duration-300" href="https://github.com/mananjain20" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a className="font-label-mono text-label-mono uppercase text-secondary hover:text-primary transition-opacity inline-block hover:-translate-y-1 transition-transform duration-300" href="https://www.linkedin.com/in/manan-jain-bb1a70396/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a className="font-label-mono text-label-mono uppercase text-secondary hover:text-primary transition-opacity inline-block hover:-translate-y-1 transition-transform duration-300" href="#">EMAIL</a>
        </div>
      </div>
    </footer>
  )
}
