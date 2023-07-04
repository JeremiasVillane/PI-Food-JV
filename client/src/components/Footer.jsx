import { useLocation } from "react-router-dom";
import { StyledFooter } from "../styles/StyledFooter";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {(["/home", "/new"].includes(pathname) ||
        pathname.startsWith("/detail/")) && (
        <StyledFooter>
          <p>
            <b>Single-Page Application</b> made by <b>Jeremias Villane</b> for
            the{" "}
            <a href="https://www.soyhenry.com/" target="_blank" rel="noopener noreferrer"> SoyHenry</a> bootcamp.&nbsp;&nbsp;(<b>2023</b>)
          </p>
        </StyledFooter>
      )}
    </>
  );
};
export default Footer;
