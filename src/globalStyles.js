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

  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
`;
