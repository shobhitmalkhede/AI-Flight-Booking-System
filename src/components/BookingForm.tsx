import React, { useState } from 'react';
import { Flight } from '../types/flight';

interface BookingFormProps {
  flight: Flight;
  onSubmit: (passengerDetails: { firstName: string; lastName: string; email: string }[]) => void;
}

export function BookingForm({ flight, onSubmit }: BookingFormProps) {
  const [passengers, setPassengers] = useState([{
    firstName: '',
    lastName: '',
    email: ''
  }]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(passengers);
  };

  const updatePassenger = (index: number, field: string, value: string) => {
    const newPassengers = [...passengers];
    newPassengers[index] = { ...newPassengers[index], [field]: value };
    setPassengers(newPassengers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md">
        <h3 className="text-lg font-medium text-blue-900">Flight Details</h3>
        <div className="mt-2 text-sm text-blue-700">
          <p>{flight.airline} - {flight.from} to {flight.to}</p>
          <p>Departure: {flight.departureTime}</p>
          <p>Price: ₹{flight.price}</p>
        </div>
      </div>

      {passengers.map((passenger, index) => (
        <div key={index} className="space-y-4">
          <h4 className="text-lg font-medium">Passenger {index + 1}</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={passenger.firstName}
                onChange={(e) => updatePassenger(index, 'firstName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={passenger.lastName}
                onChange={(e) => updatePassenger(index, 'lastName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={passenger.email}
              onChange={(e) => updatePassenger(index, 'email', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Continue to Payment
      </button>
    </form>
  );
}