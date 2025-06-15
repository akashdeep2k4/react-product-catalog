import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;

  }

  html {
    scroll-behavior: smooth;
  }

  body #root {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    min-width: 320px;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select {
    all: unset;
  }

  button, select {
    cursor: pointer;
  }

  img {
    width: 100%;
  }
`;
