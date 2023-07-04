import styled from "styled-components";

export const LandingWrapper = styled.div`
  background-image: url("../src/assets/landing.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 33px;

  h1 {
    color: #fff;
    font-size: 60px;
    white-space: nowrap;
    margin: 44px 0 1%;
    text-shadow: 2px 0 #416450, -2px 0 #416450, 0 2px #416450, 0 -2px #416450, 1px 1px #416450, -1px -1px #416450, 1px -1px  #416450, -1px 1px #416450;
  }

  img {
    margin-top: -10px;
    max-width: 50%;
    height: auto;
    flex-grow: 1;
  }

  button {
    margin: 20px 0 33px;
    height: 3em;
    width: 9em;
  }
`;
