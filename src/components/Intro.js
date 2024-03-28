import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="container mb-5 pb-5 pt-sm-5 ml-1 mr-1">
      <div className="row">
        <div className="introH1Div col-sm-12 col-lg-6 mb-md-0 order-md-1 d-flex align-items-center">
          <h1 className="textIntro text-md-end text-center display-1 p-4">
            Ingenieurbüro für Energie- und Anlagentechnik
          </h1>
        </div>
        <div className="introPhotoDiv col-sm-12 col-lg-6 order-md-2">
          <img
            src={process.env.PUBLIC_URL + "/leistungen-2-0a7ff36d.webp"}
            alt="energy production machines"
            className="img-fluid h-100 w-100"
          />
        </div>
      </div>
    </div>
  );
}
