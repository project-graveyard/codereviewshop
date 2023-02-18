import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__text">
          <h1>Welcome To CodeReviewShop</h1>
          <p className="display-6 home__text">
            CodeReviewShop is my medium of giving back to the community. My aim
            is to help students grow with a solid foundation of the concepts and
            tools we use in the industry. Book a slot and let's solve problems
            together.
          </p>
          <Link to="/services" className="container">
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
