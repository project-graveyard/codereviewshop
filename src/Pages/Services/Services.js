import React from "react";
import "./Services.css";

const service_list = [
  {
    title: "Code review & feedback",
    price: "Free",
  },
  {
    title: "One-on-one tutoring",
    price: "25",
  },
  {
    title: "Code walkthrough & assistance",
    price: "25",
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
        <div className="row row-cols-2 row-cols-md-4 mb-2 text-center">
          {service_list.map((service, index) => (
            <div className="col services__content">
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
          <li>All prices are in cedis.</li>
          <li>Payment options include: <b>mobile money</b> & <b>in-person payment.</b></li>
          <li>Prices listed on this page are for the 1st hour. Consequent hours are at a rate of ₵20 <span className="text-muted">/hr</span>.</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;