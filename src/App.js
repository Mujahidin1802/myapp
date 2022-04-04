import React, { Component } from "react";
import Routers from "./routers";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <Routers />
        </div>
      </div>
    );
  }
}
