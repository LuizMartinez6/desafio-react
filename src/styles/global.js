import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin:0px;
  padding: 0px;
}

body, button,input {
  font-weight: 400;
  font-style: normal;
}

body{
  display: flex;
  justify-content: center;
  background-color: blue;
  align-items: center;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
}
`;