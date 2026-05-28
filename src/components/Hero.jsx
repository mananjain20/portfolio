import React from 'react'

export default function Hero({ profileImg }) {
  return (
    <section className="min-h-[85vh] flex items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg fade-in">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-stack-lg">
        <div className="flex-1 space-y-stack-md text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/20 text-primary font-label-mono text-label-mono uppercase tracking-widest bg-primary/5">
            Available for new opportunities
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
             Hello, I'm <span className="text-primary">Manan Jain</span>
          </h1>
          <p className="font-headline-md text-headline-md text-secondary opacity-80">
            Full Stack Developer · React · Node.js
          </p>
          <p className="max-w-2xl text-secondary font-body-lg text-body-lg leading-relaxed">
            I craft scalable, high-performance web applications with a focus on clean code and user-centric design. Turning complex problems into elegant software solutions.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a className="px-8 py-4 bg-primary text-on-primary rounded-lg font-label-mono text-label-mono uppercase tracking-bold hover:opacity-90 transition-all active:scale-95 flex items-center gap-2" href="#projects">
              View My Work
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <button className="px-8 py-4 border border-outline text-primary rounded-lg font-label-mono text-label-mono uppercase hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-2">
              Download CV
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-surface-container-lowest rounded-full overflow-hidden border border-outline flex items-center justify-center">
              <img src={profileImg} alt="Manan Jain Avatar" className="absolute inset-0 w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
