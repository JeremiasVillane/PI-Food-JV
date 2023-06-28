import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/StyledNavBar.styled";

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleClick = () => setExtendNavbar((curr) => !curr);

  return (
    <NavbarContainer extend-navbar={extendNavbar.toString()} >
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/home"> Home</NavbarLink>
            <NavbarLink to="/new"> New Recipe</NavbarLink>
            <NavbarLink to="/about"> About</NavbarLink>
            <OpenLinksButton onClick={handleClick} >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <SearchBar />
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/home"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/new"> New Recipe</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
