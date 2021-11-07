import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@mui/material";
import { WeatherBox, WeatherCard } from "./styles/currentWeatherStyle";
import axios from "axios";
import Cloudy from "../images/cloud.png";
import Haze from "../images/haze.png";
import Mist from "../images/mist.png";
import Rain from "../images/rainy.png";
import Sunny from "../images/sunny.png";
import Smoke from "../images/smoke.png";
import Fog from "../images/fogIcon.png";
import ClearBackground from "../images/sunnyImg.jpg";
import MistyBackground from "../images/mistyImage.jpg";
import RainyBackground from "../images/rainyImage.jpeg";
import ThunderstormImg from "../images/thunderstormImg.jpg";
import CloudImg from "../images/cloudImg.jpg";
import HazeImg from "../images/hazeImg.jpg";
import FogImg from "../images/fog.jpg";
import SevenDayForecast from "./sevenDayForecast";

const CurrentWeather = (props) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [sunny, setSunny] = useState(false);

  const FetchAQI = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_SECRET}`
      )
      .then((res) => {
        setAqi(res.data.list[0].main.aqi);
      })
      .catch((e) => {
        setError(e.response);
      });
  };
  useEffect(() => {
    const City = props.city === null ? "Haldwani" : props.city;
    // console.log(props);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${process.env.REACT_APP_SECRET}`
      )
      .then((res) => {
        setWeather(res.data);
        props.changeCity(props.city, res.data.sys.country);
        FetchAQI(res.data.coord.lat, res.data.coord.lon);
      })
      .catch((e) => {
        setError(e);
      });
  }, [props.city]);

  const getTime = () => {
    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes();
    return time;
  };
  const airQuality = () => {
    if (aqi === 1) {
      return "Good";
    } else if (aqi === 2) return "Fair";
    else if (aqi === 3) {
      return "Moderate";
    } else if (aqi === 4) {
      return "Poor";
    }
    return "Very Poor";
  };
  const LoadingDiv = () => {
    return (
      <CircularProgress
        style={{
          display: "block",
          margin: "auto",
          marginTop: "20%",
        }}
      />
    );
  };
  const getImage = (id) => {
    if (id === "Clear") return Sunny;
    else if (id === "Haze") return Haze;
    else if (id === "Clouds") return Cloudy;
    else if (id === "Mist") return Mist;
    else if (id === "Rain" || id === "Thunderstorm") return Rain;
    else if (id === "Smoke") return Smoke;
    else if (id === "Fog") return Fog;
  };
  const getBackground = (id) => {
    if (id === "Clear") return ClearBackground;
    else if (id === "Haze") return HazeImg;
    else if (id === "Clouds") return CloudImg;
    else if (id === "Mist") return MistyBackground;
    else if (id === "Thunderstorm") return ThunderstormImg;
    else if (id === "Rain") return RainyBackground;
    else if (id === "Smoke") return FogImg;
    else if (id === "Fog") return FogImg;
  };
  const convertToCelcius = (temp) => {
    return Math.round(temp - 273.5);
  };
  const degToCompass = (num) => {
    let val = Math.floor(num / 22.5 + 0.5);
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };
  const LoadWeather = () => {
    // console.log(props.city);

    if (props.city === null || (error === null && aqi === null)) {
      return LoadingDiv();
    } else {
      return (
        <>
          <WeatherBox background={getBackground(weather.weather[0].main)}>
            <WeatherCard sunny={weather.weather[0].main}>
              <div className="section-left">
                <h5 className="first">CURRENT WEATHER</h5>
                <h5 className="second">{getTime()}</h5>
                <div className="third">
                  <img src={getImage(weather.weather[0].main)} />
                  <div className="temperature">
                    <h1>
                      {convertToCelcius(weather.main.temp)}°
                      <sub className="sub">C</sub>
                    </h1>
                    <h4>
                      Real Feel &reg;{" "}
                      {convertToCelcius(weather.main.feels_like)}°
                    </h4>
                  </div>
                </div>
                <h4 className="fourth">{weather.weather[0].main}</h4>
              </div>

              <div className="section-right">
                <div className="first extra">
                  <h4>Air Quality</h4>
                  <h4 className="aqi">{airQuality()}</h4>
                </div>
                <hr></hr>
                <div className="first">
                  <h4>Wind</h4>
                  <h4 className="aqi">
                    {degToCompass(weather.wind.deg)} {weather.wind.speed} Km/h
                  </h4>
                </div>
                <hr></hr>
                <div className="first">
                  <h4>Humidity</h4>
                  <h4 className="aqi">{weather.main.humidity}%</h4>
                </div>
              </div>
            </WeatherCard>
            <SevenDayForecast coords={weather.coord} />
          </WeatherBox>
        </>
      );
    }
  };
  return <div>{LoadWeather()}</div>;
};
const mapToStateProps = (state) => {
  return {
    city: state.city,
    country: state.country,
    // loaded: state.loaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (newCity, newCountry) => {
      dispatch({
        type: "CHANGE_CITY",
        city: newCity,
        country: newCountry,
      });
    },
  };
};
export default connect(mapToStateProps, mapDispatchToProps)(CurrentWeather);
