import React from "react";
import "./Services.css";
import code from "../../Assets/images/services.jpg";

function Services() {
  return (
    <div className="services">
      <img src={code} alt="Code on the screen" className="services__img" />
      <div className="services__text">
        <h1>Services Page</h1>
        <p className="display-6">List of services will be here.</p>
      </div>
    </div>
  );
}

export default Services;
