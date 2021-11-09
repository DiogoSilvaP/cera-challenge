import { FC, useState } from "react";
import CarerInfo from "../CarerInfo/CarerInfo";
import Modal from "../Modal/Modal";
import { bookSlot, fetchBookingSlots } from "../Services/carer.service";
import { BookingSlots, Carer } from "../Services/types";
import { Props } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ContainerStyled } from "./Content.styled";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content: FC<Props> = (props) => {
  const { carersList } = props;

  const [shouldShowBookingSlots, setShouldShowBookingSlots] = useState(false);
  const [bookingSlots, setBookingSlots] = useState<Array<string>>([]);
  const [selectedCarer, setSelectedCarer] = useState<Carer | null>(null);

  const onClickAvailability = async (carer: Carer) => {
    const { data } = await fetchBookingSlots();
    setSelectedCarer(carer);
    setBookingSlots((data as BookingSlots).UTCAvailableSlots);
    setShouldShowBookingSlots(true);
  };

  const onClickBook = async () => {
    const { status } = await bookSlot();
    if (status === 200) {
      toast("Booked!", { type: "success", theme: "dark" });
    } else {
      toast("Error while booking!", { type: "error", theme: "dark" });
    }
    setShouldShowBookingSlots(false);
  };

  const onModalClose = () => {
    setSelectedCarer(null);
    setShouldShowBookingSlots(false);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <ContainerStyled>
        <Modal
          shouldShowBookingSlots={shouldShowBookingSlots}
          bookingSlots={bookingSlots}
          clickCallback={onClickBook}
          onModalClose={onModalClose}
          carer={selectedCarer}
        />
        {carersList?.carers.map((carer) => {
          return (
            <CarerInfo
              key={uuidv4()}
              onClickButton={() => onClickAvailability(carer)}
              {...carer}
            />
          );
        })}
      </ContainerStyled>
    </>
  );
};

export default Content;
