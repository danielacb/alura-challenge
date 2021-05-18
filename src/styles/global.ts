import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
}

body,
input,
textarea,
button {
  font-family: 'Inter', sans-serif;
}

button {
  cursor: pointer;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

`;

export default GlobalStyles;
