import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import DataContextProvider from "./context";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

ReactDOM.render(
  <DataContextProvider>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </StylesProvider>
  </DataContextProvider>,
  document.getElementById("root")
);
