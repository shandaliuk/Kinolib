import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6,
button {
  margin: 0;
  padding: 0;
}

img,
svg {
  display: block;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

button {
    cursor: pointer;
}

button, input {
  font-family: inherit;
}

body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.tertiary};
    padding: 0;
}
`;
