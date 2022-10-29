import React from "react";
import "./Services.css";

const service_list = [
  {
    title: "Code review & feedback",
    price: "Free",
    details: "Details",
  },
  {
    title: "One-on-one tutoring",
    price: "20",
  },
  {
    title: "Code walkthrough & assistance",
    price: "20",
  },
  {
    title: "IT support & consultation",
    price: "*",
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
        <div className="row row-cols-1 row-cols-md-4 mb-3 text-center">
          {service_list.map((service, index) => (
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary h-100">
                <div className="card-header py-3 bg-primary text-white border-primary">
                  <h4 className="my-0 fw-normal">{service.title}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    {service.price}
                    <small className="text-muted fw-light">/hr</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{service.details}</li>
                  </ul>
                  <a href='https://calendly.com/codereviewshop/book' className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
