import React, { useEffect, useState } from "react";
import "./Background.css";

const Background = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 10), // keep only last 10 dots
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="animated-bg">
      {/* Floating blobs - removed left blob */}
      <div className="blob"></div>
      <div className="blob"></div>
      {/* <div className="blob"></div> */}
      

      {/* Falling particles */}
      {/* {Array.from({ length: 20 }).map((_, i) => (
        <span key={i}></span>
      ))} */}

      {/* Cursor trail */}
      {/* {trail.map((dot) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{ left: dot.x, top: dot.y }}
        ></div>
      ))} */}

      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>
    </div>
  );
};

export default Background;
