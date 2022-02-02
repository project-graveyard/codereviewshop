import React from "react";
import "./Comm.css";
import commImg from "../../Assets/images/community.jpeg";

function Comm() {
  return (
    <div>
      <img src={commImg} className="comm__img" alt="banner" />
      <div className="container">
      <div className="text-center p-3 pb-md-4 mx-auto">
        <h1 className="display-4 fw-normal">
          Join Our Community: Coding To Learn
        </h1>
        <p className="fs-3 display-5 text-muted">
          Join our community and get access to our exclusive content. Connect
          with like-minded people and share ideas and solutions to problems.
        </p>
      </div>
      <h3>
        To create a free account in the Coding To Learn Community slack, please
        the follwing link:
      </h3>
      <a
        href="https://join.slack.com/t/coding-to-learn/shared_invite/zt-11byuj7zn-k7zS7d5X67sw3JlndzU99Q"
        target="_blank"
        rel="noreferrer"
      >
        <h5 className="comm__link">Join us in the Coding To Learn Community</h5>
      </a>
      <br />
      <h3>
        Already have a Coding To Learn Slack account? Log in with the following
        link:
      </h3>
      <a
        href="https://coding-to-learn.slack.com/"
        target="_blank"
        rel="noreferrer"
      >
        <h5 className="comm__link">Log in to Coding To Learn Slack</h5>
      </a>
    </div>
    </div>
  );
}

export default Comm;
