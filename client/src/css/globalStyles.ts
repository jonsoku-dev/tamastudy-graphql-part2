import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Karla:ital,wght@0,400;0,700;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        /* font-family: Roboto, sans-serif; */
        font-family: Archivo, sans-serif;
        /* font-family: Karla, sans-serif; */
        /* font-family: Lora, sans-serif; */
    }
    a {
        text-decoration: none;
        color:inherit;
    }
    .container {
        width: 1024px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
