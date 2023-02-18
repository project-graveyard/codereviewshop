import React from "react";
import "./Services.css";

const service_list = [
  {
    title: "15-Minute Session",
    link: "https://cal.com/codereviewshop/15min",
  },
  {
    title: "30-Minute Session",
    link: "https://cal.com/codereviewshop/30min",
  },
  {
    title: "45-Minute Session",
    link: "https://cal.com/codereviewshop/45min",
  },
];

function Services() {
  return (
    <div className="container">
      <div className="text-center p-3 pb-md-4 mx-auto">
        <h1 className="display-4 fw-normal">Book a session with us today</h1>
        <p className="fs-5 text-muted">
          Choose a timeline that works best for you
        </p>
      </div>

      <div className="row row-cols-md-3 mb-2 text-center">
        {service_list.map((service, index) => (
          <div className="col services__content">
            <div className="card mb-4 rounded-3 shadow-sm border-primary h-100">
              <div className="card-header py-3 bg-primary text-white border-primary">
                <h4 className="my-0 fw-normal">{service.title}</h4>
              </div>
              <div className="card-body">
                <a
                  href={service.link}
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
    </div>
  );
}

export default Services;
