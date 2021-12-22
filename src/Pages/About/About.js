import React from "react";
import "./About.css";
import review from "../../Assets/images/review.jpg";

function About() {
  return (
    <div className="about">
    <img src={review} alt="Person reviewing code" className="about__img" />
      <div className="about__text">
        <h1>About Us</h1>
        <p className="display-6">
          CodeReviewShop is a place where you can find the best code review
          services. We have a variety of services to choose from.
        </p>
      </div>
    </div>
  );
}

export default About;
