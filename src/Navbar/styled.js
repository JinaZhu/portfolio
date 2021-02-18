import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const textGlow = css`
  text-shadow: 0 0 5px #f2f2f2, 0 0 10px #f2f2f2, 0 0 15px #f2f2f2,
    0 0 20px #f2f2f2, 0 0 25px #f2f2f2, 0 0 30px #f2f2f2, 0 0 35px #f2f2f2;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem;
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 1000px) {
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    width: 50%;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;

export const NavP = styled.p`
  z-index: 3;
  &:hover {
    ${textGlow}
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        ${textGlow}
      `
    );
  }}
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 3px;
  z-index: 1;
  display: inline-block;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 1.5px;
    background: #fff;
    transiton: width 0.3s;
  }

  &:hover::after {
    width: 100%;
    transition: width 0.3s;
  }

  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

//contact page

export const ContactButton = styled.button`
  border: none;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  font-weight: bold;
  color: white;
  outline: none;
  padding: 7px 10px;
  font-size: 20px;
  z-index: 5;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;

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

  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;
    padding: 5px 7px;
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        position: relative;
        background-color: white;
        color: ${(props) => props.color};
        z-index: 5;
        &:hover {
          background-color: ${(props) => props.color};
          color: white;
        }
      `
    );
  }}
`;

export const ContactPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 1;
  color: ${(props) => props.color};
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);
`;

export const ContactContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.color};
  color: white;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    width: 60%;
    margin-top: 1rem;
  }
  @media screen and (max-width: 320px) {
    padding: 0.3rem;
    width: 70%;
  }
`;

export const EmailButton = styled.button`
  padding: 1rem 0;
  background-color: transparent;
  font-size: 20px;
  margin: 2rem;
  cursor: pointer;
  outline: none;
  border: 2px solid white;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:hover {
    box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff,
      0 0 5px #fff, 0 0 5px #fff;
    // color: ${(props) => props.color};
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

export const EmailLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 3rem;
  white-space: nowrap;
  font-weight: bold;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    padding: 2rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 30px;
  font-family: "Russo One", sans-serif;

  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
`;
