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
  @media screen and (max-width: 425px) {
    width: 75%;
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

  &:hover {
    border: 1px solid white;
  }

  @media screen and (max-width: 1100px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const ContactButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  outline: none;
  padding: 7px 10px;
  font-size: 20px;
  z-index: 2;
  &:hover {
    background-color: white;
    color: ${(props) => props.color};
  }
  @media screen and (max-width: 1100px) {
    font-size: 15px;
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
  background: white;
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

  &:hover {
    color: white;
  }
`;
