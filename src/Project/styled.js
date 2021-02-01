import styled, { css } from "styled-components";

export const ProjectPage = styled.div`
  background-color: ${(props) => props.color};
  min-height: 100vh;
  width: 100vw;
  padding-bottom: 25px;
`;

export const ProjectBody = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 5vw;
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
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  margin: 0;
  font-size: 50px;
  text-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px #f2f2f2, 0 0 30px #f2f2f2,
    0 0 40px #f2f2f2, 0 0 50px #f2f2f2;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  margin-top: 3rem;
`;

export const About = styled.div`
  overflow-y: scroll;
  will-change: transform;
  height: 200px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  border: none;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 375px;
  height: 650px;
  margin: 0 1vw;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  // @media screen and (max-width: 800px) {
  //   margin: 0 1rem;
  // }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 5rem;
`;

export const StackContainer = styled.div`
  display: flex;
`;

export const ProjectTitleContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Divider = styled.div`
  background-color: white;
  height: 2px;
  width: 100%;
  margin: 2rem 0;
`;

export const StackName = styled.p`
  margin: 0 1rem 0 0;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
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
`;

export const Links = styled.a`
  margin-right: 1rem;
  border: 2px solid white;
  padding: 5px 5px 3px 5px;
  position: relative;
  overflow: hidden;

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

export const ProjectImage = styled.img`
  margin: 2px;
  object-fit: cover;
  width: ${(props) => props.size || "50"}px;
  height: ${(props) => props.size || "50"}px;
  // opacity: 0.6;
  cursor: ${(props) => props.cursor};
  border: 2px solid white;
  filter: grayscale(1);

  ${(props) => {
    return (
      props.isActive &&
      css`
        // opacity: 1;
        filter: grayscale(0);
      `
    );
  }}
  &:hover {
    // opacity: 1;
    filter: grayscale(0);
  }

  // @media screen and (max-width: 1100px) {
  //   width: 100px,
  //   height: 100px
  // }

  // @media screen and (max-width: 320px) {
  //   width: 50px,
  //   height: 50px
  // }
`;

export const ImageSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  width: 315px;
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  width: 315px;
`;

export const P = styled.p`
  margin: 10px;
  text-align: left;
  font-weight: bold;
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
  width: 90vw;
  height: 100vh;
  flex-direction: row;
`;
