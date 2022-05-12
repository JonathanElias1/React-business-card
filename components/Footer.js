import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  function githubClick() {
    window.open("https://github.com/JonathanElias1", "_blank");
  }

  function twitterClick() {
    window.open("https://twitter.com/JonEWorldwide", "_blank");
  }

  return (
    <div className="footer">
      <div>
        <button onClick={githubClick}>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </button>
      </div>

      <div>
        <button onClick={twitterClick}>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default Footer;
