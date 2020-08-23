import styled, { css } from "styled-components";

export const ProjectPage = styled.div`
  background-color: #748173;
  min-height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 1rem 5rem;
`;

export const Title = styled.h1`
  font-family: Oswald;
  margin: 0;
  font-size: 50px;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  margin-top: 3rem;
`;

export const ProjectContainer = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  margin: 0 5rem;
  position: relative;

  ${(props) => {
    console.log(props.border);
    return (
      props.border === "left" &&
      css`
        border-left: 1px solid white;
      `
    );
  }}
  ${(props) => {
    return (
      props.border === "right" &&
      css`
        border-right: 1px solid white;
      `
    );
  }}
`;

export const ProjectDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  margin-left: 5rem;
`;

export const StackContainer = styled.div`
  display: flex;
`;

export const StackName = styled.p`
  margin-right: 1rem;
`;

export const ProjectTitle = styled.h2`
  transform: rotate(90deg);
  font-size: 30px;
  font-family: Oswald;
  letter-spacing: 7px;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  left: -140px;
  top: 50%;
  transform-origin: bottom;
`;
