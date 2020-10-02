import React from "react";
import styled, { keyframes } from "styled-components";

interface aboutProps {}

const ShowAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const AboutStyled = styled.div`
  animation: ${ShowAnimation} 1s ease-in-out;
  flex: 1;
  width: 100vw;
  padding: 2rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem 0;
  border-bottom: 0.2rem solid ${({ theme }) => theme.grey};
`;

export const Header = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    font-size: 4.5rem;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colorPrimary};
  -webkit-background-clip: text;
  --moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    font-size: 4rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    font-size: 6rem;
  }
`;

export const SubHeadingContainer = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 1.5rem;
  font-weight: 500;
  text-transform: capitalize !important;
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    font-size: 3rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    font-size: 3.5rem;
  }

  & .special {
    font-weight: 700;
    background: ${({ theme }) => theme.colorPrimary};
    -webkit-background-clip: text;
    --moz-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const WorkList = styled.ul`
  padding-left: 2rem;
  font-weight: 500;
  & li {
    margin-top: 1.5rem;
    font-size: 1.8rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileL}) {
    font-size: 2.8rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screenMobileM}) {
    & li {
      font-size: 3.2rem;
      margin-top: 3rem;
    }
  }
`;

const About: React.FC<aboutProps> = () => {
  return (
    <AboutStyled>
      <SectionContainer>
        <Heading>About Me</Heading>
        <Header>
          A passionate and creative software developer focused on designing,
          implementing and building fast, scalable and responsive applications,
          with strong understanding of programming, architectural patterns, data
          storage and security.
        </Header>
      </SectionContainer>
      <SectionContainer>
        <Heading>Professional Experience</Heading>
        <Header>Project Intern</Header>
        <SubHeadingContainer>
          <p className="special"> Aspire Vision Tech, Hyderabad, India</p>
          <p className="special">May '17 - Aug '17</p>
        </SubHeadingContainer>
        <WorkList>
          <li>
            Analysis of structured data using Big-Data Hadoop concepts and
            MapReduce algorithms and utilized the mined data to identify
            patterns.
          </li>
          <li>
            Querying databases with HiveQL queries and extracting information
            using HDFS and Apache HIVE on regular basis.
          </li>
          <li>
            Coordinate with other teams to help them make use of the Hadoop
            cluster and to easily integrate their results in the design we
            developed.
          </li>
          <li>
            Obtained Microsoft Technical Associate in Big Data and Hadoop
            Certification.
          </li>
        </WorkList>
      </SectionContainer>
      <SectionContainer>
        <Heading>Education</Heading>
        <Header>MASTER OF SCIENCE IN COMPUTER SCIENCE</Header>
        <SubHeadingContainer>
          <p className="special">univeristy of south florida, tampa, florida</p>
          <p className="special">3.55 GPA</p>
        </SubHeadingContainer>
        <SubHeadingContainer>JAN '19 - DEC '20(EXPECTED)</SubHeadingContainer>
        <br />
        <br />
        <br />
        <Header>
          BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING
        </Header>
        <SubHeadingContainer>
          <p className="special">gitam university, vizag, india</p>
          <p className="special">3.3 GPA</p>
        </SubHeadingContainer>
        <SubHeadingContainer>JUN '14 - APR '18</SubHeadingContainer>
      </SectionContainer>
    </AboutStyled>
  );
};
export default About;
