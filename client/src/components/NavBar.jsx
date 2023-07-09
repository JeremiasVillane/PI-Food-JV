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
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

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

  return (
    <>
      {(["/home", "/new", "/about"].includes(pathname) ||
        pathname.startsWith("/detail/")) && (
        <NavbarContainer
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
              </NavbarLinkContainer>
              <NavbarExtendedContainer>
                <div id="menuToggle" onClick={handleMenuToggle}>
                  <input type="checkbox" checked={isMenuOpen} readOnly />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id="menu">
                    <li>
                      <NavbarLinkExtended
                        to="/home"
                        scrolled={scrolled.toString()}
                      >
                        Home
                      </NavbarLinkExtended>
                    </li>
                    <li>
                      <NavbarLinkExtended
                        to="/new"
                        scrolled={scrolled.toString()}
                      >
                        New Recipe
                      </NavbarLinkExtended>
                    </li>
                    <li>
                      <NavbarLinkExtended
                        to="/about"
                        scrolled={scrolled.toString()}
                      >
                        About
                      </NavbarLinkExtended>
                    </li>
                  </ul>
                </div>
              </NavbarExtendedContainer>
            </LeftContainer>

            <RightContainer>
              <SearchBar isSearchOpen={isSearchOpen} />

              <NavbarExtendedContainer>
                <div id="searchToggle" onClick={handleSearchToggle}>
                  <input type="checkbox" checked={isSearchOpen} readOnly />
                  {pathname === "/home" && (
                    <OpenLinksButton name="extendSearchbar">
                      {isSearchOpen ? <>&#10005;</> : <> &#8981;</>}
                    </OpenLinksButton>
                  )}
                  <ul id="search" />
                </div>
              </NavbarExtendedContainer>
            </RightContainer>
          </NavbarInnerContainer>
        </NavbarContainer>
      )}
    </>
  );
};

export default NavBar;
