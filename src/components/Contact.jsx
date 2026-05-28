import React from 'react'

export default function Contact() {
  return (
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
  )
}
