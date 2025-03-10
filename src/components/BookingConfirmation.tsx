import React from 'react';
import { BookingDetails } from '../types/flight';
import { CheckCircle, Plane, Users, CreditCard } from 'lucide-react';

interface BookingConfirmationProps {
  booking: BookingDetails & { bookingReference: string };
  transactionId: string;
}

export function BookingConfirmation({ booking, transactionId }: BookingConfirmationProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-600 p-6 text-white">
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-8 w-8" />
          <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
        </div>
        <p className="mt-2 text-blue-100">
          Booking Reference: {booking.bookingReference}
        </p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <Plane className="h-5 w-5" />
            <h3 className="font-medium">Flight Details</h3>
          </div>
          <div className="ml-7 space-y-1">
            <p className="text-lg font-semibold">
              {booking.flight.from} → {booking.flight.to}
            </p>
            <p className="text-gray-600">
              {booking.flight.airline} • {booking.flight.departureTime}
            </p>
            <p className="text-gray-600">
              Duration: {booking.flight.duration} • 
              {booking.flight.stops === 0 ? ' Direct Flight' : ` ${booking.flight.stops} Stop${booking.flight.stops > 1 ? 's' : ''}`}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="h-5 w-5" />
            <h3 className="font-medium">Passenger Details</h3>
          </div>
          <div className="ml-7 space-y-2">
            {booking.passengers.map((passenger, index) => (
              <div key={index} className="text-gray-600">
                {passenger.firstName} {passenger.lastName}
                <div className="text-sm text-gray-500">{passenger.email}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <CreditCard className="h-5 w-5" />
            <h3 className="font-medium">Payment Details</h3>
          </div>
          <div className="ml-7 space-y-1">
            <p className="text-gray-600">Amount Paid: ₹{booking.totalPrice}</p>
            <p className="text-gray-500 text-sm">Transaction ID: {transactionId}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 text-center">
        <p className="text-sm text-gray-600">
          A confirmation email has been sent to all passengers.
        </p>
      </div>
    </div>
  );
}