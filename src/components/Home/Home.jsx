import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

// single image import
import main from "../../assets/main.png"; // replace with your image

const Home = () => {
  useGSAP(() => {
    gsap.from(".righthome", { x: 200, duration: 1, opacity: 0 });
  }, []);

  return (
    <div id="home">
      {/* Left Section */}
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">Hi, I'm</div>
          <div className="line2">Shreya Mhaisne</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                'Web Developer', 1000,
                'Software Developer', 1000,
                'MERN Stack', 1000,
                'Frontend Developer', 1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <a href="/cv.pdf" download="My_CV.pdf">
            <button className="download-btn">Download CV</button>
          </a>
          <a href="#projects">
            <button className="para">View Projects</button>
          </a>
        </div>
      </div>

      {/* Right Section with a single image */}
      <div className="righthome">
        <img src={main} alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default Home;
