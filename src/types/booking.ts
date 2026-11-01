export interface Booking {
  _id: string;
  userName: string;
  userEmail: string;
  status?: string;
  bookingData: {
    destination: string;
    "user-departure": string;
  };
}
