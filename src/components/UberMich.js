import React from "react";
import "./UberMich.css";

export default function UberMich() {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5 bg-dark text-light rounded">
      <div className="row">
        <div className="uberMichHeadingDiv col-12">
          <h2 className="uMichH2 text-center text-lg-center mb-5 fs-1 customUmichColor">
            Thies Hansen
          </h2>
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center display-6">
          <div className="textDivUberMich">
            <p className="uberMichP mx-3 mb-5 fs-5">
              Meine berufliche Karriere begann ich in Müllverbrennungsanlagen.
              Der Anlagenbau wurde zu meinem Fachgebiet. <br></br>
              <br></br>Gestandene Ingenieure „vom alten Schlag“ gaben ihr
              Know-how an mich weiter und anspruchsvolle Projekte formten mich
              zum competence center Fernwärme einer bundesweit tätigen
              Ingenieurgesellschaft.<br></br>
              <br></br>2000 gründete ich das Ingenieurbüro für Energie- und
              Anlagentechnik und bin seitdem für Kunden in Deutschland und im
              europäischen Ausland tätig.<br></br>
              <br></br> In meiner Zeit als Angestellter und als Selbständiger
              habe ich beide Seiten – die Theorie und die Praxis – intensiv
              kennengelernt.<br></br>
              <br></br> Sehr gern bin ich von Anfang bis Ende und vor allem „vor
              Ort“ dabei.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/thies-hansen-2caf6b50.webp"}
            alt="Thies Hansen"
            className="rounded-circle img-fluid"
            style={{ maxWidth: "65%" }}
          />
        </div>
      </div>
    </div>
  );
}
