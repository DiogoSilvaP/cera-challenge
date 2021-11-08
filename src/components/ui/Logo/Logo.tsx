import React, { FC } from "react";
import { Props } from "./types";
import logo from "../../../cera_logo.png";

const Logo: FC<Props> = (props) => (
  <img alt="cera logo" src={logo} style={props?.style} data-testid="Logo" />
);

export default Logo;
