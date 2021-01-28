import styled, { keyframes } from "styled-components";

export const HomepageContainer = styled.div`
  background-color: ${(props) => props.color};
  padding: 0;
  margin: 0;
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const GlassContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 83vh;
  z-index: 1;
`;

export const Glass = styled.div`
  position: relative;
  max-width: 600px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin: 0 25px;
`;

export const ButtonP = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const P = styled.p`
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const AlignFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  width: 100vw;

  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    height: 8vh;
  }
`;

export const Credit = styled.a`
  text-decoration: none;
  color: white;
  margin: 0;
  font-size: 12px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  &:hover {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff,
      0 0 25px #fff, 0 0 30px #fff, 0 0 45px #fff;
  }
`;

export const SeasonSelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  margin: 0 5px;
  color: #fff;

  @media screen and (max-width: 425px) {
    margin: 0;
  }
`;

export const Seasons = styled.div`
  display: flex;
  align-items: flex-start;
  height: 10vh;

  @media screen and (max-width: 425px) {
    height: 100%;
  }
`;

export const FooterP = styled.p`
  margin: 0 0 10px 0;
  z-index: 10px;
`;

export const InnerBorder = styled.div`
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

export const SeasonSelectionButton = styled.button`
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  z-index: 10;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  &:hover {
    box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff,
      0 0 5px #fff, 0 0 5px #fff;
  }
`;

export const NameContainer = styled.div`
  margin: 1rem;
`;

// winter animations
const fall = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform: translateX(-20px) rotate(0deg);
    }
    10% {
        opacity: 1; 
    }
    20% {
        transform: translateX(-20px) rotate(45deg);
    }
    40% {
        transform: translateX(-20px) rotate(90deg);
    }
    60% {
        transform: translateX(20px) rotate(135deg);
    }
    80% {
        transform: translateX(-20px) rotate(180deg);
    }
    100% {
        top: 110%; 
        transform: translateX(-20px) rotate(225deg);
    }
`;

const backFall = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform: translateX(-20px) rotate(0deg);
    }
    100% {
        top: 110%; 
        transform: translateX(-20px) rotate(225deg);
    }
`;

export const WinterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
`;

export const SnowflakeForward = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const SnowflakeBackward = styled.div`
  transform: scale(0.8) rotateX(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(3px);
`;

export const SnowflakeImg = styled.img`
  position: absolute;
  left: ${(props) => props.left};
  animation: ${(props) => (props.fall ? backFall : fall)}
    ${(props) => props.duration} linear infinite;
  animation-delay: ${(props) => props.delay};
  filter: blur(${(props) => props.blur});
  transform: ${(props) => props.rotate};
  user-select: none;
`;

//spring

const petalFall = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform:rotate(0deg);
    }
    10% {
        opacity: 1; 
        transform: translateX(30px) rotate(25deg);
    }
    20% {
        transform: translateX(100px) rotate(45deg);
        // filter: blur(0.2px);
    }
    40% {
        transform: translateX(300px) rotate(90deg);
        // filter: blur(0.5px);
    }
    60% {
        transform: translateX(700px) rotate(135deg);
        // filter: blur(0.7px);
    }
    70% {
        top: 110%;
        transform: translateX(1000px) rotate(180deg);
        // filter: blur(1px);
    }
    80% {
        top: 100%;
        transform: translateX(1100px) rotate(180deg);
        // filter: blur(0.7px);
    }
    100% {
        top: 70%; 
        transform: translateX(1700px) rotate(225deg);
        // filter: blur(0.5px);
    }
`;

export const SpringContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
`;

export const FlowerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FlowerImg = styled.img`
  position: absolute;
  left: ${(props) => props.left};
  animation: ${petalFall} ${(props) => props.duration} linear infinite;
  animation-delay: ${(props) => props.delay};
  opacity: 0.5;
  filter: grayscale(40%) opacity(90%) saturate(120%);
`;
