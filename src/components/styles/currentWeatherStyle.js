import styled from "styled-components";
export const Container = styled.div`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const WeatherBox = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  min-height: 100vh;

  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1399px) {
    height: 140vh;
  }
  @media (max-width: 800px) {
    height: 180vh;
  }
  @media (max-width: 700px) {
    height: 210vh;
  }
  @media (max-width: 559px) {
    height: 280vh;
  }
`;
export const WeatherCard = styled.div`
  display: flex;
  height: 280px;
  min-width: 700px;
  margin-top: 110px;
  /* background: linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea); */
  .section-left,
  .section-right {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  }
  .section-left {
    margin-left: 10px;
  }
  .section-left .first {
    margin-top: 10px;
    margin-left: 10px;
  }
  .section-left .second {
    /* flex-basis: 15%; */
    margin-left: 10px;
    margin-top: 0px;
    font-size: 19px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }
  .section-left .third {
    display: flex;
  }
  .section-left .third img {
    width: 150px;
  }
  .section-left .temperature {
    display: flex;
    flex-direction: column;
  }
  .section-left .temperature h4 {
    margin-top: 0px;
    font-size: 19px;
    font-weight: 500;
    margin-left: 28px;
    font-family: "Roboto", sans-serif;
  }
  .section-left .third h1 {
    margin-left: 20px;
    font-size: 70px;
    font-weight: 500;
    position: relative;
  }
  .sub {
    /* position: absolute; */
    left: -21px;
    top: 2px;
    font-size: 28px;
    color: black;
  }
  .section-left .fourth {
    margin-left: 17px;
    font-size: 24px;
    font-weight: 500;

    font-family: "Roboto", sans-serif;
    margin-top: ${(props) => {
      return props.sunny === "Clear" ? "5px" : "-20px";
    }};
  }
  .section-right .first {
    display: flex;
    justify-content: space-between;
  }
  .section-right .extra {
    margin-top: 80px;
  }
  .section-right .first h4 {
    font-size: 20px;
    font-weight: 400;
  }
  .section-right .first .aqi {
    margin-top: 0px;
    margin-right: 50px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    /* margin-left: 20px; */
  }
  .section-right hr {
    width: 85%;
    margin-top: -1px;
    margin-bottom: 9px;
    /* margin: auto; */
    border: none;
    height: 2px;
    background-color: black;
    /* color: black; */
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
