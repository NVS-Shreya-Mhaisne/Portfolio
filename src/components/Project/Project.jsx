import React, { useState, useRef } from 'react'
import curr from "../../assets/currency.png"
import nc from "../../assets/Netflix.png"
import Nykaa from "../../assets/Nykaa.png"
import stop from "../../assets/StopWatch.png"
import paroz from "../../assets/paroz.png"
import firebaseLogo from "../../assets/firebase.png"
import hotel from "../../assets/Hotel.png"
import bakery from "../../assets/Bakery.png"
import clerk from "../../assets/clerk.png"
import tomato from "../../assets/tomato.png"
import TravelMemory from "../../assets/TravelMemory.png"


import "./Project.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({ markers: false });

const Project = () => {
  const [filter, setFilter] = useState("all");
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1, title: "Tomato Delivery App", image: tomato, category: "mern",
      link: "/landing-page.html",
      desc: "MERN stack food delivery app with real-time order tracking.",
      longDesc: "Tomato is a full-stack food delivery app built with MongoDB, Express, React, and Node.js. It features secure login, restaurant menus, cart management, and real-time order tracking, demonstrating my skills in building end-to-end MERN applications.",
      tech: ["fa-brands fa-react", "fa-brands fa-node-js", "fa-solid fa-database", "fa-solid fa-server"]
    },
    {
      id: 3, title: "Currency Converter", image: curr, category: "js",
      link: "https://currency-converter-omega-amber.vercel.app/",
      desc: "Convert currencies using real-time exchange rates.",
      longDesc: "This Currency Converter is a web application built with HTML, CSS, and JavaScript. It fetches real-time exchange rates from an external API and allows users to convert between different world currencies instantly.",
      tech: ["fa-brands fa-js", "fa-brands fa-html5", "fa-brands fa-css3-alt"]
    },
    {
      id: 2, title: "React Netflix Clone", image: nc, category: "react",
      link: "https://netflix-clone-fhdg.vercel.app",
      desc: "Netflix UI clone built with React and Firebase.",
      longDesc: "This Netflix clone is developed using ReactJS for the frontend, Firebase for authentication and database handling, and TMDB API.",
      tech: ["fa-brands fa-react", firebaseLogo]
    },
    {
      id: 6, title: "Stop Watch", image: stop, category: "js",
      link: "https://stop-watch-eight-amber.vercel.app/",
      desc: "A digital stopwatch with start/stop/reset features.",
      longDesc: "This Stopwatch app is developed using HTML, CSS, and JavaScript.",
      tech: ["fa-brands fa-js", "fa-brands fa-html5", "fa-brands fa-css3-alt"]
    },
    {
      id: 4, title: "Hotel Booking Clerk",
      image: hotel, category: "react",
      link: "https://hotel-booking-dusky-alpha.vercel.app/",
      desc: "Hotel booking system with React + Clerk auth.",
      longDesc: "React-based hotel booking web application integrated with Clerk.",
      tech: ["fa-brands fa-react", clerk]
    },
    {
      id: 7, title: "Travel Memory", image: TravelMemory, category: "php",
      link: "https://travel-memory-vert.vercel.app",
      desc: "Travel Memory is a full-stack web application that allows users to create and manage their travel experiences in a digital diary.",
      longDesc: "Travel Memory is a full-stack web application that allows users to create and manage their travel experiences in a digital diary. Users can add trips, upload photos, and store trip details such as location, dates, budget, transportation, and highlights. The application is built with a React frontend and a PHP REST API backend connected to MongoDB, and deployed using modern cloud platforms.",
      tech: ["fa-brands fa-react", "fa-brands fa-php", "fa-solid fa-database"]
    }

  ];

  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#para",
        start: "top 80%",
        end: "top 30%",
        scrub: 2
      }
    });

    gsap.from(".project-filters button", {
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-filters",
        start: "top 85%",
        end: "top 40%",
        scrub: 2
      }
    });

    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "top 30%",
        scrub: 2
      }
    });
  }, []);

  // Arrow controls
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.category === filter);

  return (
    <div id='projects'>
      <h1 id='para'>Projects</h1>

      <div className="project-filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "js" ? "active" : ""} onClick={() => setFilter("js")}>JavaScript</button>
        <button className={filter === "react" ? "active" : ""} onClick={() => setFilter("react")}>React</button>
        <button className={filter === "mern" ? "active" : ""} onClick={() => setFilter("mern")}>MERN</button>
        <button className={filter === "php" ? "active" : ""} onClick={() => setFilter("php")}>PHP</button>
      </div>


      {/* Slider with arrows */}
      <div className="slider-wrapper">
        <button className="slider-arrow left" onClick={scrollLeft}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="slider" ref={sliderRef}>
          {filteredProjects.map(p => (
            <div key={p.id} className="project-card">
              <div className="project-img-box">
                <img src={p.image} alt={p.title} className="project-img" />
              </div>

              <div className="project-info-box">
                <h3>{p.title}</h3>
                <p className="long-desc">{p.longDesc}</p>
              </div>

              <div className="overlay">
                <p>{p.desc}</p>
                <div className="icons">
                  {p.tech.map((icon, i) =>
                    typeof icon === "string" ? (
                      <i key={i} className={icon}></i>
                    ) : (
                      <img key={i} src={icon} alt="tech-icon" className="custom-icon" />
                    )
                  )}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="live-btn">
                  Live <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right" onClick={scrollRight}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Project
