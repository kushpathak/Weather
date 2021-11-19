import styled from "styled-components";
import Search from "../../images/search.png";
export const Nav = styled.nav`
  /* position: relative; */
  overflow: hidden;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
  @media (max-width: 995px) {
    justify-content: space-between;
  }
  @media (max-width: 764px) {
    justify-content: center;
  }
  @media (max-width: 450px) {
    justify-content: flex-end;
  }
`;
export const NavList = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  margin-right: 25px;
  .hamburger {
    display: none;
    width: 40px;
    margin-top: 8px;
  }
  .content {
    /* position: absolute; */
    /* left: 0px; */
    width: 100%;
  }
  @media (max-width: 764px) {
    .hamburger {
      display: block;
      margin-top: 12px;
    }
  }
`;
export const List = styled.li`
  display: ${(props) => {
    return props.inline ? "block" : "inline-block";
  }};
  color: white;
  font-size: 20px;
  margin-left: 30px;
  margin-bottom: ${(props) => {
    return props.marginBottom ? props.marginBottom : "0px";
  }};
  .nav-logo {
    width: 40px;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 995px) {
    margin-left: 15px;
    font-size: 18px;
  }
  @media (max-width: 803px) {
    display: ${(props) => {
      return props.early ? "none" : "";
    }};
    margin-right: 10px;
  }
  @media (max-width: 764px) {
    display: ${(props) => {
      return props.collapse ? "none" : "";
    }};
    .nav-logo {
      width: 50px;
    }
  }
  @media (max-width: 450px) {
    .nav-logo {
      display: none;
    }
  }
`;
export const SearchBar = styled.input`
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  border: 0.5px solid white;
  border-radius: 5px;
  width: 300px;
  margin-top: 2px;
  margin-right: 10px;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: 95% 50%;
  background-size: 30px;
  padding-right: 15px;
  @media (max-width: 995px) {
    width: 250px;
    margin-right: 0px;
  }
  @media (max-width: 764px) {
    margin-top: 5px;
    margin-right: -10px;
  }
  @media (max-width: 360px) {
    width: 240px;
  }
`;
export const Dropdown = styled.div`
  overflow: hidden;
  display: none;
  width: 100%;
  .seperator {
    width: 100%;
    border: none;
    background-color: white;
    height: 1px;
    margin: 0px;
    margin-bottom: 2px;
  }
  @media (max-width: 764px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  background-color: black;
  max-height: 0px;
  transition: max-height 0.5s ease-in;
`;
