export async function processPayment(amount: number, token: string): Promise<{
  success: boolean;
  transactionId: string;
}> {
  // Simulate payment processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate success/failure (90% success rate)
  const success = Math.random() < 0.9;
  
  if (!success) {
    throw new Error('Payment processing failed. Please try again.');
  }
  
  return {
    success: true,
    transactionId: Math.random().toString(36).substring(2, 15).toUpperCase()
  };
}