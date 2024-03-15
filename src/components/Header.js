import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const handleMarkerClick = () => {};
  const handlePhoneClick = () => {};
  const handleEMailClick = () => {};

  return (
    <header className="row mt-4 justify-content-center align-items-center pb-3 pt-3">
      <div className="col-sm-auto col-md-auto col-lg-3 text-center mb-lg-0">
        <h1 className="logo bg-secondary p-3 rounded-1 overflow-hidden">
          <span className="regular text-sm">thies</span>
          <span className="bold">hansen</span>
          <span className="normal">.de</span>
        </h1>
      </div>
      <div className="col-lg-8 col-sm-12 col-md-8 text-right m-3">
        <div className="header-icons p-1">
          <div className="row m-auto align-items-center">
            <div
              className="col-sm-6 col-md-6 col-lg-3"
              onClick={handleMarkerClick}
            >
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="icon me-2"
                  size="2x"
                />
                <span className="text">Voßbarg 10, 23689 Pansdorf</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-2">
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon me-2"
                  size="2x"
                />
                <span className="text">+49 4504 606860</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-2">
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faMobile}
                  className="icon me-2"
                  size="2x"
                />
                <span className="text">+49 172 1700648</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-2">
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon me-2"
                  size="2x"
                />
                <span className="text">email@thieshansen.de</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
