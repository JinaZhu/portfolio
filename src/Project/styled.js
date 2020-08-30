import styled, { css } from "styled-components";

export const ProjectPage = styled.div`
  background-color: #adc2b5;
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
  height: 100%;

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
  margin-right: 2rem;
`;

export const StackContainer = styled.div`
  display: flex;
`;

export const ProjectTitleContainer = styled.div`
  width: 100%;
  height: 100%;
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
  left: 4%;
  bottom: 70%;
  transform-origin: top left;

  ${(props) => {
    return (
      props.border === "right" &&
      css`
        left: initial;
        right: 0%;
        top: 70%;
        transform-origin: top right;
      `
    );
  }}
`;

export const Links = styled.a`
  margin-right: 1rem;
`;

export const ProjectImage = styled.img`
  margin: 1rem 2rem 1rem 0rem;
  filter: grayscale(1);
  object-fit: cover;
  width: 250px;
  height: 250px;
  white-space: nowrap;

  &:hover {
    filter: grayscale(0);
    transition: filter 3s;
  }

  @media screen and (max-width: 1100px) {
    width: 100px,
    height: 100px
  }
`;
