import { Carer } from "../Services/types";

export interface Props {
  shouldShowBookingSlots: boolean;
  carer: Carer | null;
  bookingSlots: Array<string>;
  clickCallback: () => void;
  onModalClose: () => void;
}
