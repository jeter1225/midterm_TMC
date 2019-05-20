import React, { Component } from "react";
import "../styles.css";
import { BrowserRouter } from "react-router-dom";
import Site from "./site";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Site />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
