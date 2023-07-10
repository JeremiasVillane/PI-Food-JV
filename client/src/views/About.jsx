import { useEffect } from "react";
import {
  Arrows,
  AboutImgWrapper,
  AboutText,
  AboutTitle,
  AboutList,
  AboutContactWrapper,
} from "../styles/StyledAbout.styled";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AboutImgWrapper>
        <img src="/src/assets/foodworld-logo.png" alt="Food World" />
      </AboutImgWrapper>
      <AboutText>
        <main>
          IP (Integrative Project) made by Jeremias Villane for the{" "}
          <a
            href="https://www.soyhenry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoyHenry
          </a>{" "}
          bootcamp.
        </main>
        <Arrows
          onClick={handleScroll}
          src="/src/assets/arrows-down.gif"
          alt="arrows"
        />
        <AboutTitle>Technologies used:</AboutTitle>
        <AboutList>
          <figure>
            <li>
              <img src="/src/assets/logo-react.png" alt="React" />
              <figcaption>React</figcaption>
            </li>
          </figure>
          <figure>
            <li>
              <img src="/src/assets/logo-redux.png" alt="Redux" />
              <figcaption>Redux</figcaption>
            </li>
          </figure>
          <figure>
            <li>
              <img
                style={{ padding: "21px 0" }}
                src="/src/assets/logo-node.png"
                alt="Node.js"
              />
              <figcaption>Node.js</figcaption>
            </li>
          </figure>
          <figure>
            <li>
              <img src="/src/assets/logo-sequelize.png" alt="Sequelize" />
              <figcaption>Sequelize</figcaption>
            </li>
          </figure>
          <figure>
            <li>
              <img src="/src/assets/logo-postgresql.png" alt="PostgreSQL" />
              <figcaption>PostgreSQL</figcaption>
            </li>
          </figure>
          <figure>
            <li>
              <img src="/src/assets/logo-vite.png" alt="Vite" />
              <figcaption>Vite</figcaption>
            </li>
          </figure>
          <figure>
            <li>
              <img
                src="/src/assets/logo-styledcomponents.png"
                alt="Styled Components"
              />
              <figcaption>Styled Components</figcaption>
            </li>
          </figure>
        </AboutList>
        <AboutTitle>Contact:</AboutTitle>
        <AboutContactWrapper>
          <a
            href="https://www.linkedin.com/in/Jeremias-Villane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/logo-linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/JeremiasVillane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/logo-github.png" alt="GitHub" />
          </a>
        </AboutContactWrapper>
      </AboutText>
    </>
  );
};

export default About;
