import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  
body{
    background-color: #7047EB;
    font-family: 'DM Sans', sans-serif;
}
`
export default GlobalStyles;