import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)


  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50)


      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'contact'
      ]


      let current = 'home'


      sections.forEach((section) => {

        const element =
          document.getElementById(section)


        if (element) {

          if (
            window.scrollY >=
            element.offsetTop - 250
          ) {

            current = section

          }

        }

      })


      setActiveSection(current)

    }



    window.addEventListener(
      'scroll',
      handleScroll
    )


    handleScroll()


    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )


  }, [])



  const navLinks = [
    'about',
    'skills',
    'projects',
    'contact'
  ]



  return (

    <motion.nav

      initial={{
        y:-80,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:0.6
      }}


      className="navbar navbar-dark fixed-top"


      style={{

        background: scrolled
        ? 'rgba(12,10,31,0.95)'
        : 'rgba(12,10,31,0.4)',


        backdropFilter:'blur(12px)',

        transition:'0.4s',

        padding:'12px 0'

      }}

    >



      <div className="container d-flex justify-content-between align-items-center">



        {/* Logo */}

        <motion.a

          href="#home"

          className="navbar-brand fw-bold fs-4 text-decoration-none"

          whileHover={{
            scale:1.08
          }}

        >

          Manju

          <span style={{
            color:'#38bdf8'
          }}>
            .K
          </span>


        </motion.a>





        {/* Desktop Menu */}


        <div className="d-none d-md-flex gap-4">


          {navLinks.map((item,index)=>(


            <motion.a


              key={item}


              href={`#${item}`}


              className="text-decoration-none fw-semibold position-relative"


              initial={{
                opacity:0,
                y:-20
              }}


              animate={{
                opacity:1,
                y:0
              }}


              transition={{
                duration:0.4,
                delay:index*0.1
              }}



              whileHover={{

                scale:1.1,

                color:'#38bdf8',

                textShadow:
                '0 0 15px #38bdf8'

              }}



              whileTap={{
                scale:0.95
              }}



              style={{

                color:
                activeSection === item
                ? '#38bdf8'
                : '#94a3b8',

                textTransform:'capitalize',

                letterSpacing:'1px',

                fontSize:'0.95rem',

                transition:'0.3s'

              }}


            >


              {item}



              {/* underline */}

              {activeSection === item && (


                <motion.div


                  initial={{
                    width:0
                  }}


                  animate={{
                    width:'100%'
                  }}


                  transition={{
                    duration:0.3
                  }}



                  style={{

                    position:'absolute',

                    bottom:'-6px',

                    left:0,


                    height:'3px',


                    background:
                    'linear-gradient(90deg,#38bdf8,#a855f7)',


                    borderRadius:'10px'


                  }}

                />

              )}



            </motion.a>


          ))}


        </div>





        {/* Mobile Button */}


        <button

          className="d-md-none btn"

          onClick={() =>
            setMenuOpen(!menuOpen)
          }


          style={{

            color:'#38bdf8',

            background:'transparent',

            border:
            '1px solid #38bdf8'

          }}

        >

          {menuOpen ? '✕' : '☰'}

        </button>




      </div>





      {/* Mobile Menu */}



      {menuOpen && (


        <div

          className="container pb-3"


          style={{

            background:
            'rgba(12,10,31,0.95)'

          }}

        >


          {navLinks.map((item)=>(


            <a

              key={item}

              href={`#${item}`}


              onClick={() =>
                setMenuOpen(false)
              }


              className="d-block text-decoration-none py-2"


              style={{

                color:
                activeSection === item
                ? '#38bdf8'
                : '#94a3b8',

                textTransform:'capitalize'

              }}

            >

              {item}

            </a>


          ))}


        </div>


      )}



    </motion.nav>

  )

}


export default Navbar