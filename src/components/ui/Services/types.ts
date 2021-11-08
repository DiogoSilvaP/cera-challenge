export interface Carer {
  name: string;
  slots: number;
  photo: string;
}

export interface CarerInfo {
  carers: Array<Carer>;
}

export interface BookingSlots {
  UTCAvailableSlots: Array<string>;
}
