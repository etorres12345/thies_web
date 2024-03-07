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
    <header className="row mt-4 justify-content-center align-items-center">
      <div className="col-3">
        <h1 className="logo">
          <span className="regular">thies</span>
          <span className="bold">hansen</span>
          <span className="normal">.de</span>
        </h1>
      </div>
      <div className="col-8 text-right">
        <div className="header-icons">
          <div className="row">
            <div className="col-sm-3" onClick={handleMarkerClick}>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <span className="text">Voßbarg 10</span>
                <span className="text"> 23689 Pansdorf</span>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span className="text">+49 4504 606860</span>
                {/* <FontAwesomeIcon icon={faMobile} className="icon" />
                <span className="text">+49 172 1700648</span> */}
              </div>
            </div>

            <div className="col-sm-3">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faMobile} className="icon" />
                <span className="text">+49 172 1700648</span>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
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
