import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    colorPrimary: string;
    grey: string;
    screenFourk: string;
    screenDesktop: string;
    screenTabletL: string;
    screenTabletP: string;
    screenMobileL: string;
    screenMobileM: string;
    screenMobileS: string;
  }
}

export const mainTheme = {
  colorPrimary:
    "linear-gradient(to right top, #0ec8c8, #00b7db, #00a3ed, #008bf5, #126beb)",
  screenFourk: "1920px",
  screenDesktop: "1440px",
  screenTabletL: "1024px",
  screenTabletP: "786px",
  screenMobileL: "500px",
  screenMobileM: "400px",
  screenMobileS: "350px",
};

export const lightTheme = {
  primary: "#fff",
  secondary: "#000",
  grey: "#D6D4D9",
  ...mainTheme,
};

export const darkTheme = {
  primary: "#000",
  secondary: "#fff",
  grey: "#545257",
  ...mainTheme,
};
