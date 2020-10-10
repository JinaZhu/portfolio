import styled, { css } from "styled-components";

export const ProjectPage = styled.div`
  background-color: #adc2b5;
  min-height: 100vh;
  width: 100vw;
  padding-bottom: 25px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 1rem 5rem;

  @media screen and (max-width: 800px) {
    margin: 1rem;
  }
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
  @media screen and (max-width: 800px) {
    margin: 0 1rem;
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  margin-left: 5rem;
  margin-right: 2rem;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    margin-left: 3rem;

    ${(props) => {
      return (
        props.align === "right" &&
        css`
          margin-left: 1rem;
        `
      );
    }}
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;

    ${(props) => {
      return (
        props.align === "right" &&
        css`
          margin-left: 0rem;
        `
      );
    }}
  }
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

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
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
  bottom: 75%;
  transform-origin: top left;

  ${(props) => {
    return (
      props.border === "right" &&
      css`
        left: initial;
        right: 0%;
        top: 50%;
        transform-origin: top right;

        @media screen and (max-width: 775px) {
          top: 100%;
        }

        @media screen and (max-width: 425px) {
          top: 75%;
        }
      `
    );
  }}

  @media screen and (max-width: 800px) {
    left: 8%;
    bottom: 80%;
  }

  @media screen and (max-width: 425px) {
    left: 13%;
    bottom: 80%;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`;

export const Links = styled.a`
  margin-right: 1rem;
`;

export const ProjectImage = styled.img`
  margin: 0rem 2rem 1rem 0rem;
  filter: grayscale(1);
  object-fit: cover;
  width: 250px;
  height: 250px;
  white-space: nowrap;

  &:hover {
    filter: grayscale(0);
    transition: filter 1s;
  }

  @media screen and (max-width: 1100px) {
    width: 100px,
    height: 100px
  }
  @media screen and (max-width: 320px) {
    width: 50px,
    height: 50px
  }
`;

export const ImageContainer = styled.div`
  margin: 1rem 0;
  @media screen and (max-width: 425px) {
    height: auto;
    width: 250px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    will-change: transform;
    position: relative;
    border: none;
    padding: 0px;
    margin: 0px;
    -webkit-overflow-scrolling: touch;
  }
`;

export const Scroll = styled.p`
  display: none;
  color: white;
  margin: 5px 0 0 0;

  @media screen and (max-width: 425px) {
    display: block;
    font-size: 12px;
  }
`;
