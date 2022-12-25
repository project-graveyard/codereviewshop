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
          CodeReviewShop is a place where you can find the best code review
          services. We have a variety of services to choose from.
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
