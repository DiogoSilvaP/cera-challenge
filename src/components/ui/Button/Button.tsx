import { FC } from "react";
import { ButtonStyled } from "./Button.styled";
import { Props } from "./types";

const Button: FC<Props> = (props) => {
  const { onClick, style } = props;
  return (
    <ButtonStyled data-testid="Button" onClick={onClick} style={style}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
