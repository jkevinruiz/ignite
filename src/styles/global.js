import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: #ff7676 white;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ff7676;
    }
    &::-webkit-scrollbar-track-color {
      background-color: white;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    width: 100%;
  }

  h2 {
    font-size: 3rem;
    font-weight: lighter;
    color: #333;


    @media (max-width: 40.625em) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem;

    @media (max-width: 40.625em) {
      font-size: 0.85rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;

    @media (max-width: 40.625em) {
      font-size: 0.85rem;
    }
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    display: block;
  }

  input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
  }

`;

export default GlobalStyle;
