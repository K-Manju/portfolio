import { motion } from 'framer-motion'
import StarField from './StarField'

function Projects() {
  const projects = [
    {
      title: "ShopNest", subtitle: "E-Commerce REST API",
      description: "Secure JWT login with role-based access, product catalog, cart & order management. MySQL relational schema with JPA, Swagger documentation.",
      tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT"],
      github: "https://github.com/K-Manju/shopnest", emoji: "🛒",
      gradient: "linear-gradient(135deg, #f97316, #ec4899)"
    },
    {
      title: "StaffHub", subtitle: "Employee Management System",
      description: "Full CRUD for employees & departments with manager hierarchy. Pagination, sorting, keyword search, and custom JPQL queries.",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL"],
      github: "https://github.com/K-Manju/staffhub", emoji: "👥",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)"
    },
    {
      title: "BookWise", subtitle: "Library Management API",
      description: "Book issue/return flow with real-time availability tracking. Auto fine calculation via Spring @Scheduled cron job.",
      tech: ["Java", "Spring Boot", "H2/MySQL", "Spring Scheduler"],
      github: "https://github.com/K-Manju/bookwise", emoji: "📚",
      gradient: "linear-gradient(135deg, #a855f7, #6366f1)"
    }
  ]

  return (
    <section id="projects" className="py-5 position-relative overflow-hidden" style={{ background: '#0c0a1f' }}>
      <StarField />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center fw-bold mb-2 text-light">
          My Projects
        </motion.h2>
        <div className="mx-auto mb-5" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #38bdf8, #a855f7)' }}></div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              className="col-md-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className="card h-100 border-0 rounded-4 overflow-hidden"
                style={{ background: '#161329', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', transition: 'all 0.3s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(124,58,237,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'
                }}
              >
                <div className="p-4 text-center" style={{ background: project.gradient, fontSize: '48px' }}>
                  {project.emoji}
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <h4 className="fw-bold text-light">{project.title}</h4>
                  <h6 className="mb-3" style={{ color: '#38bdf8' }}>{project.subtitle}</h6>
                  <p className="flex-grow-1" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge me-1 mb-1" style={{ background: 'rgba(56,189,248,0.15)', color: '#38bdf8', fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn mt-auto fw-semibold"
                    style={{ background: project.gradient, color: 'white', border: 'none' }}>
                    View Code →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects