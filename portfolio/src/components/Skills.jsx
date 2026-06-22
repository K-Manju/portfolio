import { motion } from 'framer-motion'
import StarField from './StarField'
import { FaJava, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostman, SiIntellijidea, SiJavascript } from 'react-icons/si'

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava size={30} />, base: "radial-gradient(circle at 35% 30%, #fdba74 0%, #ea580c 45%, #7c2d12 100%)" },
    { name: "Spring Boot", icon: <SiSpringboot size={30} />, base: "radial-gradient(circle at 35% 30%, #6ee7b7 0%, #059669 45%, #064e3b 100%)" },
    { name: "React", icon: <FaReact size={30} />, base: "radial-gradient(circle at 35% 30%, #a5f3fc 0%, #0891b2 45%, #164e63 100%)" },
    { name: "MySQL", icon: <SiMysql size={30} />, base: "radial-gradient(circle at 35% 30%, #93c5fd 0%, #1d4ed8 45%, #1e3a8a 100%)" },
    { name: "REST API", icon: <span style={{fontSize: '24px'}}>🔗</span>, base: "radial-gradient(circle at 35% 30%, #ddd6fe 0%, #7c3aed 45%, #4c1d95 100%)" },
    { name: "Git", icon: <FaGitAlt size={30} />, base: "radial-gradient(circle at 35% 30%, #fbcfe8 0%, #db2777 45%, #831843 100%)" },
    { name: "GitHub", icon: <FaGithub size={30} />, base: "radial-gradient(circle at 35% 30%, #f1f5f9 0%, #64748b 45%, #1e293b 100%)" },
    { name: "Postman", icon: <SiPostman size={30} />, base: "radial-gradient(circle at 35% 30%, #fda4af 0%, #e11d48 45%, #881337 100%)" },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea size={30} />, base: "radial-gradient(circle at 35% 30%, #e9d5ff 0%, #9333ea 45%, #581c87 100%)" },
    { name: "HTML/CSS", icon: <FaHtml5 size={30} />, base: "radial-gradient(circle at 35% 30%, #fed7aa 0%, #ea580c 45%, #7c2d12 100%)" },
    { name: "JavaScript", icon: <SiJavascript size={30} />, base: "radial-gradient(circle at 35% 30%, #fef9c3 0%, #ca8a04 45%, #713f12 100%)" },
  ]

  return (
    <section id="skills" className="py-5 position-relative overflow-hidden" style={{ background: '#030308' }}>
      <StarField />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center fw-bold mb-2 text-light"
          style={{ fontFamily: "'Segoe UI', sans-serif", letterSpacing: '2px' }}>
          My Skills
        </motion.h2>
        <div className="mx-auto mb-5" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #38bdf8, #a855f7)' }}></div>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <motion.div className="col-md-2 col-4 text-center" key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <motion.div
                className="rounded-circle mx-auto d-flex align-items-center justify-content-center text-white mb-2"
                style={{
                  width: '80px', height: '80px',
                  background: skill.base,
                  boxShadow: 'inset -10px -8px 18px rgba(0,0,0,0.55), inset 6px 6px 12px rgba(255,255,255,0.15), 0 0 18px rgba(255,255,255,0.12)',
                  cursor: 'pointer',
                }}
                animate={{ y: [0, -8, 0] }}
                whileHover={{ scale: 1.18, rotate: 360, boxShadow: 'inset -10px -8px 18px rgba(0,0,0,0.55), 0 0 35px rgba(255,255,255,0.45)' }}
                transition={{
                  y: { duration: 3 + (index % 3), repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 1, ease: 'linear' },
                  scale: { duration: 0.3 }
                }}
              >
                {skill.icon}
              </motion.div>
              <small className="text-light d-block mt-1" style={{ fontFamily: "'Segoe UI', sans-serif", letterSpacing: '0.5px' }}>
                {skill.name}
              </small>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills