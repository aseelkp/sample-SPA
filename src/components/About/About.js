import React from "react";
import aboutUs from "../../Assets/aboutUs.png";
import "./style.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div className="Container container">
        <div className="img">
          <img src={aboutUs} alt="aboutUs" />
        </div>
        <div className="content">
          <p>
            At Baytech, we are passionate about technology. Our clients come to
            us seeking customized, skillfully crafted business applications. Our
            longevity is due to the skill and efficiency of our team of senior
            software engineers, project managers, and devops staff. <br /> <br /> We
            specialize in enterprise business applications that optimize
            business processes and handle large amounts of data and traffic. We
            only produce modern software with a focus on quality, usability, and
            scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
