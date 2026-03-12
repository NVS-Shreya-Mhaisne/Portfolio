import React, { useRef } from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"


const Nav = () => {
  let menu=useRef()
   let mobile=useRef()

   useGSAP(()=>{
    let tl=gsap.timeline()
    tl.from("nav h1",{
      y:-100,
      duration:1,
      opacity:0
    })
    tl.from("nav ul li",{
      y:-100,
      duration:1,
      opacity:0,
      stagger:0.2
    })
    // Ensure hamburger is visible immediately on mobile
    tl.set(".hamburger", { opacity: 1 }, 0)
   })
  
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className='desktopmenu'>
        <Link to="home" smooth={true} spy={true} activeClass='active' duration={500}><li>Home</li></Link>
        <Link to="about" smooth={true} spy={true} activeClass='active' duration={500}><li>About</li></Link>
       
        <Link to="Skills" smooth={true} spy={true} activeClass='active' duration={500}><li>Skills</li></Link>
         <Link to="education" smooth={true} spy={true} activeClass='active' duration={500}><li>Education</li></Link>
        <Link to="projects" smooth={true} spy={true} activeClass='active' duration={500}><li>Projects</li></Link>
        <Link to="contact" smooth={true} spy={true} activeClass='active' duration={500}><li>Contact</li></Link>
      </ul>
      <div className="hamburger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
        <ul className='mobilemenu' ref={mobile}>
        <Link to="home" smooth={true} spy={true} activeClass='active' duration={500}><li>Home</li></Link>
        <Link to="about" smooth={true} spy={true} activeClass='active' duration={500}><li>About</li></Link>
        <Link to="education" smooth={true} spy={true} activeClass='active' duration={500}><li>Education</li></Link>
        <Link to="Skills" smooth={true} spy={true} activeClass='active' duration={500}><li>Skills</li></Link>
        <Link to="projects" smooth={true} spy={true} activeClass='active' duration={500}><li>Projects</li></Link>
        <Link to="contact" smooth={true} spy={true} activeClass='active' duration={500}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
