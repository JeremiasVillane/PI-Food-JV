import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url("images/background.jpg");
    min-height: 100%;
    background-repeat: repeat;
    /* background-attachment: fixed; */
    /* background-position: center; */
    background-size: 66%;
    color: #333;
  }
`;

export default GlobalStyles;
