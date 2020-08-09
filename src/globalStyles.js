import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  font-size: 20px;
  padding: ${(props) => props.paddings};
  color: white;
  border: 1px solid white;
  margin: 2rem;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #9b7778;
  }
`;
