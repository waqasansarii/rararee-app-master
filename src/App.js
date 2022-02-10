import "./App.css";
import React from "react";
import Routes from "./Routes/Routes";

function App() {
  return (
    <React.Fragment>
      <div className="myApp">
        <Routes />
      </div>
      <div class="copyright_area">
        <div class="cs_container">
          <div class="copyright_text">
            <p>
              Copyright ©{new Date().getFullYear()}, All Right Reserved
              <a
                class="a-white"
                href="https://www.smashcode.dev"
                target="_blank"
                rel="noreferrer"
              >
                Smash-Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
