import styled, { keyframes } from "styled-components";

export const HomepageContainer = styled.div`
  background-color: #9b7778;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
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
  border-top: 1px solid white;
  border-left: 1px solid white;
  padding: 1rem 4rem;
`;

export const Name = styled.h1`
  font-family: "Oswald";
  font-size: 50px;
  letter-spacing: 10px;
  padding: 0;
  margin: 0.5rem;
  // color: #9b7778;
`;

const plantShakeTop = keyframes`
  from {
    transform: rotateZ(225deg);
  }
  to {
    transform:rotateZ(215deg);
  }
`;

export const TopBranch = styled.img`
  position: absolute;
  top: -15%;
  left: 0%;
  transform: rotate(215deg);
  opacity: 0.5;
  width: 470px;
  animation: ${plantShakeTop} 5s infinite ease alternate-reverse 2s;

  @media screen and (max-width: 1200px) {
    width: 300px;
    top: -8%;
  }
`;

const plantShakeRight = keyframes`
from {
  transform: rotateZ(7deg);
}
to {
  transform: rotateZ(0deg);
}
`;

export const RightBranch = styled.img`
  position: absolute;
  top: 36%;
  right: -1%;
  opacity: 0.5;
  width: 470px;
  animation: ${plantShakeRight} 5s infinite ease alternate-reverse 2s;

  @media screen and (max-width: 1200px) {
    width: 300px;
    top: 60%;
  }
`;
