import { FC } from "react";
import Button from "../Button/Button";
import { modalColor } from "../constants";
import { Props } from "./types";
import Modal from "react-modal";

const ModalC: FC<Props> = ({
  shouldShowBookingSlots,
  bookingSlots,
  carer,
  clickCallback,
  onModalClose,
}) => (
  <>
    <Modal
      style={{
        content: {
          width: 325,
          height: 375,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: modalColor,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
      onRequestClose={onModalClose}
      preventScroll={true}
      isOpen={shouldShowBookingSlots}
    >
      <span style={{ fontSize: 24, fontWeight: 400 }}>Schedule Carer</span>
      <span style={{ fontSize: 18, fontWeight: 400 }}>{carer?.name}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-evenly",
          width: "90%",
        }}
      >
        {bookingSlots.map((bookingSlot) => {
          const [hours, minutes] = bookingSlot.split(":");
          const date = new Date();
          date.setHours(Number.parseInt(hours));
          date.setMinutes(Number.parseInt(minutes));
          return (
            <Button
              style={{ width: "100%", minHeight: 26, fontWeight: 700 }}
              onClick={clickCallback}
            >
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Button>
          );
        })}
      </div>
    </Modal>
  </>
);

export default ModalC;
