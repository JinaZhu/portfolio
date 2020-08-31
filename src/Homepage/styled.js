import styled, { keyframes } from "styled-components";

export const HomepageContainer = styled.div`
  background-color: #d0aaaa;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden !important;
  overflow-y: hidden;
`;

export const IntroContainter = styled.div`
  margin: 50% 50%;
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

  // @media screen and (max-width: 1024px) {
  //   margin: 25% 20%;
  // }

  @media screen and (max-width: 800px) {
    margin: 30% 20%;
  }

  @media screen and (max-width: 425px) {
    margin: 20% 10% 10% 10%;
    padding: 1.5rem 5rem;
  }

  @media screen and (max-width: 320px) {
    margin: 2% 5%;
    padding: 1.5rem 5rem;
  }
`;

export const P = styled.p`
  font-size: 20px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
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

  @media screen and (max-width: 800px) {
    width: 500px;
    top: -8%;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    top: -8%;
  }

  @media screen and (max-width: 414px) {
    display: none;
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
  right: 0%;
  opacity: 0.5;
  width: 470px;
  animation: ${plantShakeRight} 5s infinite ease alternate-reverse 2s;
  pointer-events: none;

  @media screen and (max-width: 775px) {
    width: 400px;
    top: 60%;
  }

  @media screen and (max-width: 750px) {
    width: 400px;
    top: 80%;
  }

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const AlignFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 70px 0 0 0;

  @media screen and (max-width: 1200px) {
    padding: 300px 0 0 0;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Credit = styled.a`
  text-decoration: none;
  color: white;
  padding-bottom: 5px;
  border-bottom: 1px solid white;

  &:hover {
    color: #786b6e;
    border-bottom: 1px solid #786b6e;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NameContainer = styled.div`
  margin: 1rem;
`;
