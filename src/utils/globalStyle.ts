import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:inherit;
}

html{
  font-size:62.5%;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (min-width: 1920px) {
        font-size: 120%;
    }

    @media only screen and (max-width: 1440px) {
        font-size: 62.5%;
    }

    @media only screen and (max-width: 1024px) {
        font-size: 60%;
    }

    @media only screen and (max-width: 786px) {
        font-size: 50%;
    }

    @media only screen and (max-width: 500px) {
        font-size: 30%;
    }

    @media only screen and (max-width: 400px) {
        font-size: 25%;
    }

    @media only screen and (max-width: 350px) {
        font-size: 20%;
    }
}

#root{
  position: relative;
}

::-webkit-scrollbar {
  width: .2rem;
  border-radius:5rem;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #fff;
}

::-webkit-scrollbar-thumb:hover {
  background: #eee;
}

`;
