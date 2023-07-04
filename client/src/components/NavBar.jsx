import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [extendSearchbar, setExtendSearchbar] = useState(false);
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

  const handleClick = (event) => {
    const { name } = event.target;
    name === "extendNavbar"
      ? setExtendNavbar((curr) => !curr)
      : setExtendSearchbar((curr) => !curr);
  };

  return (
    <>
      {(["/home", "/new", "/about"].includes(pathname) ||
        pathname.startsWith("/detail/")) && (
        <NavbarContainer
          extend-navbar={extendNavbar.toString()}
          extend-searchbar={extendSearchbar.toString()}
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
                  Home
                </NavbarLink>
                <NavbarLink
                  to="/new"
                  active-classname="active"
                  scrolled={scrolled.toString()}
                >
                  New Recipe
                </NavbarLink>
                <NavbarLink
                  to="/about"
                  active-classname="active"
                  scrolled={scrolled.toString()}
                >
                  About
                </NavbarLink>
                <OpenLinksButton name="extendNavbar" onClick={handleClick}>
                  {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                </OpenLinksButton>
              </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
              <SearchBar extendSearchbar={extendSearchbar} />
              {pathname === "/home" && (
                <OpenLinksButton name="extendSearchbar" onClick={handleClick}>
                  {extendSearchbar ? <>&#10005;</> : <> &#8981;</>}
                </OpenLinksButton>
              )}
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
      )}
    </>
  );
};

export default NavBar;
