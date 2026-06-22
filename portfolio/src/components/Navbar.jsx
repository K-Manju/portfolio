function Navbar() {
  return (
    <nav
      className="navbar navbar-dark fixed-top"
      style={{ background: 'rgba(12, 10, 31, 0.85)', backdropFilter: 'blur(10px)' }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          Manju<span style={{ color: '#38bdf8' }}>.K</span>
        </a>
        <div>
          <a href="#about" className="text-light mx-3 text-decoration-none">About</a>
          <a href="#skills" className="text-light mx-3 text-decoration-none">Skills</a>
          <a href="#projects" className="text-light mx-3 text-decoration-none">Projects</a>
          <a href="#contact" className="text-light mx-3 text-decoration-none">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar