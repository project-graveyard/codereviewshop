import React from "react";
import "./Services.css";

const service_list = [
  {
    title: "Code review & feedback",
    price: "Free",
    currency: "",
  },
  {
    title: "One-on-one tutoring",
    price: "25",
    currency: "GH₵",
  },
  {
    title: "Code walkthrough & assistance",
    price: "25",
    currency: "GH₵",
  },
  {
    title: "IT support & consultation",
    price: "*",
    currency: "GH₵",
  },
];

function Services() {
  return (
    <div className="container">

      <div className="text-center p-3 pb-md-4 mx-auto">
        <h1 className="display-4 fw-normal">Services & Pricing</h1>
        <p className="fs-5 text-muted">Choose a service and a plan that works best for you</p>
      </div>

      <div className="services__data">
        <div className="row row-cols-2 row-cols-md-4 mb-2 text-center">
          {service_list.map((service, index) => (
            <div className="col services__content">
              <div className="card mb-4 rounded-3 shadow-sm border-primary h-100">
                <div className="card-header py-3 bg-primary text-white border-primary">
                  <h4 className="my-0 fw-normal">{service.title}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title h1">
                    <small className="text-muted fw-dark" style={{ "font-size": "15px" }}>{service.currency}</small>
                    {service.price}
                  </h1>
                  <a href='https://calendly.com/codereviewshop/book' className="btn btn-primary text-white">
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="service__msg alert alert-secondary" role="alert">
        <h4 className="alert-heading">Note:</h4><hr />
        <ul>
          <li>Payment option: <b>mobile money</b></li>
          <li>Prices are per session.</li>
          <li>Each session is a 45-minute online call.</li>
          <li>Payments should be made before a booked session is due.</li>
          <li>In the likely case where your problems are not solved, your money will be refunded.</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
