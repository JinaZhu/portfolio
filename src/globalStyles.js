import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  font-size: 20px;
  padding: ${(props) => props.paddings};
  color: ${(props) => props.color || "white"};
  border: ${(props) => props.border || "1px solid white"};
  margin: 2rem;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "white"};
    color: ${(props) => props.hoverColor || "white"};
  }

  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
`;
