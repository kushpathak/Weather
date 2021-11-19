import React, { useEffect, useState } from "react";
import Sunny from "../images/backgroundImg.png";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-scroll";
import {
  Dropdown,
  List,
  Nav,
  NavContainer,
  NavList,
  SearchBar,
} from "./styles/navstyle";
import Hamburger from "../images/hamburger.png";
const NavbarComponent = (props) => {
  // const [location, setLocation] = useState({ city: null, country: null });
  // const [state, setState] = useState({});
  const [city, setCity] = useState(null);
  // const [cities, setCities] = useState(null);
  // const [error, setError] = useState(null);
  // const [matches, setMatches] = useState([]);
  // const [collapse, setCollapse] = useState(null);

  const handleCollpase = () => {
    var dropdown = document.getElementById("nav-dropdown");
    if (dropdown.style.maxHeight === "100px") {
      dropdown.style.maxHeight = "0px";
    } else {
      dropdown.style.maxHeight = "100px";
    }
  };
  return (
    <Nav>
      <NavContainer>
        <NavList>
          <List>
            <img src={Sunny} className="nav-logo" />
          </List>
          <List collapse={true} early={true}>
            <a>Weather</a>
          </List>
          <List collapse={true}>
            <Link to="weekly" spy={true} smooth={true} duration={500}>
              Weekly Weather
            </Link>
          </List>
          <List collapse={true}>
            <Link to="news-feed" spy={true} smooth={true} duration={500}>
              News Feed
            </Link>
          </List>
        </NavList>
        <NavList>
          <SearchBar
            placeholder="Search City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.code === "Enter") {
                props.changeCity(city, null);
                console.log(props);
              }
            }}
          />
        </NavList>
        <NavList>
          <img
            src={Hamburger}
            className="hamburger"
            onClick={() => {
              handleCollpase();
            }}
          ></img>
        </NavList>
      </NavContainer>
      <Dropdown id="nav-dropdown">
        <hr className="seperator" />
        <List inline={false} marginBottom={"15px"}>
          <Link to="weekly" spy={true} smooth={true} duration={500}>
            Weekly Weather
          </Link>
        </List>

        <List inline={false} marginBottom={"2px"}>
          <Link to="news-feed" spy={true} smooth={true} duration={500}>
            News Feed
          </Link>
        </List>
      </Dropdown>
    </Nav>
  );
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
const mapToStateProps = (state) => {
  return {
    city: state.city,
    country: state.country,
    loaded: state.loaded,
  };
};
export default connect(mapToStateProps, mapDispatchToProps)(NavbarComponent);
