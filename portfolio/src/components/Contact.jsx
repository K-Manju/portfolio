import StarField from './StarField'

function Contact() {
  return (
    <section
      id="contact"
      className="py-5 text-light position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c0a1f 0%, #030308 100%)',
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <StarField />
      <div className="container text-center py-4 position-relative" style={{ zIndex: 2 }}>
        <h2 className="fw-bold mb-3" style={{ letterSpacing: '2px' }}>
          Let's Work Together
        </h2>
        <p className="lead mb-5" style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          I'm actively looking for Java Backend Developer opportunities.
          Feel free to reach out!
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          
           <a  href="mailto:arulmanju6383@gmail.com"
            className="btn btn-lg px-4 fw-semibold"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              color: 'white', borderRadius: '50px',
              border: 'none', letterSpacing: '1px'
            }}
          >
            📧 Email Me
          </a>
          
            <a href="https://www.linkedin.com/in/manju021/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg px-4 fw-semibold"
            style={{
              background: 'transparent',
              border: '1px solid #a855f7',
              color: '#a855f7',
              borderRadius: '50px',
              letterSpacing: '1px'
            }}
          >
            🔗 LinkedIn
          </a>
          
            <a href="https://github.com/K-Manju"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg px-4 fw-semibold"
            style={{
              background: 'transparent',
              border: '1px solid #38bdf8',
              color: '#38bdf8',
              borderRadius: '50px',
              letterSpacing: '1px'
            }}
          >
            💻 GitHub
          </a>
        </div>
      </div>
      <hr style={{ borderColor: '#1e1b4b', position: 'relative', zIndex: 2 }} />
      <div className="text-center position-relative" style={{ color: '#64748b', zIndex: 2 }}>
        <small style={{ letterSpacing: '1px' }}>© 2026 Manju K. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Contact