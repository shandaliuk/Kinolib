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

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background: ${props => props.theme.colors.secondary};
}

::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.primary};
}

::-webkit-scrollbar-corner {
  background: #fff3;
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

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${props => props.theme.colors.primary};
  transform-origin: 0%;
  z-index: 3;
}

.parallax {
  width: 100%;
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}

.parallax .scroller {
  font-weight: 100;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 50px;
}

.parallax span {
  display: block;
  margin-right: 30px;
}
`;
