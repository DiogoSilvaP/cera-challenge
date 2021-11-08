import { Carer } from "../Services/types";

export interface Props extends Carer {
  onClickButton: (carer: Carer) => void;
}
