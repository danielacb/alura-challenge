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

body {
  padding: 2rem;

  @media (max-width: 697px) {
    padding: 1rem;
  }
}

button {
  cursor: pointer;
}

h2 {
  font-size: 1.3125rem;
  font-weight: bold;
  line-height: 1.9375rem;
}

h6 {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.4rem;
  line-height: 1.125rem;
  text-transform: uppercase;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
  opacity: 0.8;
}

a {
  color: inherit;
  text-decoration: inherit;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

`;

export default GlobalStyles;
