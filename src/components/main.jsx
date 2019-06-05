import React, { Component } from "react";
import { Navbar } from "./index";
import "../styles/main.scss";

class Main extends Component {
  render() {
    return (
      <div className={"container"}>
        <Navbar />
      </div>
    );
  }
}

export default Main;
