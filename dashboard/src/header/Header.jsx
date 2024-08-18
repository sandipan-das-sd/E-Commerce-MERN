import React from 'react';

const Headers = () => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_Vb1GhcJbLvJwM1', // Replace with your Razorpay Key ID
      amount: '5000', // Amount in paisa (5000 paisa = 50 INR)
      currency: 'INR',
      name: 'Your App Name',
      description: 'Test Payment',
      image: 'https://your_logo_url', // Replace with your logo URL if available
      prefill: {
        name: 'Test User',
        email: 'user@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on('payment.success', function (response) {
      console.log('Payment successful:', response);
      alert(`Payment successful: ${response.razorpay_payment_id}`);
    });

    rzp1.on('payment.error', function (response) {
      console.error('Payment failed:', response.error);
      alert(`Payment failed: ${response.error.code} | ${response.error.description}`);
    });

    rzp1.on('payment.cancel', function (response) {
      console.warn('Payment cancelled:', response);
      alert('Payment cancelled by user.');
    });

    try {
      rzp1.open();
    } catch (error) {
      console.error('Razorpay open error:', error);
      alert('Failed to open Razorpay. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button
        style={{
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Headers;
