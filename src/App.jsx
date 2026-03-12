import React from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Background from "./components/Background/Background";
import Nav from "./components/Nav/Nav";
import Education from "./components/Education/Education"
import Project from "./components/Project/Project"
import Contact from "./components/Contact/Contact"
// import Footer from "./components/Footer/Footer";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="relative">
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="fixed top-0 left-0 w-full h-full -z-10"
         options={{
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      push: { quantity: 2 },
      repulse: { distance: 120, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ebaf0bff" },
    links: {
      color: "#68e013ff",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      outModes: { default: "bounce" },
    },
    number: {
      density: { enable: true, area: 900 },
      value: 50,
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } },
  },
  detectRetina: true,
}}

        />
      )}

      {/* Your Components */}
      <Background/>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
