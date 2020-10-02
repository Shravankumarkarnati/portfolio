import React from "react";
import styled, { keyframes } from "styled-components";
import { skillsData } from "../utils/data/skillsData";
import { SectionContainer, Heading } from "./about";

const ShowAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

interface skillsProps {}

const SkillsStyled = styled.div`
  animation: ${ShowAnimation} 1s ease-in-out;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 5rem;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    margin-top: 6rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    margin-top: 10rem;
  }
`;

export const PageHeading = styled.p`
  font-size: 2rem;
  font-weight: 500;
  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    font-size: 4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;
    &:first-child(1) {
      margin-top: 3rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    grid-template-columns: repeat(1, 1fr);
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0.5rem;
    @media only screen and (max-width: ${({ theme }) => theme.screenTabletP}) {
      font-size: 3rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
      font-size: 3.5rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
      font-size: 4rem;
    }
  }
`;

const Skills: React.FC<skillsProps> = () => {
  return (
    <SkillsStyled>
      <PageHeading>
        I like building small and medium beautiful, interactive and responsive
        applications and develop my projects from scratch.
        <br />I have worked with various technologies and I choose them
        depending on the objective of the project.
      </PageHeading>
      {Object.keys(skillsData).map((cur) => (
        <SectionContainer key={cur}>
          <Heading>{cur}</Heading>
          <Container>
            {skillsData[cur].map((p: string) => (
              <p key={p}>{p}</p>
            ))}
          </Container>
        </SectionContainer>
      ))}
    </SkillsStyled>
  );
};
export default Skills;
