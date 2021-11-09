import styled from "styled-components";
import { primaryColor } from "../constants";

export const ButtonStyled = styled.button`
  background-color: ${primaryColor};
  border-radius: 4px;
  border-color: ${primaryColor};
  color: white;
  border-style: solid;
  &:hover {
    cursor: pointer;
  }
`;
