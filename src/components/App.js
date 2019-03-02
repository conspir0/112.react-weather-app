import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const keyAPI = "ba52775ef319f91df47235c71719713f";

class App extends Component {
  state = {
    value: "",
    date: "",
    temp: "",
    minTemp: "",
    maxTemp: "",
    wind: "",
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.value
    }&APPID=${keyAPI}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        throw Error("I got a feeling something went wrong");
      })
      .then(respone => respone.json())
      .then(data => {
        this.setState({
          err: false
        });
      })
      .catch(err => {
        this.setState({
          err: true
        });
      });
  };

  render() {
    return (
      <div>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result error={this.state.err} />
      </div>
    );
  }
}

export default App;
