import React from "react";
import "./style.css";
import Card from "../Card/Card";
import { appDev, web, UI, design } from "../../Assets";

const Services = () => {
  return (
    <div id="services">
      <div className="title">
        <h1>Services</h1>
      </div>
      <div className="Container container">
        <Card icon={appDev} title="App Development" />
        <Card icon={web} title="Web Development" />
        <Card icon={UI} title="Ui/Ux Design" />
        <Card icon={design} title="Graphic Design" />
      </div>
    </div>
  );
};

export default Services;
