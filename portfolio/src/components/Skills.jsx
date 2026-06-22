import { motion } from 'framer-motion'
import StarField from './StarField'
import { FaJava, FaGitAlt, FaGithub, FaHtml5 } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostman, SiIntellijidea, SiJavascript } from 'react-icons/si'

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava size={36} />, color: "#f89820" },
    { name: "Spring Boot", icon: <SiSpringboot size={36} />, color: "#6db33f" },
    { name: "MySQL", icon: <SiMysql size={36} />, color: "#4479a1" },
    { name: "REST API", icon: <span style={{fontSize: '30px'}}>🔗</span>, color: "#38bdf8" },
    { name: "Git", icon: <FaGitAlt size={36} />, color: "#f05032" },
    { name: "GitHub", icon: <FaGithub size={36} />, color: "#e2e8f0" },
    { name: "Postman", icon: <SiPostman size={36} />, color: "#ff6c37" },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea size={36} />, color: "#a855f7" },
    { name: "HTML/CSS", icon: <FaHtml5 size={36} />, color: "#e34f26" },
    { name: "JavaScript", icon: <SiJavascript size={36} />, color: "#f7df1e" },
  ]

  return (
    <section id="skills" className="py-5 position-relative overflow-hidden" style={{ background: '#030308' }}>
      <StarField />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center fw-bold mb-2 text-light">
          My Skills
        </motion.h2>
        <div className="mx-auto mb-5" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #38bdf8, #a855f7)' }}></div>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <motion.div
              className="col-md-2 col-4"
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div
                className="text-center p-4 rounded-4 text-light skill-card"
                style={{ background: 'rgba(30, 27, 75, 0.5)', border: '1px solid rgba(124,58,237,0.2)', cursor: 'pointer', transition: 'all 0.3s', backdropFilter: 'blur(4px)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                  e.currentTarget.style.boxShadow = `0 10px 25px ${skill.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="mb-2" style={{ color: skill.color }}>{skill.icon}</div>
                <small>{skill.name}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills