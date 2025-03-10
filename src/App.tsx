import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { FlightList } from './components/FlightList';
import { BookingForm } from './components/BookingForm';
import { PaymentForm } from './components/PaymentForm';
import { BookingConfirmation } from './components/BookingConfirmation';
import { Flight, BookingDetails } from './types/flight';
import { searchFlights, mockBookFlight } from './services/mockFlightAPI';
import { processPayment } from './services/mockPaymentAPI';

type BookingStep = 'search' | 'select' | 'details' | 'payment' | 'confirmation';

function App() {
  const [step, setStep] = useState<BookingStep>('search');
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [bookingReference, setBookingReference] = useState<string>('');
  const [transactionId, setTransactionId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSearch = async (from: string, to: string, query: string) => {
    setLoading(true);
    setError('');
    try {
      const results = await searchFlights(from, to, query);
      setFlights(results);
      setStep('select');
    } catch (err) {
      setError('Failed to search flights. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    setStep('details');
  };

  const handlePassengerDetails = async (passengers: { firstName: string; lastName: string; email: string }[]) => {
    if (!selectedFlight) return;

    const details: BookingDetails = {
      flight: selectedFlight,
      passengers,
      totalPrice: selectedFlight.price * passengers.length
    };

    setBookingDetails(details);
    setStep('payment');
  };

  const handlePayment = async (token: string) => {
    if (!bookingDetails) return;

    setLoading(true);
    setError('');

    try {
      // Process payment
      const payment = await processPayment(bookingDetails.totalPrice, token);
      setTransactionId(payment.transactionId);

      // Book flight
      const reference = await mockBookFlight(bookingDetails);
      setBookingReference(reference);

      setStep('confirmation');
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">AI Flight Booking</h1>
          <p className="mt-2 text-lg text-gray-600">Find and book your perfect flight</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Processing your request...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {step === 'search' && (
              <SearchForm onSearch={handleSearch} />
            )}

            {step === 'select' && flights.length > 0 && (
              <FlightList flights={flights} onSelect={handleFlightSelect} />
            )}

            {step === 'details' && selectedFlight && (
              <BookingForm flight={selectedFlight} onSubmit={handlePassengerDetails} />
            )}

            {step === 'payment' && bookingDetails && (
              <PaymentForm
                bookingDetails={bookingDetails}
                onPaymentComplete={handlePayment}
              />
            )}

            {step === 'confirmation' && bookingDetails && (
              <BookingConfirmation
                booking={{ ...bookingDetails, bookingReference }}
                transactionId={transactionId}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;