import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  @media screen and (max-width: 1000px) {
    width: 40%;
  }
`;

export const NavLi = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;

  @media screen and (max-width: 1100px) {
    font-size: 15px;
  }
`;

export const ContactButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  outline: none;
  padding: 7px 10px;
  font-size: 20px;

  &:hover {
    background-color: white;
    color: #9b7778;
  }
  @media screen and (max-width: 1100px) {
    font-size: 15px;
  }
`;
