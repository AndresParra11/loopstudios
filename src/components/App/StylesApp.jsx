import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: system-ui;
  }
  body {
    width: 100%;
  }
`;

export default GlobalStyles;
