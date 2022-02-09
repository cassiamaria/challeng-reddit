
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body, input, button, textarea {
    font: 400 1rem 'Mulish', sans-serif;
  }

  a, button {
    outline: 0;
  }

`;

export default GlobalStyle;