import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./hero";
import { ReactComponent as Sun } from "../utils/svg/sun.svg";
import { ReactComponent as Moon } from "../utils/svg/moon.svg";
import { SvgContainer } from "../components/hero";
import NavBar from "./navbar";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";

interface mainProps {
  changeTheme: React.MouseEvent<HTMLButtonElement, MouseEvent> | any;
  number: number;
}

const MainStyled = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};

  display: flex;
  flex-direction: column;
`;

const ThemeButton = styled.button`
  border-radius: 50%;
  cursor: pointer;

  &,
  &:hover,
  &:focus,
  &:active {
    border: 0;
    outline: none;
  }
`;

const SvgContainerTheme = styled(SvgContainer)`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0;
  & svg {
    border-radius: 50%;
  }
`;

const Main: React.FC<mainProps> = ({ changeTheme, number }) => {
  const [state, setState] = useState(number);
  const [current, setCurrent] = useState(1);
  const ThemeButtonComponent: React.FC = () => {
    return (
      <ThemeButton
        onClick={() => setState(changeTheme())}
        title={state === 1 ? "Toggle Dark Theme" : "Toggle Light Theme"}
      >
        {state === 1 ? (
          <SvgContainerTheme>
            <Moon />
          </SvgContainerTheme>
        ) : (
          <SvgContainerTheme>
            <Sun />
          </SvgContainerTheme>
        )}
      </ThemeButton>
    );
  };

  return (
    <MainStyled>
      <NavBar
        setCurrent={setCurrent}
        current={current}
        stheme={state === 1 ? "Dark" : "Light"}
      >
        <ThemeButtonComponent />
      </NavBar>
      {current === 1 ? <Hero /> : null}
      {current === 2 ? <About /> : null}
      {current === 4 ? <Skills /> : null}
      {current === 3 ? <Projects /> : null}
    </MainStyled>
  );
};
export default Main;
