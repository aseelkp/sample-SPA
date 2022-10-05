import React from "react";
import "./style.css";


function Card({ icon, title }) {
  return (
    <div className="service-grid">
      <div className="service-grid-icon">
        <img src={icon} alt="Icon" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
