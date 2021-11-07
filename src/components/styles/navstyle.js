import styled from "styled-components";
export const Nav = styled.nav`
  background-color: ${(props) => props.background};
  margin-top: 0px;
`;
export const Navlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  position: relative;
`;
export const NavItem = styled.li`
  display: inline-block;
  margin-right: 30px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 700px) {
    display: ${(props) => {
      return props.display ? "none" : "inline-block";
    }};
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
export const NavImg = styled.img`
  display: block;
  width: 42px;
  margin-right: 20px;
`;
export const SearchBar = styled.input`
  padding: 10px;
  border: none;
  height: 30px;
  font-size: 17px;
  width: 300px;
  @media (max-width: 794px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 160px;
  }
  @media (max-width: 390px) {
    width: 150px;

    margin-right: 5px;
  }
`;

export const Dropdown = styled.div`
  display: ${(props) => {
    return props.collapse;
  }};
  color: black;
  background-color: white;
  height: fit-content;
  position: absolute;
  top: 38px;
  /* margin-left: 454.5px; */
  width: 300px;
  @media (max-width: 794px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 160px;
  }
  h2 {
    font-size: 15px;
    /* text-align: center; */
    margin-top: 10px;
    display: block;
    font-weight: 400;
    z-index: 1000;
    /* font-family: "Montserrat", sans-serif; */
  }
  h2:hover {
    color: orangered;
    cursor: pointer;
  }
  p {
    font-size: 18px;
    margin-left: 10px;
  }
  .header {
    display: flex;
    background-color: lightgrey;
  }

  .header img {
    width: 40px;
  }
`;
export const CityDisplay = styled.div`
  font-family: "Monsterrat", sans-serif;

  div {
    padding: 10px;
    font-size: 18px;
    display: block;
  }
  div:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
`;
