import styled from "styled-components";
export const NewsFeedContainer = styled.div`
  z-index: 10;
  min-height: 20px;
`;
export const ErrorBox = styled.div`
  width: 60%;
  margin: auto;
  font-size: 20px; ;
`;
export const Container = styled.div`
  width: 40%;
  margin: auto;
  .carousel-h3 {
    color: black;
    z-index: 100;
  }
  .carousel-img {
    height: 400px;
    opacity: 0.7;
  }
  @media (max-width: 1220px) {
    width: 50%;
  }
  @media (max-width: 556px) {
    width: 95%;
    margin-top: -100px;
    .carousel-img {
      height: 380px;
    }
    .carousel-h3 {
      color: black;
    }
  }
  @media (max-width: 781px) {
    width: 60%;
  }
  @media (max-width: 650px) {
    width: 90%;
  }
  @media (max-width: 450px) {
    width: 95%;
  }
`;
