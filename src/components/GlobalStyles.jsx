import { createGlobalStyle } from 'styled-components';
import phoneImage from '../img/teletown.png';

export const GlobalStyle = createGlobalStyle`

 html {
    scroll-behavior: smooth;
  }
body{
     background-image: url(${phoneImage});
  background-size: 300px ;
  background-repeat:no-repeat;
  background-position:80px 30px;
 
}

a {
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
ul, ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}
img {
    display: block;
    max-width: 100%;
}
`;
