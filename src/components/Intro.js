import React from "react";

export default function Intro() {
  return (
    <div className="container mt-5 mb-5 pb-5 pt-5 ml-1 mr-1">
      <div className="row">
        <div className="introH1Div col-md-6 col-sm-12 mb-4 mb-md-0 order-md-2 d-flex align-items-center">
          <h1 className="textIntro text-end display-1 p-4">
            Ingenieurbüro für Energie- und Anlagentechnik
          </h1>
        </div>
        <div className="introPhotoDiv col-md-6 col-sm-12 order-md-1">
          <img
            src={process.env.PUBLIC_URL + "/leistungen-2-0a7ff36d.webp"}
            alt="image of energy production machines"
            className="img-fluid h-100 w-100"
          />
        </div>
      </div>
    </div>
  );
}
