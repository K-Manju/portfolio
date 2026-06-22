import { motion } from 'framer-motion'
import StarField from './StarField'

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-light position-relative overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at bottom, #0c0a1f 0%, #030308 100%)',
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <StarField />

      {/* Nebula glow blobs */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, #7c3aed, transparent)',
        opacity: 0.25, filter: 'blur(60px)',
        animation: 'float1 9s ease-in-out infinite', zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', right: '8%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, #06b6d4, transparent)',
        opacity: 0.25, filter: 'blur(60px)',
        animation: 'float2 11s ease-in-out infinite', zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute', top: '40%', right: '20%',
        width: '250px', height: '250px', borderRadius: '50%',
        background: 'radial-gradient(circle, #ec4899, transparent)',
        opacity: 0.15, filter: 'blur(50px)',
        animation: 'float1 7s ease-in-out infinite', zIndex: 0
      }}></div>

      <div className="container text-center position-relative" style={{ zIndex: 2 }}>

        {/* Avatar circle */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center fw-bold"
          style={{
            width: '130px', height: '130px', fontSize: '52px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            boxShadow: '0 0 50px rgba(124, 58, 237, 0.6), 0 0 100px rgba(6, 182, 212, 0.3)',
          }}
        >
          M
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="display-3 fw-bold mb-2"
          style={{ letterSpacing: '2px' }}
        >
          Hi, I'm Manju K
        </motion.h1>

        {/* Title with shine gradient */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-4 fw-bold"
          style={{
            background: 'linear-gradient(90deg, #38bdf8, #a855f7, #ec4899, #38bdf8)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shine 4s linear infinite',
            letterSpacing: '1px'
          }}
        >
          Java Backend Developer
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="lead col-md-7 mx-auto mb-5"
          style={{ color: '#a5b4cb', lineHeight: '1.8', fontSize: '1.1rem' }}
        >
          MCA Graduate skilled in Java, Spring Boot, REST API, and MySQL.
          Passionate about building scalable backend systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="d-flex justify-content-center gap-3 flex-wrap"
        >
          
          <a  href="#projects"
            className="btn btn-lg px-5 fw-semibold"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              border: 'none', color: 'white',
              borderRadius: '50px',
              boxShadow: '0 4px 25px rgba(124, 58, 237, 0.5)',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 8px 30px rgba(124,58,237,0.7)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 25px rgba(124,58,237,0.5)'
            }}
          >
            View Projects
          </a>
          
           <a href="#contact"
            className="btn btn-lg px-5 fw-semibold"
            style={{
              background: 'transparent',
              border: '1px solid #38bdf8',
              color: '#38bdf8',
              borderRadius: '50px',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(56,189,248,0.1)'
              e.target.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-5"
          style={{ color: '#475569' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontSize: '24px' }}
          >
            ↓
          </motion.div>
          <small style={{ letterSpacing: '2px', fontSize: '11px' }}>SCROLL DOWN</small>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero