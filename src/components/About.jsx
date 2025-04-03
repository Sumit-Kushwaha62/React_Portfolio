import React from "react";
import aboutData from "./data/about.json";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="text">About Me</h2>
      <p className="text1">
        {aboutData.map((item, index) => (
          <span key={index}>{item.description} </span>
        ))}
      </p>
    </div>
  );
};

export default About;
