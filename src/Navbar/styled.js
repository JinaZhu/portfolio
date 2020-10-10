import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  padding: 0;
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

export const NavLi = styled.li`
  list-style: none;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 3px;
  white-space: nowrap;

  &:hover {
    border: 1px solid white;
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
  background-color: transparent;
  border: 1px solid white;
  color: white;
  outline: none;
  padding: 7px 10px;
  font-size: 20px;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${(props) => props.color};
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
        background-color: white;
        color: #ebc1a7;
        border: 1px solid #ebc1a7;
        z-index: 2;
        &:hover {
          background-color: #ebc1a7;
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
  z-index: 1;
  opacity: 1;
  color: #ebc1a7;
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);
`;

export const ContactContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ebc1a7;
  padding: 2rem;

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
  background-color: white;
  color: white;
  border: 1px solid #ebc1a7;
  font-size: 20px;
  margin: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #ebc1a7;
  }
`;

export const EmailLink = styled.a`
  text-decoration: none;
  color: #ebc1a7;
  padding: 3rem;
  white-space: nowrap;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    padding: 2rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 30px
  font-family: Oswald; 

  @media screen and (max-width: 425px) {
    font-size: 25px;
  }

`;
