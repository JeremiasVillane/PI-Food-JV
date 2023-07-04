import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  background-color: #263a29;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.15s all ease-in-out;

  @media (min-width: 700px) {
    height: 80px;
  }

  &[scrolled="true"] {
    height: 66px;
  }

  &[extend-navbar="true"] {
    height: 100vh;
    justify-content: start;
  }

  &[extend-searchbar="true"] {
    height: 100vh;
    justify-content: start;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 3px;
  padding: 26px 12px;
  white-space: nowrap;
  transition: 0.15s all ease-in-out;

  &.active {
    background-color: #41644a;
  }

  &[scrolled="true"] {
    font-size: medium;
    padding: 24px 10px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  &[name="extendNavbar"] {
    @media (min-width: 700px) {
      display: none;
    }
  }

  &[name="extendSearchbar"] {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
