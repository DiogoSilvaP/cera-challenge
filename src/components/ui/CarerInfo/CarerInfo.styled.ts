import styled from "styled-components";
import { primaryColor } from "../constants";

export const ContainerStyled = styled.div`
  width: 25%;
`;

export const PhotoStyled = styled.img`
  object-fit: contain;
  width: 100%;
  height: 475px;
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-around;
  > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  > div:last-of-type {
    justify-content: flex-end;
  }
`;

export const FooterTextStyled = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const FooterText2Styled = styled.span`
  font-size: 18px;
  color: ${primaryColor};
`;
