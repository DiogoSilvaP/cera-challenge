import { FC } from "react";
import Button from "../Button/Button";
import { modalColor } from "../constants";
import { Props } from "./types";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import {
  ModalSubTitleStyled,
  ModalTitleStyled,
  SlotsContainerStyled,
} from "./Modal.styled";

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
      <ModalTitleStyled>Schedule Carer</ModalTitleStyled>
      <ModalSubTitleStyled>{carer?.name}</ModalSubTitleStyled>
      <SlotsContainerStyled style={{}}>
        {bookingSlots.map((bookingSlot) => {
          const [hours, minutes] = bookingSlot.split(":");
          const date = new Date();
          date.setHours(Number.parseInt(hours));
          date.setMinutes(Number.parseInt(minutes));
          return (
            <Button
              key={uuidv4()}
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
      </SlotsContainerStyled>
    </Modal>
  </>
);

export default ModalC;
