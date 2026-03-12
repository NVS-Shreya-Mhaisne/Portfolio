import React from "react";
import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import PNG images
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/js.png";
import reactLogo from "../../assets/react.png";
import angularLogo from "../../assets/angular.png";
import nextLogo from "../../assets/nextjs.png";
import tailwindLogo from "../../assets/tailwind.png";
// import gsapLogo from "../../assets/gsap.png";
import bootstrapLogo from "../../assets/bootstrap.png";

import nodeLogo from "../../assets/node.png";
import expressLogo from "../../assets/express.png";
import mysqlLogo from "../../assets/mysql.png";
import mongodbLogo from "../../assets/monnodb.png";
// import firebaseLogo from "../../assets/firebase.png";
import postgresLogo from "../../assets/postgress.png";

import cLogo from "../../assets/c.png";
import cppLogo from "../../assets/cpp.png";
import javaLogo from "../../assets/java.png";
import pythonLogo from "../../assets/python.png";

import gitLogo from "../../assets/git.png";
import githubLogo from "../../assets/github.png";
import postmanLogo from "../../assets/postman.png";
import vercelLogo from "../../assets/vercel.png";
import netlifyLogo from "../../assets/netlify.png";
import figmaLogo from "../../assets/figma.png";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.from(".skill-card", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".skills-grid",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".skill", {
      scale: 0.5,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skills-grid",
        scroller: "body",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div id="Skills" className="skills-section">
      <h2>SKILLS</h2>
      <p>
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-items">
            <div className="skill"><img src={htmlLogo} alt="HTML" /> HTML</div>
            <div className="skill"><img src={cssLogo} alt="CSS" /> CSS</div>
            <div className="skill"><img src={jsLogo} alt="JavaScript" /> JavaScript</div>
            <div className="skill"><img src={reactLogo} alt="React" /> React JS</div>
            <div className="skill"><img src={angularLogo} alt="Angular" /> Angular</div>
            <div className="skill"><img src={nextLogo} alt="Next JS" /> Next JS</div>
            <div className="skill"><img src={tailwindLogo} alt="Tailwind" /> Tailwind</div>
            {/* <div className="skill"><img src={gsapLogo} alt="GSAP" /> GSAP</div> */}
            <div className="skill"><img src={bootstrapLogo} alt="Bootstrap" /> Bootstrap</div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-items">
            <div className="skill"><img src={nodeLogo} alt="Node.js" /> Node JS</div>
            <div className="skill"><img src={expressLogo} alt="Express" /> Express</div>
            <div className="skill"><img src={mysqlLogo} alt="MySQL" /> MySQL</div>
            <div className="skill"><img src={mongodbLogo} alt="MongoDB" /> MongoDB</div>
            {/* <div className="skill"><img src={firebaseLogo} alt="Firebase" /> Firebase</div> */}
            <div className="skill"><img src={postgresLogo} alt="PostgreSQL" /> PostgreSQL</div>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill-items">
            <div className="skill"><img src={cLogo} alt="C" /> C</div>
            <div className="skill"><img src={cppLogo} alt="C++" /> C++</div>
            <div className="skill"><img src={javaLogo} alt="Java" /> Java</div>
            <div className="skill"><img src={pythonLogo} alt="Python" /> Python</div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-items">
            <div className="skill"><img src={gitLogo} alt="Git" /> Git</div>
            <div className="skill"><img src={githubLogo} alt="GitHub" /> GitHub</div>
            <div className="skill"><img src={postmanLogo} alt="Postman" /> Postman</div>
            <div className="skill"><img src={vercelLogo} alt="Vercel" /> Vercel</div>
            <div className="skill"><img src={netlifyLogo} alt="Netlify" /> Netlify</div>
            <div className="skill"><img src={figmaLogo} alt="Figma" /> Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
