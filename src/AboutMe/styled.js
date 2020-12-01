import styled, { css } from "styled-components";

export const AboutMePage = styled.div`
  background-color: #a2bab9;
  min-width: 100vw;
  padding-bottom: 20px;
`;

export const TitleContainer = styled.div`
  margin: 1rem 5rem;

  @media screen and (max-width: 425px) {
    margin: 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-family: Oswald;
  font-size: 50px;
  margin: 0;
  text-align: left;
  text-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px #f2f2f2, 0 0 30px #f2f2f2,
    0 0 40px #f2f2f2, 0 0 50px #f2f2f2;
`;

export const InfoContainer = styled.div`
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  margin: 1rem 5rem 0rem 5rem;

  @media screen and (max-width: 425px) {
    margin: 1rem 1rem 0rem 1rem;
  }
`;

export const InfoP = styled.p`
  margin-left: 5rem;
  font-size: 20px;
  text-align: left;

  @media screen and (max-width: 425px) {
    margin-left: 3rem;
    font-size: 16px;
  }
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
  cursor: pointer;
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

  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
`;

export const InterestCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 5rem;

  @media screen and (max-width: 800px) {
    margin: 0 3rem;
  }
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

  @media screen and (max-width: 425px) {
    margin: 0 1rem;
  }
`;

export const TechTitle = styled.h2`
  transform: rotate(90deg);
  font-size: 30px;
  font-family: Oswald;
  letter-spacing: 7px;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  right: 0%;
  top: 50%;
  transform-origin: top right;

  @media screen and (max-width: 800px) {
    top: 60%;
  }
`;

export const SectionTitle = styled.p`
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const NameTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
    margin-right: 1rem;
  }
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

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const TechP = styled.p`
  text-align: left;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

// work experience section styles

export const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0rem 5rem;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  position: relative;
  padding: 10px;

  @media screen and (max-width: 425px) {
    margin: 0 1rem;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyNameButton = styled.button`
  color: white;
  border: none;
  text-decoration: none;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  margin: 1rem;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: #a2bab9;
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        background-color: white;
        color: #a2bab9;
      `
    );
  }}
  @media screen and (max-width: 425px) {
    margin: 5px;
    font-size: 16px;
    padding: 7px;
  }
  @media screen and (max-width: 320px) {
    left: 15%;
    bottom: 70%;
    margin: 2px;
    font-size: 12px;
    padding: 9px;
  }
`;

export const JobContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 85%;

  @media screen and (max-width: 800px) {
    margin-left: 4rem;
  }
`;

export const DescriptionContainer = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 85%;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const DescriptionLi = styled.li`
  list-style-type: "-     ";
  text-align: left;
  margin: 1rem;
`;

export const JobTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0 3px 0;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const ExperienceTitle = styled.h2`
  transform: rotate(90deg);
  font-size: 30px;
  font-family: Oswald;
  letter-spacing: 7px;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  left: 4%;
  bottom: 80%;
  transform-origin: top left;

  @media screen and (max-width: 800px) {
    left: 8%;
    bottom: 80%;
  }

  @media screen and (max-width: 425px) {
    left: 12%;
    bottom: 70%;
  }

  @media screen and (max-width: 320px) {
    left: 15%;
    bottom: 70%;
  }
`;
