export interface Flight {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  airline: string;
  stops: number;
  duration: string;
  baggage: {
    checkedBags: number;
    carryOn: number;
  };
}

export interface BookingDetails {
  flight: Flight;
  passengers: {
    firstName: string;
    lastName: string;
    email: string;
  }[];
  totalPrice: number;
  bookingReference?: string;
}