# AI Flight Booking System

A modern flight booking platform with AI-powered search capabilities, built with React and TypeScript.

![AI Flight Booking](https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074)

## Features

### 🔍 AI-Powered Search
- Natural language flight queries
- Intelligent filtering based on user preferences
- Support for complex search criteria

### ✈️ Flight Search Capabilities
- Search by departure and arrival cities
- Filter flights using natural language:
  - "flights without halt" for direct flights
  - "flights with 2 free check-in bags"
  - "flights without Rs 5000" for price filtering
- Real-time flight availability (simulated)

### 🎫 Booking Process
- Step-by-step booking workflow
- Multiple passenger support
- Baggage selection
- Seat preferences (coming soon)

### 💳 Payment Integration
- Secure payment processing (test mode)
- Support for credit/debit cards
- Transaction confirmation
- Booking reference generation

### 📱 User Experience
- Responsive design for all devices
- Real-time loading states
- Error handling
- Booking confirmation emails (simulated)

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Payment**: Stripe.js (test mode)
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https:
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-flight-booking
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Usage Examples

### Basic Flight Search
1. Enter departure city (e.g., "New York")
2. Enter arrival city (e.g., "London")
3. Click "Search Flights"

### AI Query Examples
Try these natural language queries:
- "flights without halt" - Shows only direct flights
- "flights with 2 free check-in bags" - Filters flights with baggage allowance
- "flights without Rs 5000" - Shows flights under Rs 5000

### Test Payment
Use these test card details:
- Card Number: 4242 4242 4242 4242
- Expiry: Any future date
- CVC: Any 3 digits

## Project Structure

```
src/
├── components/          # React components
│   ├── SearchForm.tsx
│   ├── FlightList.tsx
│   ├── BookingForm.tsx
│   ├── PaymentForm.tsx
│   └── BookingConfirmation.tsx
├── services/           # API and service functions
│   ├── mockFlightAPI.ts
│   └── mockPaymentAPI.ts
├── types/              # TypeScript interfaces
│   └── flight.ts
└── App.tsx            # Main application component
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

This project uses ESLint and TypeScript for code quality. Ensure your code follows the existing style:

- Use TypeScript for type safety
- Follow React best practices and hooks guidelines
- Maintain component modularity
- Write clear, descriptive variable and function names

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Flight data structure inspired by real airline APIs
- UI design influenced by modern booking platforms
- Icons provided by [Lucide React](https://lucide.dev)
- Background image from [Unsplash](https://unsplash.com)
