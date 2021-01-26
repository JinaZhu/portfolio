import styled, { keyframes } from "styled-components";

export const HomepageContainer = styled.div`
  background-color: #a2bab9;
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
  height: 90vh;
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
  justify-content: flex-end;
  padding: 70px 0 0 0;

  @media screen and (max-width: 1200px) {
    padding: 300px 0 0 0;
  }

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    display: none;
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
  // background: #a2bab9;
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
