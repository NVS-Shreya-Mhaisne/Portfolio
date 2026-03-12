import React from "react";
import "./Education.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
useGSAP(() => {
    gsap.from(".education-card:nth-child(1)", {
      x: 150, // from right
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".education-card:nth-child(1)",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      },
    });

    gsap.from(".education-card:nth-child(2)", {
      y: 120, // from bottom
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".education-card:nth-child(2)",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      },
    });

    gsap.from(".education-card:nth-child(3)", {
      x: -150, // from left
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".education-card:nth-child(3)",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      },
    });
  }, []);
  const educationData = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "Modern College Arts, Commerce & Science",
      year: "2022 - 2025",
      grade: "CGPA: 8",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science (PCMB)",
      school: "Mahalsakant College, Pune",
      year: "2020 - 2022",
      grade: "Percentage: 62%",
    },
    {
      degree: "Secondary (10th)",
      field: "General Education",
      school: "CES Abhiman English Medium School, Pune",
      year: "2019 - 2020",
      grade: "Percentage: 74%",
    },
  ];

  return (
    <div id="education">
      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="degree">{edu.degree}</h3>
              <p className="field">{edu.field}</p>
              <p className="school">{edu.school}</p>
              <p className="year">{edu.year}</p>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
