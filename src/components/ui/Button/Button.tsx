import { FC } from "react";
import { primaryColor } from "../constants";
import { Props } from "./types";

const Button: FC<Props> = (props) => {
  const { onClick, style } = props;
  return (
    <button
      data-testid="Button"
      onClick={onClick}
      style={{
        backgroundColor: primaryColor,
        borderRadius: 4,
        borderColor: primaryColor,
        color: "white",
        borderStyle: "solid",
        ...style,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
