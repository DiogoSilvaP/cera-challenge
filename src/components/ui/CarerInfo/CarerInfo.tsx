import { FC } from "react";
import Button from "../Button/Button";
import {
  ContainerStyled,
  FooterStyled,
  FooterText2Styled,
  FooterTextStyled,
  PhotoStyled,
} from "./CarerInfo.styled";
import { Props } from "./types";

const CarerInfo: FC<Props> = (props) => {
  const { name, photo, slots, onClickButton } = props;
  return (
    <ContainerStyled data-testid="CarerInfo">
      <PhotoStyled alt={name} src={photo} />
      <FooterStyled>
        <div>
          <FooterTextStyled>{name}</FooterTextStyled>
          <FooterText2Styled>Slots available: {slots}</FooterText2Styled>
        </div>
        <div>
          <Button
            style={{ minHeight: 34, fontSize: 12, fontWeight: 700 }}
            onClick={onClickButton}
          >
            Check Availability
          </Button>
        </div>
      </FooterStyled>
    </ContainerStyled>
  );
};

export default CarerInfo;
