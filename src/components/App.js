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
    city: "",
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // 1st version
  // handleCitySubmit = e => {
  //   e.preventDefault();

  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${
  //     this.state.value
  //   }&APPID=${keyAPI}&units=metric`;

  //   fetch(API)
  //     .then(response => {
  //       if (response.status === 200) {
  //         return response;
  //       }
  //       throw Error("I got a feeling something went wrong");
  //     })
  //     .then(respone => respone.json())
  //     .then(data => {
  //       const time = new Date().toLocaleString();

  //       this.setState(prevState => ({
  //         date: time,
  //         temp: data.main.temp,
  //         minTemp: data.main.temp_min,
  //         maxTemp: data.main.temp_max,
  //         wind: data.wind.speed,
  //         city: prevState.value,
  //         err: false
  //       }));
  //     })
  //     .catch(err => {
  //       this.setState(prevState => ({
  //         err: true,
  //         city: prevState.value
  //       }));
  //     });
  // };

  // 2nd version
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length <= 2) return null;
    if (prevState.value !== this.state.value) {
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
          const time = new Date().toLocaleString();

          this.setState(prevState => ({
            date: time,
            temp: data.main.temp,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max,
            wind: data.wind.speed,
            city: prevState.value,
            err: false
          }));
        })
        .catch(err => {
          this.setState(prevState => ({
            err: true,
            city: prevState.value
          }));
        });
    }
  }

  render() {
    return (
      <div>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          // submit={this.handleCitySubmit}
        />
        <Result error={this.state.err} weather={this.state} />
      </div>
    );
  }
}

export default App;
