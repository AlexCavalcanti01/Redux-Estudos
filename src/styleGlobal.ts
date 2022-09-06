import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  html {
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
 
export default GlobalStyle;