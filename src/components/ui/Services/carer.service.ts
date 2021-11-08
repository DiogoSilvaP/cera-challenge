import axios from "axios";

export const fetchCarers = async () =>
  axios.get("https://ceracare.github.io/carers.json");

export const fetchBookingSlots = async () =>
  axios.get("https://ceracare.github.io/availableSlots.json");

export const bookSlot = async () =>
  axios.get("https://ceracare.github.io/bookSlot.json");
