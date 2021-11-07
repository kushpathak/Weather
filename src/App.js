import React from "react";
import Navbar from "./components/navbar";
import "./appStyle.css";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  return (
    <div>
      <Navbar />
      <CurrentWeather />
    </div>
  );
}

export default App;
