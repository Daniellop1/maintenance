import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This web is under maintenance</p>
          <div className="App-links">
            <a
              className="App-link"
              href="https://bio.2005danielus.ml"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Bio.2005danielus.ml
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/stormkit-dev/sample-project"
              target="_blank"
              rel="noopener noreferrer"
              className="App-link"
            >
              Twitter Updates
            </a>{" "}
          </div>
        </div>
        <div className="App-social">
          <a
            href="https://twitter.com/2005_danielus"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
