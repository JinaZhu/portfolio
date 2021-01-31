import styled, { css } from "styled-components";

export const ProjectPage = styled.div`
  background-color: ${(props) => props.color};
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

export const ProjectContainer = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  margin: 5rem;
  height: 100%;
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: 800px) {
    margin: 0 1rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const P = styled.p`
  margin: 0;
  text-align: left;
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
  font-size: 50px;
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  letter-spacing: 7px;
  margin: 1rem;
  white-space: nowrap;
`;

export const Links = styled.a`
  margin-right: 1rem;
  border: 2px solid white;
  padding: 5px 5px 3px 5px;
`;

export const ProjectImage = styled.img`
  margin: 2px;
  object-fit: cover;
  width: ${(props) => props.size || "50"}px;
  height: ${(props) => props.size || "50"}px;
  opacity: 0.6;
  cursor: ${(props) => props.cursor};
  border: 2px solid white;

  ${(props) => {
    return (
      props.isActive &&
      css`
        opacity: 1;
      `
    );
  }}
  &:hover {
    opacity: 1;
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
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 0 0 5rem;
  min-height: 350px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
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
