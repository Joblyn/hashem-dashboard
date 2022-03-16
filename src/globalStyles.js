import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;    
  }
  body {
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  * {
    transition: all .12s cubic-bezier(.17,.67,.83,.67);
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;
