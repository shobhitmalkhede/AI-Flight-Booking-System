import React from 'react';
import { Flight } from '../types/flight';
import { Plane, Clock, Luggage } from 'lucide-react';

interface FlightListProps {
  flights: Flight[];
  onSelect: (flight: Flight) => void;
}

export function FlightList({ flights, onSelect }: FlightListProps) {
  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Plane className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{flight.airline}</span>
              </div>
              
              <div className="text-lg font-semibold">
                {flight.from} → {flight.to}
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{flight.duration}</span>
                </div>
                <div>
                  {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Luggage className="h-4 w-4" />
                <span>
                  {flight.baggage.checkedBags} checked bag{flight.baggage.checkedBags !== 1 ? 's' : ''} +
                  {flight.baggage.carryOn} carry-on
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                ₹{flight.price}
              </div>
              <button
                onClick={() => onSelect(flight)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}