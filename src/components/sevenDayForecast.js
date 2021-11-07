import { Container, Forecast } from "./styles/forecastStyle";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import Transparent from "../images/transparent.jpg";
import Cloudy from "../images/cloudy.png";
import Haze from "../images/haze.png";
import Mist from "../images/mist.png";
import Rain from "../images/rainy.png";
import Sunny from "../images/sunny.png";
import Smoke from "../images/smoke.png";
import axios from "axios";

const SevenDayForecast = (props) => {
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_SECRET}`
      )
      .then((res) => {
        // setLoading(false);
        setForecast(res.data.daily);
      })
      .catch((e) => {
        // setLoading(false);
        setError(e.response);
      });
  }, []);
  const getDay = (day) => {
    let d = new Date();
    let current = (d.getDay() - day + 7) % 7;
    if (current === 0) return "Sunday";
    else if (current === 1) return "Monday";
    else if (current === 2) return "Tuesday";
    else if (current === 3) return "Wednesday";
    else if (current === 4) return "Thursday";
    else if (current === 5) return "Friday";
    else return "Saturday";
  };
  const getImage = (id) => {
    if (id === "Clear") return Sunny;
    else if (id === "Haze") return Haze;
    else if (id === "Clouds") return Cloudy;
    else if (id === "Mist") return Mist;
    else if (id === "Rain" || id === "Thunderstorm") return Rain;
    else if (id === "Smoke") return Smoke;
  };
  const convertToCelcius = (temp) => {
    return Math.round(temp - 273.5);
  };
  const fetchForecast = () => {
    // console.log(error, forecast);
    if (error === null && forecast === null) {
      return <></>;
    } else {
      const items = forecast.map((item, id) => {
        if (id >= 1 && id <= 5) {
          return (
            <Forecast key={id}>
              <h1>{getDay(id)}</h1>
              <img src={getImage(item.weather[0].main)} />
              <h3>
                {convertToCelcius(item.temp.day)}°C/
                {convertToCelcius(item.temp.night)}°C
              </h3>
            </Forecast>
          );
        }
      });
      return <Container>{items};</Container>;
    }
  };
  return fetchForecast();
};

export default SevenDayForecast;
