import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import styles from "./Leistungen.module.css";

export default function Leistungen() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div className="container">
      <h2 className=" col-12 text-center display-2">Leistungen</h2>
      <div className="row">
        <div className="col-md-6 col-xs-12 text-center m-auto align-items-center">
          <p
            className={`my-5 display-6 text-end high-blue ${styles["high-blue"]}`}
          >
            Das Ingenieurbüro für <strong>Energie- und Anlagentechnik</strong>{" "}
            ist auf <strong>Wärmeversorgung</strong> <em>spezialisiert.</em>
          </p>
          <p className={`mb-4 display-6 ${styles["high-blue"]}`}>
            Zwischen <strong>2 und 200 MW</strong> fühlen wir uns{" "}
            <strong>
              <em>wohl.</em>
            </strong>
          </p>
          <p className={`fs-3 ${styles["high-blue"]}`}>
            <strong>"Wir"</strong> schließt dabei die Fachleute ein, die mich in
            der Konstruktions-, Zeichen- und Detailarbeit als Subunternehmer
            oder Freiberufler unterstützen und denen ich an dieser Stelle für
            ihren unermüdlichen Einsatz danke.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 my-auto">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div
              className="carousel-inner rounded-3"
              style={{ height: "500px" }}
            >
              <div className="carousel-item active">
                <img
                  src={process.env.PUBLIC_URL + "/willkommen-2-06b20e9c.webp"}
                  className="d-block w-100"
                  alt="pipeline in Bamberg"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + "/leistungen-2-0a7ff36d.webp"}
                  className="d-block w-100"
                  alt="second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + "/leistungen-3-af2a0f95.webp"}
                  className="d-block w-100"
                  alt="idk"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className={`col-12 fs-4 my-5 pt-3 ${styles["background-div"]}`}>
          <p className={`my-5 py-4 ${styles["high-blue"]}`} data-aos="fade-up">
            Wir konzeptionieren, dimensionieren und konstruieren Anlagen zur
            Wärmeerzeugung, zur Wärmeverteilung und zur Wärmenutzung.
          </p>
          <p className={`my-5 py-4 ${styles["high-blue"]}`} data-aos="zoom-in">
            Mit allem, was dazu gehört: Dampfumformer, Kessel, BHKW,
            Wärmetauscher, Pumpen, Druckhaltungen, Rohrleitungen und Armaturen,
            Speicher, unter- und oberirdische Pipelines. Wir übernehmen
            sämtliche Planungsleistungen einschließlich der örtlichen
            Bauüberwachung.
          </p>
          <p className={`my-5 py-4 ${styles["high-blue"]}`} data-aos="fade-up">
            Im erdverlegten Rohrleitungsbau schließt dies den Tiefbau
            (Rohrgräben, Schachtbauwerke, Rohrvortrieb) ein.{" "}
          </p>
          <p
            className={`my-5 py-4 ${styles["high-blue"]}`}
            data-aos="slide-right"
          >
            Wir kümmern uns um jedes Detail der technischen Ausrüstung und gern
            auch um komplexe Genehmigungsverfahren (BImSchG) oder den
            Emissionshandel (EU-ETS).{" "}
          </p>
          <p className={`my-5 py-4 ${styles["high-blue"]}`} data-aos="fade-up">
            Unser Controlling stellt nicht nur fest, dass Termine oder Budgets
            überschritten werden. Wir ergreifen die Initiative – während des
            Designs und während der Ausführung.
          </p>
          <p
            className={`my-5 py-4 ${styles["high-blue"]}`}
            data-aos="flip-right"
          >
            Interdisziplinäres Denken mit einem Gespür für die Wünsche und
            Zwänge der Projektpartner führt uns zu anerkannten und nachhaltigen
            Lösungen. Unsere Hilfsmittel halten wir auf der Höhe der Zeit.
          </p>
          <p className={`my-5 py-4 ${styles["high-blue"]}`} data-aos="fade-up">
            Gewerke, die wir selbst nicht anbieten können (Hochbau, EMSR),
            übergeben wir an vertraute Partner, mit denen uns langjährige und
            verlässliche Kooperationen verbinden.
          </p>
        </div>
      </div>
    </div>
  );
}
