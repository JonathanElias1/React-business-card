import React from "react";
import devJon from "../images/devjon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Info() {
  function linkedinClick() {
    window.open("https://www.linkedin.com/in/jonathanelias1/", "_blank");
  }

  function emailClick() {
    window.open("mailto:jon-e-worldwide@jon-e.org", "_blank");
  }

  return (
    <div className="Info">
      <div className="info--container">
        {/* //image with container    */}
        <div className="info--imagecontainer">
          <img src={devJon} className="dev-jon" />
        </div>

        {/* info */}
        <div className="infoText">
          <h1 className="info--title">Jonathan Elias</h1>
          <h2 className="info--job">Frontend Developer</h2>
          <h3 className="info--site"> Jon-E.org</h3>{" "}
        </div>
        {/* Buttons */}
        <div className="buttons">
          {/* Email */}
          <button className="emailButton" onClick={emailClick}>
            &nbsp;&nbsp;Email&nbsp;&nbsp;
            <FontAwesomeIcon icon={faEnvelope}> </FontAwesomeIcon>
          </button>

          {/* Linkedin */}

          <button className="linkedInButton" onClick={linkedinClick}>
            &nbsp;&nbsp;Linkedin&nbsp;&nbsp;
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
