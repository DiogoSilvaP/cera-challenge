import styled from "styled-components";
import { primaryColor } from "../constants";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${primaryColor};
  height: 148px;
  justify-content: space-between;
  align-items: center;
  color: white;
  > div:first-of-type {
    display: flex;
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  > span:first-of-type {
    font-size: 36px;
  }

  > span:last-of-type {
    font-size: 20px;
  }
`;
