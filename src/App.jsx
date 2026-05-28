import React, { useEffect, useState } from 'react'
import profileImg from './assets/mananjpeg.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      <Navbar />
      <main className="pt-20">
        <Hero profileImg={profileImg} />
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
        <Skills />
        {/* Projects Section (dynamic from GitHub) */}
        <Projects profile={profile} repos={repos} loading={loading} error={error} />
        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
      <script dangerouslySetInnerHTML={{__html: `
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('fade-in'); } }); }, observerOptions);
        document.querySelectorAll('section').forEach(section => observer.observe(section));
        document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); });
      `}} />
    </div>
  )
}
