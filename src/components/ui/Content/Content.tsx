import { FC, useState } from "react";
import CarerInfo from "../CarerInfo/CarerInfo";
import Modal from "../Modal/Modal";
import { bookSlot, fetchBookingSlots } from "../Services/carer.service";
import { BookingSlots, Carer } from "../Services/types";
import { Props } from "./types";

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
      alert("Booked!");
    } else {
      alert("Error while booking!");
    }
    setShouldShowBookingSlots(false);
  };

  const onModalClose = () => {
    setSelectedCarer(null);
    setShouldShowBookingSlots(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
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
              onClickButton={() => onClickAvailability(carer)}
              {...carer}
            />
          );
        })}
      </div>
    </>
  );
};

export default Content;
