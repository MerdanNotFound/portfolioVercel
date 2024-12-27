import React from "react";
import cv from "../cv.pdf";
import "./Content.css";

function Content(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Shahymerdan Jumamyradov</h1>
        <p>
          Passionate Frontend DEV, <br />
          Click to DOWNLOAD CV button for more info.
        </p>
      </div>
      <div className="button-wrapper">
        <a href="https://github.com/merdannotfound">
          <button className="btn outline">GIT Hub</button>
        </a>
        <a href={cv} color="transparent" download={cv} target="_blank">
          <button className="btn fill">DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  );
}

export default Content;
