import React from "react";
import styled, { keyframes } from "styled-components";
import { projectData, ProjectType } from "../utils/data/projectData";
import { Heading } from "./about";
import Star from "../utils/images/A-Star.png";
import Corterie from "../utils/images/corterie.png";
import Regale from "../utils/images/regale.png";
import Shorts from "../utils/images/shorts.png";
import TravelLog from "../utils/images/travelLog.png";

const ShowAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

interface projectsProps {}

const ProjectsStyled = styled.div`
  animation: ${ShowAnimation} 1s ease-in-out;
  padding: 5rem;

  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    padding-top: 10rem;
  }
`;

const Project = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.grey};
  border-bottom: 2rem solid ${({ theme }) => theme.primary};
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    flex-direction: column;
    &:nth-of-type(even) {
      flex-direction: column;
    }
  }
`;

const Part = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadingStyled = styled(Heading)`
  margin-bottom: 2rem;
`;

const Descirption = styled.p`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    margin-bottom: 4rem;
  }
`;

const Tools = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, max-content);
  grid-gap: 2rem;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    grid-template-columns: repeat(3, max-content);
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    grid-template-columns: repeat(2, max-content);
  }

  li {
    border-radius: 0.5rem;
    text-align: center;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    float: left;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
      font-size: 2rem;
    }
  }
`;

const Image = styled.div`
  padding: 3rem;

  & img {
    border-radius: 0.5rem;
    width: 40rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    margin: 2rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    &,
    &:focus,
    &:active,
    &:hover {
      border: 0;
      outline: none;
    }
    background: ${({ theme }) => theme.colorPrimary};
    & a {
      color: ${({ theme }) => theme.primary};
      text-decoration: none;
      font-size: 1.8rem;
      text-transform: capitalize;
      font-weight: 500;
    }
  }
`;

const Projects: React.FC<projectsProps> = () => {
  return (
    <ProjectsStyled>
      {projectData.map((cur: ProjectType, index: number) => (
        <Project key={index}>
          {cur.image ? (
            <Image>
              <a
                href={`${cur.live || cur.code}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cur.image === "Star" ? (
                  <img src={Star} alt={`${cur.name} Preview`} />
                ) : null}
                {cur.image === "Regale" ? (
                  <img src={Regale} alt={`${cur.name} Preview`} />
                ) : null}
                {cur.image === "Corterie" ? (
                  <img src={Corterie} alt={`${cur.name} Preview`} />
                ) : null}
                {cur.image === "TravelLog" ? (
                  <img src={TravelLog} alt={`${cur.name} Preview`} />
                ) : null}
                {cur.image === "Shorts" ? (
                  <img src={Shorts} alt={`${cur.name} Preview`} />
                ) : null}
              </a>
            </Image>
          ) : null}
          <Part>
            <HeadingStyled>{cur.name}</HeadingStyled>
            <Descirption>{cur.description}</Descirption>
            <Tools>
              {cur.tools.map((tool: string) => (
                <li key={tool}>{tool}</li>
              ))}
            </Tools>
            <BtnContainer>
              {cur.live ? (
                <button>
                  <a
                    href={`${cur.live}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </button>
              ) : null}
              <button>
                <a
                  href={`${cur.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </button>
            </BtnContainer>
          </Part>
        </Project>
      ))}
    </ProjectsStyled>
  );
};
export default Projects;
