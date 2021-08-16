import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "Styles/Theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <ThemeProvider theme={{ ...Theme }}>
        <App />
      </ThemeProvider>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
