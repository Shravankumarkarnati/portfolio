import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/main";
import { lightTheme, darkTheme } from "./utils/theme";
import { getHours } from "./utils/getHours";

function App() {
  const [theme, setTheme] = React.useState(
    getHours() === 1 ? lightTheme : darkTheme
  );
  const changeTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      return 0;
    } else {
      setTheme(lightTheme);
      return 1;
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main changeTheme={changeTheme} number={getHours()} />
      </ThemeProvider>
    </div>
  );
}

export default App;
