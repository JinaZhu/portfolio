import styled from "styled-components";

export const HomepageContainer = styled.div`
  background-color: #9b7778;
  padding: 0;
  margin: 0;
  min-height: 100vh;
`;

export const IntroContainter = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  font-size: 20px;
  margin: auto;
  margin-top: 7%;
`;

export const Name = styled.h1`
  font-family: "Oswald";
  font-size: 50px;
  letter-spacing: 10px;
  padding: 0;
  margin: 0.5rem;
`;

export const AboutMeButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  padding: 1rem 2rem;
  color: white;
  border: 1px solid white;
  margin: 2rem;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #9b7778;
  }
`;

export const TopBranch = styled.img`
  position: absolute;
  top: -100px;
  left: -20px;
  transform: rotate(210deg);
  opacity: 0.5;
  width: 470px;

  @media screen and (max-width: 1200px) {
    width: 300px;
    top: -70px;
    left: -15px;
  }
`;
