import styled from "styled-components";

export const AboutImgWrapper = styled.div`
  background-image: url("../src/assets/about-bg.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  margin: 33px;
  margin-bottom: 20px;
  align-items: center;

  img {
    width: 40%;
    max-width: 60%;
    height: auto;
  }
`;

export const AboutText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #263a29;
  font-size: 1.2em;

  main {
    font-weight: bold;
    color: #263a29;
    text-align: center;
    background-color: lightgreen;
    margin-top: 21px;
    padding: 1em;
    border-radius: 10px;

    a {
      color: green;
      text-decoration: none;
    }
  }
`;

export const Arrows = styled.img`
  max-width: 120px;
  margin: 21px 0;
  cursor: pointer;
`;

export const AboutTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  color: #263a29;
  margin: 33px 0;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: center;
  list-style-type: none;
  font-size: x-large;
  padding: 22px 0;
  img {
    max-width: 80px;
    transition: 0.15s all ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
  li {
    text-align: center;
  }
`;

export const AboutContactWrapper = styled.div`
  display: flex;
  img {
    max-height: 2em; 
    padding: 0 33px 102px 33px;
    transition: 0.15s all ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`
