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
    position: relative; 
    font-family: ${props => props.theme.fonts.primary};
    padding: 0;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
}

.privacy-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.primary};
  z-index: 2;
}

.progress {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--accent);
  bottom: 100px;
}
`;
