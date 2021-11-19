import React from "react";
import NavbarComponent from "./components/navbar";
import "./appStyle.css";
import CurrentWeather from "./components/CurrentWeather";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div>
      <NavbarComponent />
      <CurrentWeather />
      {/* <NewsFeed /> */}
    </div>
  );
}

export default App;
