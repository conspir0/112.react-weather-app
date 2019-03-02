import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  state = {
    value: "",
    date: "",
    temp: "",
    minTemp: "",
    maxTemp: "",
    wind: "",
    err: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    console.log("ok");
  };

  render() {
    return (
      <div>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
      </div>
    );
  }
}

export default App;
