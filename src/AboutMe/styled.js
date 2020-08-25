import styled, { css } from "styled-components";

export const AboutMePage = styled.div`
  background-color: #a2bab9;
`;

export const TitleContainer = styled.div`
  margin: 1rem 5rem;
`;

export const PageTitle = styled.h1`
  font-family: Oswald;
  font-size: 50px;
  margin: 0;
  text-align: left;
`;

export const InfoContainer = styled.div`
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  margin: 1rem 5rem 0rem 5rem;
`;

export const InfoP = styled.p`
  margin-left: 5rem;
  font-size: 20px;
  text-align: left;
`;

// card flip

const RotateOnHover = css`
  transform: rotateY(180deg);
`;
const BackFace = css`
  backface-visibility: hidden;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
`;

export const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 1rem;

  &:hover ${Card} {
    ${RotateOnHover};
  }
`;

const Figures = css`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Front = styled.figure`
  ${Figures};
  ${BackFace};
`;

export const Back = styled.figure`
  ${Figures};
  ${RotateOnHover};
  ${BackFace};
`;
export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Cover = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoverText = styled.p`
  color: #a2bab9;
  font-size: 30px;
  font-family: Oswald;
`;

export const InterestCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 5rem;
`;

// tech stack section

export const TechStackContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0rem 5rem;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  position: relative;
`;

export const StackContainerTitle = styled.h2`
  transform: rotate(90deg);
  font-size: 30px;
  font-family: Oswald;
  letter-spacing: 7px;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  left: 4%;
  bottom: 50%;
  transform-origin: top left;

  ${(props) => {
    return (
      props.border === "right" &&
      css`
        left: initial;
        right: 0%;
        top: 50%;
        transform-origin: top right;
      `
    );
  }}
`;

export const StackType = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const NameTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StackNameTag = styled.div`
  height: 100%;
  padding: 0.5rem 1rem;
  background-color: white;
  margin: 0rem 1rem 1rem 0rem;
`;
export const StackName = styled.p`
  font-size: 20px;
  color: #a2bab9;
  margin: 0;
  letter-spacing: 2px;
  white-space: nowrap;
`;
