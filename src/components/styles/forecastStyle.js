import styled from "styled-components";
import Background from "../../images/backgroundImg.png";
export const Container = styled.div`
  width: 100%;
  height: 190px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    margin-top: 250px;
  }
`;
export const Forecast = styled.div`
  height: 100%;
  width: 250px;
  margin-right: 30px;
  margin-top: 40px;
  margin-left: 10px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 1, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  display: flex;
  flex-direction: column;

  /* opacity: 0.7; */
  /* align-content: center; */

  ::after {
    content: "";
    height: 100%;
    width: 250px;
    opacity: 0.5;
    background-image: ${Background};
    /* background: ${(props) => props.background}; */
  }
  h1 {
    word-spacing: 0.1px;
    color: black;
    text-align: center;
    margin-top: 5px;
    font-size: 24px;
    font-family: "Inter", sans-serif;
  }
  img {
    width: 85px;
    height: 85px;
    margin: auto;
    margin-top: 8px;
  }
  h3 {
    text-align: center;
    font-size: 23px;
    color: black;
    /* margin-bottom: 10px; */
  }
`;
