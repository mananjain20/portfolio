import React from 'react'

export default function Projects({ profile, repos, loading, error }) {
  return (
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
  )
}
