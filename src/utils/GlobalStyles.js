import { createGlobalStyle } from 'styled-components';
import font from 'images/font.jpg';

export const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

body {
  background-image: url(${font});
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
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
    background-color: #030a02;
    color: ${props => props.theme.colors.primary};
    padding: 0;
}
`;
