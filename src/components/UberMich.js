import React from "react";

export default function UberMich() {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5 bg-dark text-light rounded">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-center align-items-center text-start display-6">
          <div className="text-container-uber-mich">
            <h2>Thies Hansen</h2>
            <p>
              I was born an engineer. They presented me with my degree shortly
              after birth. I work out of my nuclear bunker in Pansdorf. I like
              to be on the jobsite getting my hands dirty. I only use Makita
              Tools.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/thies-hansen-2caf6b50.webp"}
            alt="Thies Hansen"
            className="rounded-circle"
          />
        </div>
      </div>
    </div>
  );
}
