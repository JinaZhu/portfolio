import styled from "styled-components";

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
  margin: 1rem 5rem;
`;

export const InfoP = styled.p`
  margin-left: 5rem;
  font-size: 20px;
  text-align: left;
`;

export const CardContainer = styled.div`
  width: 200px;
  height: 200px;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
  //   transform: rotateY(-180deg);
  backface-visibility: hidden;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.figure`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backface-visibility: hidden;
`;
export const Back = styled.figure`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
`;
export const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

export const Cover = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const CoverText = styled.p`
  color: #a2bab9;
  font-size: 30px;
  font-family: Oswald;
`;
