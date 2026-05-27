import React, { useEffect, useState } from 'react'
import profileImg from './assets/mananjpeg.png'

export default function App() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = 'mananjain20';
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        // Public, unauthenticated request to GitHub REST API
        const [pRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`),
        ]);

        const profileJson = pRes.ok ? await pRes.json() : null;
        if (!rRes.ok) {
          const txt = await rRes.text().catch(() => '');
          throw new Error(`Repos fetch failed: ${rRes.status} ${rRes.statusText} ${txt ? '- ' + txt.slice(0,200) : ''}`);
        }
        const reposJson = await rRes.json();
        setProfile(profileJson);
        setRepos(reposJson.slice(0, 4));
      } catch (err) {
        setError(err.message || String(err));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  // expose a retry helper so the UI can re-run initial fetch
  // (small pragmatic shortcut to avoid passing functions deeply)
  if (typeof window !== 'undefined') window.__fetchInitialRepos = async () => {
    // call the same code path as useEffect by reloading the page-level data
    try {
      setLoading(true);
      setError(null);
      const username = 'mananjain20';
      const [pRes, rRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers: getGitHubHeaders() }),
        fetch(`https://api.github.com/users/${username}/repos?per_page=12&sort=updated`, { headers: getGitHubHeaders() }),
      ]);
      if (!pRes.ok || !rRes.ok) throw new Error('Retry fetch failed');
      // simple page reload of component state
      window.location.reload();
    } catch (e) {
      setError(e.message || String(e));
      setLoading(false);
    }
  }
  return (
    <div className="text-secondary font-body-md selection-custom bg-black" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7WjKT090zOYqGpA6lsHHb26j2kTUH8IBvrgNM3iwTughmf_giJSn-SKr1y1cbupNVdwQBcIwipH6fxFvtRA6EJJyNFaZG2v1bCAJffCEAtOEY1F_qpuTO1QV0IROfCvuv6bUg47Fw3FDLNZIHe0OcrPhCSHBAH7tmnEmsXP7vuNg1MA0jCSxlDHC0jxGjrboeuEZalSl7EpFR_Ty2gDTr84kVhNE5jMityYbcBDIM-ffdbcsu42RtwvQwl6R16vo7g6XvowB0q_G-')"}}>
      {/* top-level: we'll re-use the original HTML structure inside React */}
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
      <main className="pt-20">
        {/* Hero Section */}
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
        {/* About Section */}
        <section className="bg-surface-container-lowest border-y border-outline-variant scroll-mt-header fade-in" id="about">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
            <div className="flex flex-col md:flex-row gap-stack-lg">
              <div className="flex-[2] space-y-stack-md">
                <h2 className="font-headline-lg text-headline-lg text-primary inline-block border-b-2 border-primary pb-2 uppercase tracking-tight">About Me</h2>
                <div className="space-y-6 font-body-lg text-body-lg text-secondary opacity-90 leading-relaxed">
                  <p>My journey into software engineering began with a curiosity for how things work under the hood. Over the years, I've evolved into a developer who thrives at the intersection of logical backend architecture and intuitive frontend experiences.</p>
                  <p>Currently focusing on building modern web applications using the <strong>MERN stack</strong>,  Tailwind CSS for rapid, scalable UI development.</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-black border border-outline-variant rounded-xl p-8 shadow-2xl">
                  <h3 className="font-label-mono text-label-mono text-primary uppercase tracking-widest mb-6">Quick Facts</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary opacity-70">school</span><span className="text-secondary font-body-md">B.Tech in Computer Science</span></li>
                    <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary opacity-70">location_on</span><span className="text-secondary font-body-md">Mumbai, India</span></li>
                    <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary opacity-70">work</span><span className="text-secondary font-body-md">Open to Opportunities</span></li>
                    <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary opacity-70">mail</span><span className="text-secondary font-body-md">manansancheti02@gmail.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section turned into Projects badges (no descriptions) */}
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
        {/* Projects Section (dynamic from GitHub) */}
        <section className="bg-surface-container-lowest border-y border-outline-variant scroll-mt-header fade-in" id="projects">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">Selected Projects</h2>
                <p className="text-secondary opacity-60 mt-2 font-body-md">A showcase of recent work and technical experiments.</p>
              </div>
              <div className="flex items-center gap-4">
                {profile && (
                  <div className="flex items-center gap-4">
                    <img src={profile.avatar_url} alt={profile.login} className="w-12 h-12 rounded-full border border-outline" />
                    <div className="text-right">
                      <div className="font-label-mono text-label-mono text-primary uppercase font-bold">{profile.name || profile.login}</div>
                      <div className="text-secondary text-[13px] opacity-70">{profile.bio || profile.login}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {loading && <div className="text-center text-secondary py-12">Loading GitHub projects...</div>}
            {error && (
              <div className="text-center text-error py-12 space-y-4">
                <div>Error: {error}</div>
                <div className="flex justify-center gap-4">
                  <button className="px-4 py-2 bg-primary text-on-primary rounded-md" onClick={() => window.location.reload()}>Retry</button>
                </div>
              </div>
            )}

            {!loading && !error && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.length === 0 && (
                  <div className="text-secondary">No repositories found.</div>
                )}
                {repos.map(repo => (
                  <div key={repo.id} className="project-card border border-outline-variant rounded-xl overflow-hidden flex flex-col group">
                    <div className="p-6 flex-1 flex flex-col items-start justify-center">
                      <a className="font-headline-md text-headline-md text-primary hover:underline" href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Contact Section */}
        <section className="scroll-mt-header fade-in" id="contact">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-4 tracking-tight">Get In Touch</h2>
              <p className="text-secondary opacity-80 font-body-lg text-body-lg mb-12">Have a project in mind or just want to say hi? My inbox is always open.</p>
              <form className="space-y-6 text-left border border-outline-variant p-8 md:p-12 rounded-2xl bg-surface-container-lowest shadow-2xl" onSubmit={(e) => { e.preventDefault(); document.getElementById('success-msg')?.classList.remove('hidden'); try { const form = e.target; if (form && form instanceof HTMLFormElement) form.classList.add('hidden'); } catch (err) { /* ignore */ } }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-mono text-label-mono uppercase tracking-widest text-primary/60">Name</label>
                    <input className="w-full px-5 py-4 rounded-lg transition-all" placeholder="Manan" required type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-mono text-label-mono uppercase tracking-widest text-primary/60">Email</label>
                    <input className="w-full px-5 py-4 rounded-lg transition-all" placeholder="manan@example.com" required type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-mono text-label-mono uppercase tracking-widest text-primary/60">Message</label>
                  <textarea className="w-full px-5 py-4 rounded-lg transition-all" placeholder="Your message here..." required rows="5"></textarea>
                </div>
                <button className="w-full py-5 bg-primary text-on-primary rounded-lg font-label-mono text-label-mono uppercase tracking-bold hover:opacity-90 transition-all active:scale-[0.98] shadow-2xl shadow-primary/10" type="submit">Send Message</button>
              </form>
              <div className="hidden animate-pulse border border-primary/20 text-primary p-12 rounded-2xl bg-primary/5" id="success-msg">
                <p className="font-headline-md text-headline-md mb-2">Message Sent! 🎉</p>
                <p className="font-body-md text-body-md opacity-80">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
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
      <script dangerouslySetInnerHTML={{__html: `
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('fade-in'); } }); }, observerOptions);
        document.querySelectorAll('section').forEach(section => observer.observe(section));
        document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); });
      `}} />
    </div>
  )
}
