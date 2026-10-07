import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { profile } from './data/profile'

// Ambient background blobs — purely decorative
function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="ambient-circle w-[550px] h-[550px] bg-[var(--color-secondary-fixed-dim)]/20 -top-32 -left-20" />
      <div className="ambient-circle w-[650px] h-[650px] bg-[var(--color-primary-fixed-dim)]/25 top-[25%] -right-32" />
      <div className="ambient-circle w-[600px] h-[600px] bg-[var(--color-tertiary-fixed)]/20 top-[60%] left-[25%]" />
    </div>
  )
}

export default function App() {
  const displayName = profile.name !== 'YOUR_NAME' ? profile.name : 'AI/ML Student'

  return (
    <>
      {/* SEO-relevant meta is in index.html; this is the React app shell */}
      <AmbientBackground />

      <div className="relative z-10">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg z-50 font-mono text-xs"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
