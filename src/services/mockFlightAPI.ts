import { Flight } from '../types/flight';
import { addHours, format } from 'date-fns';

const airlines = ['MockAir', 'VirtualJet', 'SimplyFly', 'AeroTest'];
const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Dubai', 'Singapore'];

function generateRandomFlight(from: string, to: string, maxPrice: number = Infinity): Flight {
  const departureTime = new Date();
  departureTime.setHours(Math.floor(Math.random() * 24));
  
  const duration = Math.floor(Math.random() * 12) + 2; // 2-14 hours
  const arrivalTime = addHours(departureTime, duration);
  
  const price = Math.floor(Math.random() * 1000) + 200;
  const stops = Math.floor(Math.random() * 2);
  
  return {
    id: Math.random().toString(36).substring(7),
    from,
    to,
    departureTime: format(departureTime, 'yyyy-MM-dd HH:mm'),
    arrivalTime: format(arrivalTime, 'yyyy-MM-dd HH:mm'),
    price: price > maxPrice ? maxPrice - 100 : price,
    airline: airlines[Math.floor(Math.random() * airlines.length)],
    stops,
    duration: `${duration}h`,
    baggage: {
      checkedBags: Math.floor(Math.random() * 3),
      carryOn: 1
    }
  };
}

export async function searchFlights(
  from: string,
  to: string,
  query?: string,
  maxPrice?: number
): Promise<Flight[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const flights: Flight[] = Array.from({ length: 10 }, () => 
    generateRandomFlight(from, to, maxPrice)
  );
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    
    // Filter based on query
    if (lowerQuery.includes('without halt')) {
      return flights.filter(f => f.stops === 0);
    }
    
    if (lowerQuery.includes('2 free check-in bags')) {
      return flights.filter(f => f.baggage.checkedBags >= 2);
    }
    
    if (lowerQuery.includes('without')) {
      const priceLimit = parseInt(query.match(/without\s+Rs\s+(\d+)/)?.[1] || '0');
      if (priceLimit) {
        return flights.filter(f => f.price < priceLimit);
      }
    }
  }
  
  return flights;
}

export async function mockBookFlight(bookingDetails: BookingDetails): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Generate a random booking reference
  const bookingRef = Math.random().toString(36).substring(2, 10).toUpperCase();
  
  return bookingRef;
}