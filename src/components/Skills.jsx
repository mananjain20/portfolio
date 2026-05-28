import React from 'react'

export default function Skills() {
  return (
    <section className="scroll-mt-header fade-in" id="skills">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">Technical Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">HTML</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">CSS</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">JavaScript</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">React</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">Git</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">GitHub</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">Python</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">C</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">C++</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">Tailwind CSS</span>
          <span className="skill-badge bg-black text-secondary px-5 py-2 rounded-lg font-label-mono text-body-sm">Bootstrap</span>
        </div>
      </div>
    </section>
  )
}
