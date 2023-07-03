import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => setExtendNavbar((curr) => !curr);

  return (
    <NavbarContainer
      extend-navbar={extendNavbar.toString()}
      scrolled={scrolled.toString()}
    >
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink
              to="/home"
              active-classname="active"
              scrolled={scrolled.toString()}
            >
              {" "}
              Home
            </NavbarLink>
            <NavbarLink
              to="/new"
              active-classname="active"
              scrolled={scrolled.toString()}
            >
              {" "}
              New Recipe
            </NavbarLink>
            <NavbarLink
              to="/about"
              active-classname="active"
              scrolled={scrolled.toString()}
            >
              {" "}
              About
            </NavbarLink>
            <OpenLinksButton onClick={handleClick}>
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
