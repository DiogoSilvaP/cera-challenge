import { FC } from "react";
import Button from "../Button/Button";
import { primaryColor } from "../constants";
import { Props } from "./types";

const CarerInfo: FC<Props> = (props) => {
  const { name, photo, slots, onClickButton } = props;
  return (
    <div style={{ width: "25%" }} data-testid="CarerInfo" >
      <img
        style={{ objectFit: "contain", width: "100%", height: 475 }}
        alt={name}
        src={photo}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 18 }}>{name}</span>
          <span style={{ color: primaryColor, fontSize: 18 }}>
            Slots available: {slots}
          </span>
        </div>
        <div
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{ minHeight: 34, fontSize: 12, fontWeight: 700 }}
            onClick={onClickButton}
          >
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarerInfo;
