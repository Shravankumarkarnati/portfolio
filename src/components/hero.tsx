import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBitbucket, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Resume from "../utils/Shravan Kumar Karnati.pdf";

const ShowAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

interface heroProps {}

const HeroStyled = styled.div`
  animation: ${ShowAnimation} 1s ease-in-out;
  flex: 1;
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletL}) {
    flex-direction: column;
  }
`;

const NameStyled = styled.h1`
  display: block;
  font-size: 10rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  background: ${({ theme }) => theme.colorPrimary};
  -webkit-background-clip: text;
  --moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    font-size: 15rem;
  }
`;

export const ParaStyled = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: 0.25rem;

  & .special {
    font-weight: 600;
    background: ${({ theme }) => theme.colorPrimary};
    -webkit-background-clip: text;
    --moz-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    font-size: 5rem;
  }
`;

const NameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const LinkContainer = styled(NameContainer)`
  flex: 0.3;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletL}) {
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    display: grid;
    grid-template-rows: repeat(3, 25%);
    grid-template-columns: repeat(2, 25%);
    grid-gap: 2rem;
    justify-items: center;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    display: grid;
    grid-template-rows: repeat(3, 25%);
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
  }
  & .link {
    text-decoration: none;
    color: inherit;
  }
`;

export const SvgContainer = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    width: 10vw;
    height: 10vw;
  }
  & p {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 0.2rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.2rem;

    @media only screen and (max-width: ${({ theme }) => theme.screenTabletL}) {
      font-size: 2rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
      font-size: 3rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
      font-size: 4rem;
    }
  }

  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.secondary};
  }

  &:hover {
    p {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Hero: React.FC<heroProps> = () => {
  return (
    <HeroStyled>
      <NameContainer>
        <ParaStyled>Hello, I'm</ParaStyled>
        <NameStyled>Shravan Kumar</NameStyled>
        <NameStyled>Karnati</NameStyled>
        <ParaStyled>&</ParaStyled>
        <ParaStyled>
          I'm a <span className="special">Full Stack Software developer</span>{" "}
          and a <span className="special">Programmer</span>.
        </ParaStyled>
        <ParaStyled>
          I often work with <span className="special">JavaScript</span> and{" "}
          <span className="special">Python</span>.
        </ParaStyled>
      </NameContainer>
      <LinkContainer>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Shravankumarkarnati"
        >
          <SvgContainer>
            <FaGithub />
            <p>Github</p>
          </SvgContainer>
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shravan-kumar-1502/"
        >
          <SvgContainer>
            <FaLinkedin />
            <p>LinkedIn</p>
          </SvgContainer>
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://bitbucket.org/ShravanKarnati/"
        >
          <SvgContainer>
            <FaBitbucket />
            <p>Bitbucket</p>
          </SvgContainer>
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:shravan.kumar063@gmail.com"
        >
          <SvgContainer>
            <MdEmail />
            <p>Email</p>
          </SvgContainer>
        </a>
        <a
          href={Resume}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgContainer>
            <FaFilePdf />
            <p>Resume</p>
          </SvgContainer>
        </a>
      </LinkContainer>
    </HeroStyled>
  );
};
export default Hero;
