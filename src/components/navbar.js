import React, { useEffect, useState } from "react";
import {
  Nav,
  Navlist,
  NavItem,
  NavImg,
  SearchBar,
  Dropdown,
  CityDisplay,
  SearchBox,
} from "./styles/navstyle";
import Search from "../images/search.png";
import Sunny from "../images/backgroundImg.png";
import Location from "../images/Location.png";
import axios from "axios";
import { connect } from "react-redux";

const Navbar = (props) => {
  const [location, setLocation] = useState({ city: null, country: null });
  const [state, setState] = useState({});
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState(null);
  const [error, setError] = useState(null);
  const [matches, setMatches] = useState([]);
  const [collapse, setCollapse] = useState(null);
  useEffect(async () => {
    window.addEventListener("click", (e) => {
      if (
        document.getElementById("dropdown").contains(e.target) === false &&
        document.getElementById("search").contains(e.target) === false
      ) {
        setCollapse("none");
      }
    });
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json"
      );
      setCities(res.data);
    } catch (e) {
      setError(e.message);
    }
  }, []);
  useEffect(() => {
    var timer = setTimeout(() => {
      props.changeCity(city, props.country);
      getMatching();
    }, 2500);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      setState({});
    };
  }, [city]);

  const checkInArray = (arr, val) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === val) return 1;
    }
    return 0;
  };
  const getMatching = async () => {
    if (cities !== null) {
      let cityCount = 0;
      let already = [];
      setMatches(
        cities.filter((City) => {
          const regex = new RegExp(`^${city}`, "gi");
          if (City.name.match(regex)) {
            if (cityCount < 10 && !checkInArray(already, City.name)) {
              cityCount++;
              already.push(City.name);
              return 1;
            }
          }
          return 0;
        })
      );
    }
  };

  const displayCities = () => {
    if (matches === null) {
      return null;
    } else {
      //   console.log("here");
      const matchedCities = matches.map((City) => {
        return (
          <React.Fragment key={City.name}>
            <div
              className="contents"
              onClick={(e) => {
                setCity(City.name);
                setCollapse("none");
                const element = document.getElementById("search");
                element.value = City.name;
              }}
            >
              {City.name}
            </div>
            <hr></hr>
          </React.Fragment>
        );
      });

      return <CityDisplay>{matchedCities}</CityDisplay>;
    }
  };
  return (
    <Nav background="black">
      <Navlist>
        <NavImg src={Sunny}></NavImg>
        <NavItem>Weather App</NavItem>
        <NavItem display="true">
          {props.city === null ? "Haldwani" : props.city}
        </NavItem>
        <NavItem display="true">
          {props.country === null ? "IN" : props.country}
        </NavItem>
        <SearchBox>
          <SearchBar
            // id="search-bar"
            id="search"
            type="text"
            placeholder="Search Location"
            backgroundImg={Search}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onClick={(e) => {
              setCollapse("block");
            }}
          ></SearchBar>

          <Dropdown id="dropdown" collapse={collapse}>
            <div className="header">
              <img src={Location} />
              <h2>Use Current Location</h2>
            </div>
            {displayCities()}
          </Dropdown>
        </SearchBox>
      </Navlist>
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
export default connect(mapToStateProps, mapDispatchToProps)(Navbar);
