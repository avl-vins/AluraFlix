import { createGlobalStyle } from "styled-components";
import { black } from "./components/UI/variables";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    font-family:'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}
body{
    background-color:${black['dark']};
    width: 100vw;
    max-width: 1440px;
    min-width: 320px;
    margin: 0 auto;
}
`
export default GlobalStyle