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
  z-index: 2;
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
  z-index: 2;
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
  z-index: 2;
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
  z-index: 2;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
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

export const NameContainer = styled.div`
  margin: 1rem;
`;

// winter animations
const fall = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform: translateX(20px) rotate(0deg);
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
  user-select: none;
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

const petalFall = (topEnd) => keyframes`
    0% {
        opacity: 0;
        top: -15%;
        transform:rotate(0deg);
    }
    10% {
        opacity: 1; 
    }
    100% {
        top: ${topEnd}%; 
        transform: translateX(1700px) rotate(225deg);
    }
`;

export const SeasonContainer = styled.div`
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
  animation: ${(props) => petalFall(props.topEnd)} ${(props) => props.duration}
    linear infinite;
  animation-delay: ${(props) => props.delay};
  opacity: 0.5;
  filter: grayscale(40%) opacity(90%) saturate(120%);
`;

//summer

const bounce = (height) => keyframes`
    from {
      transform: translateY(0px) rotate(0deg);
    } 
    to {
      transform: translateY(${height}) rotate(359deg);
    }
`;

export const BallContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const BallImg = styled.img`
  position: absolute;
  bottom: -25%;
  left: ${(props) => props.left}%;
  animation: ${(props) => bounce(props.height)} ${(props) => props.duration}
    infinite alternate ease-out;
  animation-delay: ${(props) => props.delay};
  opacity: 0.8;
  filter: saturate(150%);
`;
