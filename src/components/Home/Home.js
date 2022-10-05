import "./style.css";
import React from "react";
import hero from "../../Assets/tech.png";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="img">
        <img src={hero} alt="hero" />
      </div>
      <div className="content">
        <h1>
          Welcome to <br /> Tech World
        </h1>
        <h4>
          We help our partners accelerate disruption both within their
          organizations and industries. They strategize new ideas and obtain
          real business value by getting the most out of our production-ready
          custom software development services. Talk to our experts today!
        </h4>
        <a href="#services">
          <button className="btn">Services</button>
        </a>
      </div>
    </div>
  );
};
export default Home;
