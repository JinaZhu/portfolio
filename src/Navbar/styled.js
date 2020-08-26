import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    border: 1px solid white;
    padding: 3px;
  }

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
  z-index: 2;
  &:hover {
    background-color: white;
    color: #9b7778;
  }
  @media screen and (max-width: 1100px) {
    font-size: 15px;
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        background-color: white;
        color: #c98a6d;
        border: 1px solid #c98a6d;
        z-index: 2;
        &:hover {
          background-color: #c98a6d;
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
  color: #c98a6d;
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);
`;

export const ContactContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #c98a6d;
  padding: 2rem;
`;

export const MessageForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  position: relative;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #c98a6d;
  outline: none;
  padding: 5px;
  margin-bottom: 1rem;
  font-size: 16px;
  color: #c98a6d;
`;

export const FormTextarea = styled.textarea`
  border: 1px solid #c98a6d;
  outline: none;
  font-size: 16px;
  color: #c98a6d;
  padding: 5px;
`;
