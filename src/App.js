import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Body />
        <Timer />
      </div>
    );
  }
}

export default App;
