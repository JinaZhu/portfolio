import styled, { css } from "styled-components";

export const ProjectPage = styled.div`
  background-color: ${(props) => props.color};
  min-height: 100vh;
  width: 100vw;

  @media screen and (max-width: 425px) {
    height: 100%;
  }
`;

export const ProjectBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 100vw;
  flex-direction: column;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 425px) {
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 425px) {
    margin: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  margin: 0;
  font-size: 50px;
  margin-left: 3rem;

  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
`;

export const SubTitle = styled.p`
  font-size: ${(props) => props.size || "20px"};
  margin-top: 0.5rem;
  margin-left: 3rem;
  margin-bottom: 0;
  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  height: 375px;
  width: 650px;
  margin: 0 2vw;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  user-select: none;
  pointer-events: none;
  border-radius: 5px;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    height: auto;
    width: 375px;
    box-shadow: none;
    margin: 2vw 0;
  }
`;

export const Border = styled.div`
  border: 2px solid white;
  width: 355px;
  height: 630px;
  border-radius: 5px;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 5rem;
  border: 2px solid white;
  height: 355px;
  width: 630px;
  border-radius: 5px;

  @media screen and (max-width: 425px) {
    height: auto;
    width: 355px;
    flex-direction: column;
    margin: 1rem;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 25px;
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  white-space: nowrap;
  margin: 10px;
  background-color: white;
  color: ${(props) => props.color};
  padding: 5px;
  width: 275px;
  text-align: left;
  border-radius: 5px;
`;

export const Links = styled.a`
  margin-right: 1rem;
  border: 2px solid white;
  padding: 5px 5px 3px 5px;
  position: relative;
  overflow: hidden;
  pointer-events: auto;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff,
      0 0 5px #fff, 0 0 5px #fff;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 5;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    transition: 0.5s;
  }
  &:hover::before {
    left: 100%;
  }
`;

export const ImageBorder = styled.div`
  border: 2px solid white;
  padding: 5px 5px 0px 5px;
  border-radius: 5px;
`;

export const ProjectImage = styled.img`
  object-fit: cover;
  width: ${(props) => props.size || "50"}px;
  height: ${(props) => props.size || "50"}px;
  cursor: ${(props) => props.cursor};
  filter: grayscale(1);
  margin: ${(props) => props.margin};
  pointer-events: auto;
  border-radius: 5px;

  &:hover {
    box-shadow: ${(props) =>
      props.shadow ||
      "0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff"};
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        filter: grayscale(0);
      `
    );
  }}
`;

export const ImageSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 315px;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (max-width: 425px) {
    margin: 10px;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 315px;
  height: 350px;

  @media screen and (max-width: 425px) {
    height: 330px;
  }
`;

export const P = styled.p`
  margin: 10px;
  text-align: left;
  font-weight: bold;
  font-size: 17px;

  @media screen and (max-width: 425px) {
    margin: 5px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 10px;
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

export const AllProjects = styled.div`
  overflow-x: scroll;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 95vh;
  cursor: pointer;
  transition: all 0.2s;
  will-change: transform;
  margin: auto;

  ${(props) => {
    return (
      props.isActive &&
      css`
        cursor: grabbing;
      `
    );
  }}

  @media screen and (max-width: 425px) {
    flex-direction: column;
    overflow-x: visible;
    height: 100%;
    width: 100vw;
  }
`;
