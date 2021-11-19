import React, { useEffect, useState } from "react";
import {
  Container,
  ErrorBox,
  NewsBox,
  NewsFeedContainer,
} from "./styles/newsFeedStyle";
import { connect } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { Alert, Collapse, IconButton, LinearProgress } from "@mui/material";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router";
const NewsFeed = (props) => {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${props.city}-weather&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`
      )
      .then((res) => {
        // console.log(res.data.articles[0]);
        setNews(res.data.articles);
      })
      .catch((e) => {
        setError(e.response);
      });
  }, [props.city]);
  const getNews = () => {
    const carouselElement = news.map((ele, index) => {
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img"
            src={ele.urlToImage}
            alt="First slide"
            onClick={() => {
              window.location.replace(`${ele.url}`);
            }}
          />
          <Carousel.Caption>
            <h3 className="carousel-h3">{ele.title}</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return carouselElement;
  };
  const NewsFeedHandler = () => {
    if (news === null && error === null) {
      return <LinearProgress color="success" />;
    } else if (error !== null) {
      return (
        <ErrorBox>
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2, fs: 4 }}
            >
              Some Error Occured while loading news feed! Please Try Again
            </Alert>
          </Collapse>
        </ErrorBox>
      );
    } else {
      return (
        <Container id="news-feed">
          <Carousel activeIndex={index} onSelect={handleSelect} variant="light">
            {getNews()}
          </Carousel>
        </Container>
      );
    }
  };
  return <NewsFeedContainer>{NewsFeedHandler()}</NewsFeedContainer>;
};
const mapToStateProps = (state) => {
  return {
    city: state.city,
    country: state.country,
  };
};
export default connect(mapToStateProps)(NewsFeed);
