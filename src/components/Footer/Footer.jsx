import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-brand">
            <p>Full Stack Developer | MERN | Java</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:yourmail@example.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p>© {new Date().getFullYear()} Shreya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
