import { motion } from 'framer-motion'
import StarField from './StarField'

function About() {
  return (
    <section id="about" className="py-5 position-relative overflow-hidden" style={{ background: '#0c0a1f', fontFamily: "'Segoe UI', sans-serif" }}>
      <StarField />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center fw-bold mb-2 text-light"
          style={{ letterSpacing: '2px' }}>
          About Me
        </motion.h2>
        <div className="mx-auto mb-5" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #38bdf8, #a855f7)' }}></div>
        <div className="row align-items-center g-5">
          <motion.div className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', fontFamily: "'Segoe UI', sans-serif" }}>
              I'm a Java Backend Developer fresher with a Master's degree in Computer Applications (MCA).
              I specialize in building RESTful APIs using Spring Boot, Spring Security, and MySQL.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8', fontFamily: "'Segoe UI', sans-serif" }}>
              I enjoy solving real-world problems through clean, scalable backend architecture.
              I've built 3 complete backend projects covering authentication, CRUD operations,
              pagination, and scheduled tasks.
            </p>
          </motion.div>
          <motion.div className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="p-4 rounded-4 text-white" style={{
              background: 'linear-gradient(135deg, #1e1b4b, #0c0a1f)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              boxShadow: '0 0 30px rgba(124, 58, 237, 0.15)',
              fontFamily: "'Segoe UI', sans-serif"
            }}>
              <h5 className="fw-bold mb-3" style={{ color: '#a855f7', letterSpacing: '1px' }}>Quick Facts</h5>
              <ul className="list-unstyled" style={{ fontSize: '1rem', lineHeight: '2' }}>
                <li>🎓 MCA Graduate — CGPA 8.6</li>
                <li>💻 3 Spring Boot Projects</li>
                <li>📍 Bangalore, India</li>
                <li>🚀 Open to Work</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About