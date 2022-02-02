import React from "react";
import "./Home.css";
import homeImg from "../../Assets/images/homeImg.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img src={homeImg} alt="People reviewing code" className="home__img" />
      <div className="home__text">
        <h1>Welcome To CodeReviewShop</h1>
        <p className="display-6">
          CodeReviewShop is a place where you can find the best code review
          services. We have a variety of services to choose from.
        </p>
        <Link to="/services" className="container">
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
