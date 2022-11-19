import React from "react";
import "./About.css";


function About() {
  return (
    <div className="about">
      <div className="about__content">
        <h2 className="display-4 fw-normal p-2">What We Do</h2>
        <p className="about__text">
          We review code for school projects and provide feedback for improvements.
        </p>
        <p className="about__text">
          We also provide one-on-one tutoring on core programming concepts.
        </p>
        <p className="about__text">
          We give line by line code explanation and assistance. We do this by guiding your thought process and breaking down complex problems into smaller ones.
        </p>
        <p className="about__text">
          CodeReviewShop is available for consultations on which technologies to use for your projects.
        </p>
        <p className="about__text">
          Additionally, we provide assistance for setting up your device for programming.
        </p>
        <h2 className="display-4 fw-normal p-2">What We Don't Do</h2>
        <p className="about__text">
          We do not do assignments for students.
        </p>
        <p className="about__text">
          We do not provide assistance for the development of any malicious code.
        </p>
      </div>
    </div>
  );
}

export default About;