import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ShowAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

interface navbarProps {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  current: number;
}

const UnderBarAnimation = keyframes`

    from{
        transform:scale(0);
    }

    to{
        transform:scale(1);
    }

`;

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  border-bottom: 0.3rem solid ${({ theme }) => theme.secondary};

  & .theme {
    text-align: center;
    color: ${({ theme }) => theme.secondary};

    width: 5rem;
    @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
      padding: 2rem;
      width: auto;
    }
    & .smallScreen {
      display: none;
      @media only screen and (max-width: ${({ theme }) =>
          theme.screenTabletP}) {
        display: block;
        align-items: center;
        font-size: 1rem;
        font-weight: 700;
        padding: 2rem 1rem;
        text-transform: uppercase;
        cursor: pointer;
      }
      @media only screen and (max-width: ${({ theme }) =>
          theme.screenTabletP}) {
        font-size: 1.5rem;
      }
      @media only screen and (max-width: ${({ theme }) =>
          theme.screenMobileM}) {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    &.close {
      z-index: -10;
    }
    flex-direction: column;
    justify-content: center;
  }
`;

const NavBarStyled = styled.nav`
  @media only screen and (min-width: ${({ theme }) => theme.screenTabletP}) {
    flex: 1;
  }
  animation: ${ShowAnimation} 1s ease-in-out;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;

  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    flex-direction: column;
  }
`;

const NavListItemStyled = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    font-size: 3rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    font-size: 4rem;
  }
  font-weight: 700;
  padding: 2rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0.4;
  transition: all 0.2s;
  &.active,
  &:hover {
    color: ${({ theme }) => theme.secondary};
    opacity: 1;
  }
`;

const UnderBar = styled.div`
  width: 50%;
  height: 0.3rem;
  border-radius: 5rem;
  background: ${({ theme }) => theme.colorPrimary};
  transform-origin: 100% 50%;
  animation: ${UnderBarAnimation} 0.3s linear;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    width: 100%;
  }
`;

const HamButton = styled.button`
  display: none;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    position: absolute;
    top: 4rem;
    right: 4rem;
    z-index: 100;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    &,
    &:hover,
    &:active,
    &:focus {
      border: 0;
      outline: none;
      background: ${({ theme }) => theme.primary};
    }
  }
`;

const HamBurger = styled.div`
  height: 0.3rem;
  width: 4rem;

  background: ${({ theme }) => theme.secondary};
  position: relative;
  opacity: 1;
  visibility: visible;
  &::before,
  &::after {
    transition: all 0.3s;
    opacity: 1;
    content: " ";
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.secondary};
    position: absolute;
    left: 0;
  }

  &::before {
    top: -1rem;
  }

  &::after {
    top: 1rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    width: 6rem;
    height: 0.6rem;
    &::before {
      top: -1.5rem;
    }

    &::after {
      top: 1.5rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    width: 8rem;
    height: 0.8rem;
    &::before {
      top: -2rem;
    }

    &::after {
      top: 2rem;
    }
  }
  &.open {
    & {
      visibility: hidden;
    }

    &::before {
      transform: rotate(45deg);
      visibility: visible;
      top: 0.5rem;
    }

    &::after {
      transform: rotate(-45deg);
      visibility: visible;
      top: 0.5rem;
    }
  }
`;

interface NavListItemProps {
  text: string;
  active?: Boolean;
  number: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  close: Boolean;
}

const NavListItem: React.FC<NavListItemProps> = ({
  text,
  active,
  number,
  setCurrent,
  setClose,
  close,
}) => {
  return (
    <NavListItemStyled
      onClick={() => {
        setCurrent(number);
        setClose(!close);
      }}
      className={active ? "active" : ""}
    >
      <p>{text}</p>
      {active ? <UnderBar /> : null}
    </NavListItemStyled>
  );
};

const NavBar: React.FC<navbarProps> = ({ setCurrent, current, children }) => {
  const [close, setClose] = useState(false);
  const NavListArray: string[] = ["Home", "About", "Projects", "Skills"];
  return (
    <>
      <HamButton onClick={() => setClose(!close)}>
        <HamBurger className={close ? "open" : "close"} />
      </HamButton>
      <NavContainer className={close ? "open" : "close"}>
        <NavBarStyled>
          <NavList>
            {NavListArray.map((cur: string, index: number) => (
              <NavListItem
                key={index}
                number={index + 1}
                setCurrent={setCurrent}
                text={cur}
                setClose={setClose}
                close={close}
                active={current === index + 1}
              />
            ))}
          </NavList>
        </NavBarStyled>
        <div className="theme">
          {children}
          <div className="smallScreen">
            <FaArrowUp />
            <p>Change Theme</p>
          </div>
        </div>
      </NavContainer>
    </>
  );
};
export default NavBar;
