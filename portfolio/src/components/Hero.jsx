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
      }}
    >
      <StarField />

      <div style={{
        position: 'absolute', top: '15%', left: '10%', width: '350px', height: '350px',
        borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed, transparent)',
        opacity: 0.25, filter: 'blur(60px)', animation: 'float1 9s ease-in-out infinite', zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', right: '8%', width: '400px', height: '400px',
        borderRadius: '50%', background: 'radial-gradient(circle, #06b6d4, transparent)',
        opacity: 0.25, filter: 'blur(60px)', animation: 'float2 11s ease-in-out infinite', zIndex: 0
      }}></div>

      <div className="container text-center position-relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center fw-bold"
          style={{
            width: '120px', height: '120px', fontSize: '48px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            boxShadow: '0 0 50px rgba(124, 58, 237, 0.6), 0 0 100px rgba(6, 182, 212, 0.3)',
          }}
        >
          M
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="display-3 fw-bold mb-2"
        >
          Hi, I'm Manju K
        </motion.h1>

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
          }}
        >
          Java Backend Developer
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="lead col-md-7 mx-auto mb-5"
          style={{ color: '#a5b4cb' }}
        >
          MCA Graduate skilled in Java, Spring Boot, REST API, and MySQL.
          Passionate about building scalable backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          
           <a href="#projects"
            className="btn btn-lg me-3 px-4 fw-semibold hero-btn"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              border: 'none', color: 'white',
              boxShadow: '0 4px 25px rgba(124, 58, 237, 0.5)',
            }}
          >
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg px-4 fw-semibold">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero