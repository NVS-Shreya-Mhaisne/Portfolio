import React from 'react';
import con from "../../assets/contact3.png";
import "./Contact.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  useGSAP(() => {
    // Left image: slide from left, then spin - immediate animation
    gsap.fromTo(".leftcontact img",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          document.querySelector(".leftcontact img")
            .classList.add("earth-spin");
        }
      }
    );

    // Right contact: slide in from right - immediate animation
    gsap.from(".rightcontact", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.4
    });
  }, []);

  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={con} alt="Contact" />
      </div>
      <div className="rightcontact">
        <h2>Contact Me</h2>
        <p>Have a project or just want to say hi? Send me a message!</p>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/mrblokjl" method='post' className="contact-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder='Name' name='username' required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder='Email' name='email' required />
          </div>
          <div className="input-group">
            <FaCommentDots className="input-icon" />
            <textarea name="message" placeholder='Message' required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
