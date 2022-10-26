import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

  * {
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-radius: 0;
    list-style: none;
    text-decoration: none;

  };

  body {
    background-color: #1D44BF;
    font-family: 'League Spartan', sans-serif;
  }

  button, input, select {
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
  }

  main {
    position: relative;
  }
`;
