import React from 'react';
import './About.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".about-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-header",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 40%",
      }
    });

    gsap.from(".about-icons a", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".about-icons",
        scroller: "body",
        scrub: 2,
        start: "top 85%",
        end: "top 50%",
      }
    });

    gsap.from(".about-description", {
      y: 80,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-description",
        scroller: "body",
        scrub: 2,
        start: "top 85%",
        end: "top 50%",
      }
    });
  }, []);

  return (
    <div id="about">
      <div className="about-header">
        <h1 className="about-name">Shreya Mhaisne</h1>
        <div className="about-icons">
          <a href="https://www.linkedin.com/in/shreya-mhaisne-52928333a/" target="_blank" rel="noreferrer"><FaLinkedin /></a> 
          <a href="https://github.com/ShreyaMhaisne" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
      <div className="about-description">
        <p>
I’m a Java Full Stack Developer, Frontend Developer, and MERN Stack Developer passionate about building responsive and scalable web apps. Skilled in Java, Spring Boot, React, Node.js, Express, and MongoDB, I enjoy creating clean, efficient solutions across both frontend and backend.
<br/><br/>
Highlights:
<br/>
 Built 5+ projects (Netflix Clone, Currency Converter, Stopwatch, etc.) <br/>

 Skilled in Java Full Stack + MERN Stack + modern frontend tools (React, Tailwind, Next.js)<br/>

 Strong problem-solving mindset & quick learner<br/>
        </p>
        {/* <p>
          My journey as a developer has been driven by curiosity, persistence, and a desire to create meaningful digital experiences.
          Whether it’s building a full-stack application, optimizing performance, or exploring new frameworks, I thrive on challenges
          that push my creativity and technical skills to the next level.
        </p> */}
      </div>
    </div>
  );
};

export default About;
