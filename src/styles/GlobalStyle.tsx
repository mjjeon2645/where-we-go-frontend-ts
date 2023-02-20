import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: #000;
}
ul {
    list-style: none;
}
button {
    cursor: pointer;
}
body {
    background-color: #F0F2F5;
}
`;

export default GlobalStyle;
