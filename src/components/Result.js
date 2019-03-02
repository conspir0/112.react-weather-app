import React from "react";

const Result = props => {
  const { date, temp, minTemp, maxTemp, wind, city, err } = props.weather;

  let content = null;

  if (!err && city) {
    return (content = (
      <div>
        <h4>{city}</h4>
        <p>{temp}</p>
        <p>{minTemp}</p>
        <p>{maxTemp}</p>
        <p>{wind}</p>
        <p>{date}</p>
      </div>
    ));
  }

  return (
    <div>{err ? `Sorry, but we dont have info about ${city}` : content}</div>
  );
};

export default Result;
