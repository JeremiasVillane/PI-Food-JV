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

  @media (min-width: 700px) {
    margin-right: -21%;
  }
  @media (max-width: 500px) {
    margin-right: -44%;
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 33px;
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

export const OpenLinksButton = styled.span`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  &[name="extendSearchbar"] {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const NavbarExtendedContainer = styled.div`
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  #menuToggle {
    display: none;

    @media (max-width: 700px) {
      display: block;
      position: relative;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
    }
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #cdcdcd;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 160px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: #263a29;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    @media (max-width: 700px) {
      transform: translate(-100%, 0);
    }
  }

  #menu li {
    padding: 10px 0;
    font-size: 22px;
  }

  #menuToggle input:checked ~ #menu {
    transform: none;
  }



  #searchToggle {
    display: none;

    @media (max-width: 1024px) {
      display: block;
      position: relative;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
    }
  }

  #searchToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #searchToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 55px;
    position: relative;
    z-index: 1;
    color: #cdcdcd;
  }

  #search {
    position: absolute;
    width: 321px;
    height: 100vh;
    margin: -50px 0 0 -321px;
    padding: 50px;
    padding-top: 333px;
    background: #263a29;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    @media (max-width: 1024px) {
      transform: translate(100%, 0);
    }
  }

  #searchToggle input:checked ~ #search {
    transform: none;
  }
`;
