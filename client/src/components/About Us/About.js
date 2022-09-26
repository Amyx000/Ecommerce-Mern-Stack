import React from "react";
import "./About.css";
import {GrTwitter} from "react-icons/gr"

function About() {
  return (
    <div className="about-main">
      <div className="about-head">About Us</div>
      <div>
        This is the full-stack E-commerce prject, created by Arman Kazi. It consist of complete functionality from frontend to backend.
         The frontend is implemented by using React.js the CSS part is done without any frameworks, backend with Node.js and Express.js and for database MongoDB is used with Mongoose library. 
         This project is created for learning purpose only.
      </div>
      <div>Feel free to connect with me</div>
      <a href="https://twitter.com/Armankazi111" target="_blank" rel="noreferrer"><GrTwitter className="about-icon"/></a>
    </div>
  );
}

export default About;
