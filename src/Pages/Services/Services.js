import React from "react";
import "./Services.css";

const service_list = [
  {
    title: "Code review & feedback",
    price: "Free",
  },

  {
    title: "Code walkthrough & assistance",
    price: "GHS 30",
  },
];

function Services() {
  return (
    <div className="container">
      <div className="text-center p-3 pb-md-4 mx-auto">
        <h1 className="display-4 fw-normal">Services & Pricing</h1>
        <p className="fs-5 text-muted">
          Choose a service and a plan that works best for you
        </p>
      </div>

      <div className="row row-cols-md-2 mb-2 text-center">
        {service_list.map((service, index) => (
          <div className="col services__content">
            <div className="card mb-4 rounded-3 shadow-sm border-primary h-100">
              <div className="card-header py-3 bg-primary text-white border-primary">
                <h4 className="my-0 fw-normal">{service.title}</h4>
              </div>
              <div className="card-body">
                <h3 className="card-title pricing-card-title h3">
                  {service.price}
                  <small className="text-muted fw-light">/sess</small>
                </h3>
                <a
                  href="https://calendly.com/codereviewshop/book"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary text-white"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="service__msg alert alert-secondary" role="alert">
        <h4 className="alert-heading">Note:</h4>
        <hr />
        <ul>
          <li>
            Payment options: <b>mobile money</b> or <b>cash</b>.
          </li>
          <li>Payments should be made before a booked session is due.</li>
          <li>
            In the unlikely case where your problems are not solved, your money
            will be refunded.
          </li>
          <li>
            For one-on-one tutoring sessions, send us an email:
            codereviewshop@gmail.com
          </li>
        </ul>
      </div>

      {/* <div className="alert alert-secondary" role="alert">
        <h4 className="alert-heading">Charges Spectrum</h4><hr />
        <table cellPadding={5}>
          <tr>
            <td>Minutes</td><td>Cost</td>
          </tr>
          <tr>
            <td>20</td><td>GHS 10</td>
          </tr>
          <tr>
            <td>30</td><td>GHS 15</td>
          </tr>
          <tr>
            <td>40</td><td>GHS 20</td>
          </tr>
        </table>
      </div> */}
    </div>
  );
}

export default Services;
